import { connectToDatabase } from '@/lib/mongo';
import Experience from '@/models/Experience';

export async function GET(request: Request) {
    try {
        await connectToDatabase();
        const response = await Experience.find(); 
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error)
    }
}

export async function POST(request: Request) { 
    try {
        await connectToDatabase();
        const body = await request.json(); // ✅ correctly parse JSON body
        console.log("Received body:", body);
        const newExperience = await Experience.create(body);
        return Response.json(newExperience, { status: 201 });
    } catch (error) {
        console.log(error)
    }
}


export async function DELETE(request: Request) {
    try {
        await connectToDatabase();
        const { id } = await request.json();
        const deletedExperience = await Experience.findByIdAndDelete(id);
        if (!deletedExperience) {
            return new Response('Experience not found', { status: 404 });
        }
        return new Response('Experience deleted successfully', { status: 200 });
    } catch (error) {
        console.error('Error deleting Experience:', error);
        return new Response('Failed to delete Experience', { status: 500 });
    }
}