import { connectToDatabase } from '@/lib/mongo';
import Experience from '@/models/Experience';

export async function GET() {
    try {
        await connectToDatabase();
        const response = await Experience.find().sort({ position: 1 });
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
        // determine next position
        const last = await Experience.findOne().sort({ position: -1 }).select('position');
        const nextPos = (last?.position ?? -1) + 1;
        body.position = nextPos;
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

// Update order: expects { order: [id1, id2, ...] }
export async function PUT(request: Request) {
    try {
        await connectToDatabase();
        const body = await request.json();
        const { order } = body as { order?: string[] };
        if (!Array.isArray(order)) {
            return new Response('Invalid order', { status: 400 });
        }

        // Update each document's position according to the array index
        const bulkOps = order.map((id, index) => ({
            updateOne: {
                filter: { _id: id },
                update: { $set: { position: index } },
            }
        }));

        if (bulkOps.length) {
            await Experience.bulkWrite(bulkOps);
        }

        return new Response('Order updated', { status: 200 });
    } catch (error) {
        console.error('Error updating order:', error);
        return new Response('Failed to update order', { status: 500 });
    }
}