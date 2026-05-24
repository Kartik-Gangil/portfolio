import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import Skills from "@/models/Skills";

export async function GET(request: Request) {
    try {
        await connectToDatabase();

        const url = new URL(request.url);
        const onlyDomains = url.searchParams.get('domains') === 'true';

        if (onlyDomains) {
            // return array of domain values only
            const docs = await Skills.find({}).select('domain -_id');
            const domains = docs.map((d: any) => d.domain);
            return NextResponse.json(domains);
        }

        const skills = await Skills.find({});
        return NextResponse.json(skills);
    } catch (error) {
        console.error('Error fetching skills:', error);
        return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectToDatabase();
        const body = await request.json();

        // Validate required fields
        if (!body.icon || !body.domain || !body.skills || !Array.isArray(body.skills)) {
            return NextResponse.json(
                { error: 'Missing required fields or invalid format' },
                { status: 400 }
            );
        }

        // Create new skill
        const newSkill = await Skills.create({
            icon: body.icon,
            domain: body.domain,
            skills: body.skills,
            size: body.size || 'small'
        });

        return NextResponse.json(newSkill, { status: 201 });
    } catch (error) {
        console.error('Error creating skill:', error);
        return NextResponse.json(
            { error: 'Failed to create skill' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        await connectToDatabase();
        const body = await request.json();

        // Validate required field
        if (!body.id) {
            return NextResponse.json(
                { error: 'Missing required field: id' },
                { status: 400 }
            );
        }

        // Delete skill by ID
        const deletedSkill = await Skills.findByIdAndDelete(body.id);
        if (!deletedSkill) {
            return NextResponse.json(
                { error: 'Skill not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Skill deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting skill:', error);
        return NextResponse.json(
            { error: 'Failed to delete skill' },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        await connectToDatabase();
        const body = await request.json();

        // If id provided, update by id (upsert)
        if (body.id) {
            const updated = await Skills.findOneAndUpdate(
                { _id: body.id },
                { $set: { icon: body.icon, domain: body.domain, skills: Array.isArray(body.skills) ? body.skills : body.skills?.split?.(',').map((s: string) => s.trim()) || [], size: body.size || 'small' } },
                { new: true, upsert: true }
            );
            return NextResponse.json(updated, { status: 200 });
        }

        // If domain provided, update by domain (upsert)
        if (body.domain) {
            const updated = await Skills.findOneAndUpdate(
                { domain: body.domain },
                { $set: { icon: body.icon, domain: body.domain, skills: Array.isArray(body.skills) ? body.skills : body.skills?.split?.(',').map((s: string) => s.trim()) || [], size: body.size || 'small' } },
                { new: true, upsert: true }
            );
            return NextResponse.json(updated, { status: 200 });
        }

        // Otherwise create new
        if (!body.icon || !body.domain || !body.skills) {
            return NextResponse.json({ error: 'Missing required fields for create' }, { status: 400 });
        }

        const created = await Skills.create({
            icon: body.icon,
            domain: body.domain,
            skills: Array.isArray(body.skills) ? body.skills : body.skills.split(',').map((s: string) => s.trim()),
            size: body.size || 'small'
        });

        return NextResponse.json(created, { status: 201 });
    } catch (error) {
        console.error('Error upserting skill:', error);
        return NextResponse.json({ error: 'Failed to upsert skill' }, { status: 500 });
    }
}