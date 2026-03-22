import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, message } = body;

        console.log("📥 Received form data:", { name, phone, message });

        return NextResponse.json(
            {
                success: false,
                error: "Testing mode: API is returning an error as requested."
            },
            { status: 500 }
        );

    } catch (error) {
        console.error("Error reading request:", error);
        return NextResponse.json(
            { success: false, error: "Invalid request data" },
            { status: 400 }
        );
    }
}