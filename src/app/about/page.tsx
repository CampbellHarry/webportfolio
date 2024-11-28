"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Particles from "@/components/particles/particles";

interface TechCardProps {
  icon: string;
  name: string;
  color: string;
  textColor?: string;
  bgcoloron?: boolean;
}

export function TechCard({ icon, name, color, textColor = "text-black", bgcoloron }: TechCardProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-300 hover:shadow-md ${color} ${textColor}`}
      role="listitem"
    >
      <img
        src={icon}
        className={`w-8 h-8 overflow-hidden rounded-sm ${bgcoloron ? "bg-white" : ""}`}
        aria-hidden="true"
        alt={`${name} logo`}
      />
      <span className="text-md font-semibold text-white">{name}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto flex flex-col px-4">
          {/* About Section */}
          <div className="mx-auto w-full md:w-[50%] flex flex-col items-start">
            <h1 className="text-3xl font-bold text-start mb-4 leading-tight">
              Beyond my technical expertise as a software engineer, there's a personal story that shapes my journey.
            </h1>
            <p className="mb-4 leading-7 text-neutral-400 flex flex-row">
              Hey there, I'm Harry, a security nerd and a full-stack software engineer based in England. This is my
              small part of the Internet where I share my projects, blogs, and other bits and bobs.
            </p>
            <p className="mb-4 leading-7 text-neutral-400">
              I'm a self-taught developer and have been coding since I was 13. I have a strong passion for security and
              software engineering, and I’m currently working as a software engineer at my startup.
            </p>
            <p className="mb-4 leading-7 text-neutral-400">
              Since I was young, I've been fascinated by technology and how it works. I've always enjoyed figuring out
              how things function and finding ways to improve them. These days, I love solving complex problems and
              crafting sleek, user-friendly interfaces.
            </p>
            <p className="mb-4 leading-7 text-neutral-400">
              I’m a big fan of open source and contribute to projects whenever I can. I also maintain a blog where I
              share my work and other interests.
            </p>
          </div>
          {/* Particles Animation */}
          <div className="flex items-center justify-center w-full mt-10">
            <div className="relative w-full md:w-1/2 border border-neutral-700 rounded-lg h-[40rem] p-2 overflow-hidden">
              <Particles className="absolute inset-0 h-full w-full" aria-hidden="true" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
