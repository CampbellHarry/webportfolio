"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Particles from "@/components/particles/particles";
import { MovingCommand } from "../page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import { TechCard } from "../projects/page";

interface TechCardProps {
  icon: string;
  name: string;
  color: string;
  textColor?: string;
  bgcoloron?: boolean;
}

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  function CopyBio() {
    navigator.clipboard.writeText("Harry Campbell is a full stack developer and security engineer based in the UK, specializing in secure web application development and software engineering. As the founder of Hdev Group, Harry brings over 3 years of expertise in building scalable, high-performance digital solutions. Available for freelance projects, collaborations, and full-time opportunities globally.");
    const clip = document.getElementById("clipped");
    if (!clip) return;
    clip.innerText = "Copied!";
    setTimeout(() => {
      clip.innerText = "Copy Bio";
    }, 2000);
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f1f1f1] dark:bg-[#08070b]">
      <Header />
      <MovingCommand setmenu={setIsMenuOpen} isopen={isMenuOpen} />
      <main className="flex-grow py-12">
        <div className="container mx-auto flex flex-col px-4">
          <div className="mx-auto w-full md:w-[50%] flex flex-col items-start">
            <h1 className="text-4xl font-bold text-start mb-4 leading-tight bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="flex flex-row justify-between w-full gap-1 items-start">
                <div className="flex flex-row items-start justify-between w-full mr-2">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQE8xiUVqps7_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720299869628?e=1742428800&v=beta&t=WlG6Er4wkknA_I2Y1vwMvY1NHShrS999iJpLplWCGR4" alt="Harry Campbell" className="w-full h-auto rounded-md" />
                </div>
                <div className="flex flex-col w-full ml-4">
                <p className="text-start text-md mt-4 font-light text-muted-foreground/80">
                  <span className="text-foreground">Hello! I'm Harry Campbell</span>. I started working as a freelance software engineer in 2020, Working with clients worldwide. <br /> <br />
                  Today, I am the <span className="text-foreground">Founder & Lead Developer</span> & Hdev, a software development company that specializes in building secure, scalable, and high-performance software. Before working on Hdev, I was a freelance web developer for clients. <br /> <br />
                  Born in <span className="text-foreground">Liverpool, UK</span>, I have always been passionate about technology and software development. I have a strong background in software engineering, web development, and cybersecurity. <br /> <br />
                </p>
                </div>
            </div>
            <div className="flex flex-col w-full mt-4">
              <h2 className="text-2xl font-semibold">Bio</h2>
              <p className="text-md mt-4 font-light text-muted-foreground/80">Created for event hosts, journalists to copy and pate.</p>
              <div className="border-l-4 border-muted flex items-center justify-center w-full px-4 mt-4">
                <p className="text-md  font-light text-muted-foreground/80 italic">Harry Campbell is a full stack developer and security engineer based in the UK, specializing in secure web application development and software engineering. As the founder of Hdev Group, Harry brings over 3 years of expertise in building scalable, high-performance digital solutions. Available for freelance projects, collaborations, and full-time opportunities globally.</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full">
              <Button variant="ghost" onClick={() => CopyBio()} className="mt-4 gap-2 flex flex-row items-center justify-center h-full"><Clipboard size={20} /> <p id="clipped" className="ml-1 font-normal flex items-center h-full justify-center text-center">Copy Bio</p></Button>
            </div>
            <div className="flex flex-col w-full mt-10">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <p className="text-md mt-4 font-light text-muted-foreground/80">Here are some of the technologies that I use constantly.</p>
            <div className="flex flex-row flex-wrap gap-4 mt-4">
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/react-2.svg" name="React" color="#61DAFB" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/next-js.svg" name="Next.js" color="#000000" bgcoloron />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" name="Node.js" color="#339933" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/typescript.svg" name="TypeScript" color="#3178C6" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" name="JavaScript" color="#3178C6" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg" name="GraphQL" color="#E10098" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" name="MongoDB" color="#47A248" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg" name="MySQL" color="#4479A1" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" name="Firebase" color="#FFCA28" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/vercel.svg" name="Vercel" color="#000000" bgcoloron />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/aws-2.svg" name="AWS" color="#232F3E" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" name="TailwindCSS" color="#38B2AC" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/html-1.svg" name="HTML" color="#38B2AC" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/css-3.svg" name="CSS" color="#38B2AC" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/express-109.svg" name="Express" color="#000000" bgcoloron />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/python-5.svg" name="Python" color="#3776AB" />
              <TechCard icon="https://cdn.worldvectorlogo.com/logos/flask.svg" name="Flask" color="#000000" bgcoloron />
            </div>
          </div>
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
