"use client"
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { useEffect, useState } from 'react';
import Gatherer from '@/components/textuality/pather';


interface BlogProps {
    params: {
        _blogid: string;
    };
}

export default function Blog({ params }: any) {
    const { _blogid } = params; 

    const [blogs, setBlogs] = useState<any | null>(null);

    useEffect(() => {
        fetch(`/api/textuality/specific?blogid=${_blogid}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    console.error(data.error);
                } else {
                    setBlogs(data.blogs);
                }
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }, [_blogid]);

    return (
<div className="w-full min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow h-screen py-12">
        <div className="md:container mx-auto flex flex-col h-full px-4">
            <div className="flex flex-col gap-1">
                <a href="/work" className="text-neutral-400 text-sm">Powered by Textuality</a>
                {blogs ? <Gatherer blogs={blogs} /> : <p>Loading...</p>}
            </div>
        </div>
    </main>
    <Footer />
</div>
    );
}

