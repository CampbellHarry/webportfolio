"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
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
              <p className="text-red-500">{error}</p>
            ) : (
              blogs?.results?.map((blog: any, index: any) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  authorpfp={blog.author.imageUrl}
                  authorName={blog.author.firstName + " " + blog.author.lastName}
                  date={new Date(blog._creationTime).toLocaleDateString()}
                  tags={blog.previousauthors}
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

function BlogCard({ title, authorName, date, tags, authorpfp }: { title: string; authorName: string; date: string; tags: string[], authorpfp: string }) {
  return (
    <div className="flex flex-col gap-4 border w-full p-4 rounded-md bg-white dark:bg-black/60">
      <div className="flex flex-col gap-2">
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
        <div className="flex flex-row gap-1 items-start">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex flex-row gap-1 border px-2 py-0.5 rounded-md border-cyan-300 shadow-sm shadow-cyan-400/50 items-center"
            >
              <p className="text-neutral-400 font-semibold text-xs">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
