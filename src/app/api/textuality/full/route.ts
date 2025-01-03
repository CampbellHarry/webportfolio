import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {

    const token = process.env.TEXTUALITY_API_KEY;
    if (!token) {
        return NextResponse.json({ error: "API key is missing" }, { status: 500 });
    }

    const response = await fetch("https://textuality.hdev.uk/api/content/full/kx717kzet10bb0ey83q5dpzzhs77n5b9", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json();
    if (data.error) {
        return NextResponse.json({ error: data.error }, { status: 500 });
    } else {
        console.log(data);
        return NextResponse.json({ blogs: data }, { status: 200 });
    }
}