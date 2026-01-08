interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface CreateTaskRequest {
    title: string;
}

let tasks: Task[] = [
    {
        id: 1,
        title: "Task 1",
        completed: false,
    },
    {
        id: 2,
        title: "Task 2",
        completed: false,
    },
    {
        id: 3,
        title: "Task 3",
        completed: false,
    },
]

export async function GET() {
    return Response.json(tasks)
}

export async function POST(request: Request) {
    try {
        const { body } = await request.json()

        if (!body.title)
            return Response.json({ error: "Title is required" },
                { status: 400 })
    } catch (error) {

    }
}
