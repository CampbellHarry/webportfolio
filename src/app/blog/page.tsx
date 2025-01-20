"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ArrowRight, Book } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MovingCommand } from "../page";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<{ results: any[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("all");
  const [mainlocation, setMainLocation] = useState({ left: 0, width: 0 });
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    transition: "all 0.3s ease-in-out",
  });

  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

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

  useEffect(() => {
    // Set initial position of slider based on the default category
    const target = categoryRefs.current[category];
    if (target) {
      const { offsetLeft, offsetWidth } = target;
      setMainLocation({ left: offsetLeft, width: offsetWidth });
      setUnderlineStyle((prev) => ({
        ...prev,
        left: offsetLeft,
        width: offsetWidth,
      }));
    }
  }, [category]);

  const handleMouseEnter = (e: React.MouseEvent, href: string) => {
    const target = e.currentTarget as HTMLElement;
    const { offsetLeft, offsetWidth } = target;
    setUnderlineStyle({
      left: offsetLeft,
      width: offsetWidth,
      transition: "all 0.2s ease-in-out",
    });
  };

  const handleMouseLeave = () => {
    setUnderlineStyle({
      left: mainlocation.left,
      width: mainlocation.width,
      transition: "all 0.2s ease-in-out",
    });
  };

  const handleClick = (href: string) => {
    setCategory(href);
    const target = categoryRefs.current[href];
    if (target) {
      const { offsetLeft, offsetWidth } = target;
      setMainLocation({ left: offsetLeft, width: offsetWidth });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f1f1f1] dark:bg-[#08070b]">
      <Header />
      <MovingCommand setmenu={setIsMenuOpen} isopen={isMenuOpen} />
      <main className="flex-grow h-full py-12">
        <div className="md:container mx-auto flex flex-col h-full px-4">
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-2xl md:text-5xl font-bold leading-snug md:w-7/12  text-start">
              My writing about my experience being a{" "}
              <span className="bg-cyan-500/10 text-cyan-400 px-2">
                full stack developer
              </span>
            </h1>
            <p className="text-neutral-400 text-sm">
              I write about my experiences as a full stack developer, and the
              things I learn along the way.
            </p>
            <div>
              <a href="https://textuality.hdev.uk/" className="text-foreground font-semibold text-lg">
                Powered by Textuality
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-2xl font-bold text-start">Latest posts</h2>
            <div className="relative flex flex-col gap-2">
              <div className="flex flex-row gap-3">
                <div
                  className="absolute h-0.5 rounded-b-md -bottom-1 bg-cyan-400"
                  id="slidermove"
                  style={underlineStyle}
                ></div>
                {["all", "security", "development"].map((item) => (
                  <div
                    key={item}
                    ref={(el) => {
                      categoryRefs.current[item] = el;
                    }}
                    className={`flex cursor-pointer items-center justify-center px-4`}
                    onClick={() => handleClick(item)}
                    onMouseEnter={(e) => handleMouseEnter(e, item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <p
                      className={`${
                        category === item
                          ? "text-cyan-400"
                          : "text-muted-foreground hover:text-foreground "
                      } `}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </p>
                  </div>
                ))}
              </div>
              </div>
            <div className="flex flex-col">
              {
                blogs?.results.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    date={blog.updated}
                    title={blog.title}
                    description={blog.description}
                    href={`/blog/${blog.slug || blog._id}`}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface BlogCardProps {
  date: string
  title: string
  description: string
  href: string
}
function BlogCard({ date, title, description, href }: BlogCardProps) {
  return (
    <div className="flex flex-row gap-4 h-auto">
    <div className="border flex relative justify-center h-auto w-1 bg-cyan-400">
      <div className="h-6 w-6 top-3.5 bg-black p-1 flex items-center justify-center rounded-full z-20 sticky">
      <Book size={18} className="text-white" />
      </div>
    </div>
    <Link 
      href={href}
      className="group flex w-full cursor-pointer items-start gap-6 rounded-md p-4 transition-colors hover:bg-foreground/5"
    >
      <div className="flex flex-col gap-2 flex-grow">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-5 bg-cyan-400" />
          <time dateTime={date} className="text-xs text-muted-foreground">
            {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="self-end pb-0.5">
        <ArrowRight size={18} className="text-cyan-400 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
    </div>
  );
}