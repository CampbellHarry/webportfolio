"use client"
import Header from "@/components/header/header"
import { Badge } from "@/components/ui/badge"
import Particles from "@/components/particles/particles"
import { ArrowRight, HardHat, UserCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {AnimateText, AnimateLowerText, BadgeAnimation} from "@/components/animatedtext/animation"
import Footer from "@/components/footer/footer"
import { motion } from 'framer-motion'
import Image from "next/image"
import Skills from "@/components/skills/skills"
import { ProjectCard } from "./work/page"

export default function PageIndex(){

  return(
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow py-12 container mx-auto">
        <div className="w-full relative border-muted border  overflow-hidden bg-gradient-to-t from-neutral-300 to-white dark:bg-gradient-to-t dark:from-black dark:to-[#2e3440] items-center justify-center transition-all  rounded-lg h-[40rem] p-4">
          <div className="absolute inset-0 h-full" aria-hidden="true">
            <Particles className="h-[200rem]" />
          </div>
          <div className="items-center justify-center h-full flex flex-col">
          <div className="flex flex-col text-center h-full justify-center">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQE8xiUVqps7_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720299869628?e=1738195200&v=beta&t=8BEWlH2SAWnof_LunZt0Ytf5zaK-_OodJ312TfnvzT0" className="rounded-full z-40 w-40 h-40 mx-auto mb-5" />
            <h2 className="lg:text-6xl text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500 leading-snug">
              <AnimateText />
            </h2>
            <div className="flex flex-row items-center justify-center gap-4 mt-4">
              <BadgeAnimation />
            </div>
            <div className="w-full mt-5 flex items-center justify-center">
              <p className="text-md text-foreground/90 text-center md:w-1/2">
              <AnimateLowerText />
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 w-full mt-5">
              <Link href="/contact">
                <Button variant="gradient" size="lg" asChild className="text-md bg-primary text-background rounded-xl font-semibold">
                  Contact Me
                </Button>
              </Link>
              <Link href="/resume/Harry Campbell (2).pdf">
                <Button variant="gradient" size="lg" asChild className="text-md rounded-xl font-semibold">
                  Resume
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 flex flex-col px-2">
        </div>
        <div className="container mx-auto mt-10 flex flex-col px-2">
          <h2 className="text-3xl font-semibold text-start">Recent Work</h2> 
          <div className="flex flex-col gap-4 mt-5">
            <ProjectCard
            title="Textuality"
            description="Textuality is a content management system that allows users to create, edit, and publish content to the web."
            imageSrc={["/work/textuality/home.png", "/work/textuality/content.png", "/work/textuality/premium.png", "/work/textuality/signin.png", "/work/textuality/tickets.png", "/work/textuality/innertickets.png"]}
            projectType="Content Management System"
            link="https://textuality.hdev.uk"
            date="October 2024"
            type="In Progress"
            technologies={[
                { icon: "/icons/typescript.svg", name: "TypeScript", color: "bg-[#000000]", textColor: "text-white", bgColorOn: true },
                { icon: "/icons/react-2.svg", name: "React", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nextjs-icon.svg", name: "Next.js", color: "bg-[#000000]", textColor: "text-white", bgColorOn: false },
                { icon: "/icons/tailwind.svg", name: "Tailwind CSS", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nodejs-icon.svg", name: "Node.js", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/mysql-logo.svg", name: "MySQL", color: "bg-[#000000]", bgColorOn: false },
            ]}
            />
            <ProjectCard
              title="HProjects"
              description="HProjects is a project management system that allows users to create, edit, and manage projects and more."
              imageSrc="/work/Screenshot 2024-10-25 165816.png"
              projectType="Project Management System"
              link="https://hprojects.hdev.uk"
              type="Completed"
              date="April 2024"
              technologies={[
                { icon: "/icons/typescript.svg", name: "TypeScript", color: "bg-[#000000]", textColor: "text-white", bgColorOn: true },
                { icon: "/icons/react-2.svg", name: "React", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nextjs-icon.svg", name: "Next.js", color: "bg-[#000000]", textColor: "text-white", bgColorOn: false },
                { icon: "/icons/tailwind.svg", name: "Tailwind CSS", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nodejs-icon.svg", name: "Node.js", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/mysql-logo.svg", name: "MySQL", color: "bg-[#000000]", bgColorOn: false },
              ]}
            />
          </div>
        </div>
        <div className="container mx-auto mt-10 px-2 flex flex-col">
          <div className="overflow-hidden ">
            <Skills  />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


