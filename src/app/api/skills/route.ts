import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import Skills from "@/models/Skills";

export async function GET() {
    try {
        await connectToDatabase();
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
            skills: body.skills
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