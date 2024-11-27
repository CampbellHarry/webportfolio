"use client"

import Image from 'next/image'
import Header from "@/components/header/header"
import { LucideIcon } from 'lucide-react'
import Footer from '@/components/footer/footer'


interface TechCardProps {
    icon: any
    name: string
    color: string
    textColor?: string
    bgcoloron?: boolean
  }
  
  export function TechCard({ icon, name, color, textColor = 'text-black', bgcoloron }: TechCardProps) {
    return (
      <div 
      className={`inline-flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-300 hover:shadow-md ${color} ${textColor}`}
      role="listitem"
      >
        <img src={icon} className={`w-5 h-5 overflow-hidden rounded-sm ${bgcoloron ? "bg-white" : ""}`} aria-hidden="true" />
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    )
  }
  

export default function WorkPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <h1 className="text-3xl font-bold text-start mb-8 container mx-auto px-4 ">Latest Projects</h1>
        <div className="md:grid flex flex-col md:grid-cols-4 gap-4 px-4">
        <div className='col-span-2'>
            <ProjectCard
            title="Textuality"
            description="Textuality is a content management system that allows users to create, edit, and publish content to the web."
            imageSrc="/work/textualitymain.png"
            projectType="Content Management System"
            date="October 2024"
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
        <div className='col-span-2 w-full'>
        <ProjectCard
          title="HProjects"
          description="HProjects is a project management system that allows users to create, edit, and manage projects and more."
          imageSrc="/work/Screenshot 2024-10-25 165816.png"
          projectType="Project Management System"
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
        <div className='col-span-2 w-full'>
            <ProjectCard
                title="HSpace"
                description="HSpace is a social media platform that allows users to connect, share, and collaborate with others."
                imageSrc="/work/Untitled design (7).png"
                projectType="Social Media Platform"
                date="September 2024"
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
        <div className='col-span-2 w-full'>
            <ProjectCard
                title="Scam Stopper"
                description="Scam Stopper is a fraud prevention system that helps users identify and prevent fraudulent activities."
                imageSrc="/work/scamstopper3.png"
                projectType="Fraud Prevention System / Platform"
                date="May 2024"
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
      </main>
      <Footer />
    </div>
  )
}

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string
    projectType: string
    date: string
    technologies: Array<{
      icon: string
      name: string
      color: string
      textColor?: string
      bgColorOn: boolean
    }>
  }
  
  export function ProjectCard({
    title,
    description,
    imageSrc,
    projectType,
    date,
    technologies
  }: ProjectCardProps) {
    return (
      <div className="relative group aspect-[4/3] sm:aspect-[4/2] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={imageSrc}
          alt={`${title} Project`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end">
          <div className='w-full flex flex-col space-y-2 transform transition-all duration-300 ease-in-out group-hover:translate-y-0 xl:translate-y-[4rem] lg:translate-y-[8rem] md:translate-y-40 sm:translate-y-[7rem] translate-y-[8.1rem]'>
            <div className='flex flex-col lg:flex-row justify-between items-start sm:items-start w-full'>
              <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
              <p className="text-sm font-medium text-white flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center">
                <span>{projectType}</span>
                <span className='hidden sm:inline'>•</span>
                <span className='font-semibold'>{date}</span>
              </p>
            </div>
            <p className='text-sm font-medium text-white text-start opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              {description}
            </p>
            <div className='flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              {technologies.map((tech, index) => (
                <TechCard
                  key={index}
                  icon={tech.icon}
                  name={tech.name}
                  color={tech.color}
                  textColor={tech.textColor}
                  bgcoloron={tech.bgColorOn}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  