"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<{ results: any[] } | null>(null);
  console.log(blogs);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/textuality/full")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setBlogs(data.blogs);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow h-screen py-12">
        <div className="md:container mx-auto flex flex-col h-full px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-start">Blogs</h1>
            <div>
              <a href="/work" className="text-neutral-400 text-sm">Powered by Textuality</a>
            </div>
          </div>
          <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {error ? (
              <p className="text-red-500">Soon...</p>
            ) : (
              blogs?.results?.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                authorpfp={blog.author.imageUrl}
                authorName={blog.author.firstName + " " + blog.author.lastName}
                date={new Date(blog._creationTime).toLocaleDateString()}
                id={blog._id}
              />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function BlogCard({ title, authorName, date, authorpfp, id }: { title: string; authorName: string; date: string; authorpfp: string, id: string }) {
  return (
    <a href={`/blog/${id}`}>
    <div className="flex flex-col gap-4 border w-full px-4 py-4 rounded-md bg-white dark:bg-black/60">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-start">{title}</h1>
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={authorpfp}
              alt="Author"
              className="h-7 border-2 w-7 p-0.5 rounded-full"
            />
            <p className="text-neutral-400 text-sm">{authorName}</p>
          </div>
          •
          <p className="text-neutral-400 text-sm">{date}</p>
        </div>
      </div>
    </div>
    </a>
  );
}
