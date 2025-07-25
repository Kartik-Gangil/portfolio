import { connectToDatabase } from '@/lib/mongo';
import Project from '@/models/Project'


export async function GET() {
    try {
        await connectToDatabase();
        const projects = await Project.find();
        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return new Response('Failed to fetch projects', { status: 500 });
    }
}


export async function POST(request: Request) {
    try {
        await connectToDatabase();
        const body = await request.json();
        const newProject = await Project.create(body);
        return Response.json(newProject, { status: 201 });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return new Response('Failed to fetch projects', { status: 500 });
    }
}


export async function DELETE(request: Request) {
    try {
        await connectToDatabase();
        const { id } = await request.json();
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return new Response('Project not found', { status: 404 });
        }
        return new Response('Project deleted successfully', { status: 200 });
    } catch (error) {
        console.error('Error deleting project:', error);
        return new Response('Failed to delete project', { status: 500 });
    }
}