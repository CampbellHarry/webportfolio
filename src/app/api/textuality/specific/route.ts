import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const token = process.env.TEXTUALITY_API_KEY;
    const { searchParams } = new URL(request.url.replace('?=', '?'));
    const id = searchParams.get('blogid');
    if (!id) {
        return NextResponse.json({ error: 'Missing blogid parameter' }, { status: 400 });
    }

    const response = await fetch(
        `https://textuality.hdev.uk/api/content/exact/kx717kzet10bb0ey83q5dpzzhs77n5b9/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }
    );

    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
        const data = await response.json();
        if (data.error) {
            return NextResponse.json({ error: data.error }, { status: 500 });
        }
        return NextResponse.json({ blogs: data }, { status: 200 });
    } else {
        const text = await response.text();
        return NextResponse.json({ error: 'Invalid response format', response: text }, { status: 500 });
    }
}
