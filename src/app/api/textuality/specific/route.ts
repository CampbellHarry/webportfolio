import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const token = process.env.TEXTUALITY_API_KEY;
    const { searchParams } = new URL(request.url.replace('?=', '?'));
    const id = searchParams.get('blogid');
    if (!id) {
        return NextResponse.json({ error: 'Missing blogid parameter' }, { status: 400 });
    }

    const response = await fetch(
        `http://localhost:3001/api/content/exact/j977aj2be8w7wgyfdbsa5dhs8d768162/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }
    );

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log(data);
        if (data.error) {
            return NextResponse.json({ error: data.error }, { status: 500 });
        }
        return NextResponse.json({ blogs: data }, { status: 200 });
    } else {
        const text = await response.text();
        return NextResponse.json({ error: 'Invalid response format', response: text }, { status: 500 });
    }
}
