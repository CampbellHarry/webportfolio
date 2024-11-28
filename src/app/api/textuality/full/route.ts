import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {

    const token = process.env.TEXTUALITY_API_KEY;

    const response = await fetch("http://localhost:3001/api/content/full/j973e3g78ztaq32zk5cxvyz05s756xme", {
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