"use client"

import Image from 'next/image'
import Header from "@/components/header/header"
import { Check, Loader, Loader2, LucideIcon } from 'lucide-react'
import Footer from '@/components/footer/footer'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { MovingCommand } from '../page'

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
      className={`inline-flex  items-center gap-2 px-2 py-1 rounded-md transition-all duration-300 hover:shadow-md ${color} ${textColor}`}
      role="listitem"
      >
        <img src={icon} className={`w-5 h-5 overflow-hidden rounded-sm ${bgcoloron ? "bg-white" : ""}`} aria-hidden="true" />
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    )
  }
  

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f1f1f1] dark:bg-[#08070b]">
      <Header />
      <MovingCommand setmenu={setIsMenuOpen} isopen={isMenuOpen} />
      <main className="flex-grow py-12 container mx-auto lg:px-24 h-full flex flex-col  items-center justify-start">
        <div className="flex w-full h-full items-start justify-start flex-col">
          <h1 className="text-4xl font-bold text-start mb-4 leading-tight bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Work. Passion. Open Source.
          </h1>
          <p className="text-lg font-light text-muted-foreground/90">
            I love to work on <span className="text-foreground">large scale major projects</span> that actually <span className="text-foreground">solves problems</span>. Here you can find some of my <span className="text-foreground">major projects</span> that I have worked on along with some projects that I am currently working on and some project ideas that I have in mind.
          </p>
          <div className='flex flex-col my-10 w-full h-full'>
            <h2 className="text-2xl font-semibold text-start mb-4 leading-tight">
              Featured Projects
            </h2>
            <div className="flex flex-col w-full gap-4">
              <ProjectCard
                  title="Textuality | Early Access"
                  description="Textuality is a content management system that allows users to create, edit, and publish content to the web, I started out Textuality just so I have a centeral place to write my blogs and decided to make this a full product."
                  imageSrc={["/work/textuality/home.png", "/work/textuality/content.png", "/work/textuality/premium.png", "/work/textuality/signin.png", "/work/textuality/tickets.png", "/work/textuality/innertickets.png"]}
                  projectType="Content Management System"
                  link="https://textuality.hdev.uk"
                  type="Completed"
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
              <ProjectCard
                title="HProjects"
                description="HProjects is a project management system that allows users to create, edit, and manage projects and more."
                imageSrc="/work/Screenshot 2024-10-25 165816.png"
                projectType="Project Management System"
                type="Completed"
                link="https://hprojects.hdev.uk"
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
          <div className='flex flex-col mt-10 w-full h-full'>
          <h2 className="text-2xl font-semibold text-start mb-4 leading-tight">
            Projects In Progress
          </h2>
          <div className="flex flex-col md:flex-row justify-between mb-10 w-full gap-4">
            <div className="flex flex-col justify-between w-full gap-4">
            <ProjectCard
                  title="TrackIt"
                  description="TrackIt is a ticket support software that allows users to create, manage, and solve tickets with their team."
                  imageSrc="/work/trackit/Screenshot 2025-01-31 194035.png"
                  projectType="Ticket Support Software"
                  link="https://textuality.hdev.uk"
                  type="In Progress"
                  date="January 2025"
                  technologies={[
                { icon: "/icons/typescript.svg", name: "TypeScript", color: "bg-[#000000]", textColor: "text-white", bgColorOn: true },
                { icon: "/icons/react-2.svg", name: "React", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nextjs-icon.svg", name: "Next.js", color: "bg-[#000000]", textColor: "text-white", bgColorOn: false },
                { icon: "/icons/tailwind.svg", name: "Tailwind CSS", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nodejs-icon.svg", name: "Node.js", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/mysql-logo.svg", name: "MySQL", color: "bg-[#000000]", bgColorOn: false },
                { icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png", name: "FireBase", color: "bg-[#000000]", bgColorOn: false },
                  ]}
              />
            <ProjectCard
                  title="TeamMate"
                  description="TeamMate is my project on creating a notion, teams, trello like application that allows users to complete any task, project, or goal with their team."
                  imageSrc="/work/teammate/Screenshot 2025-01-18 163821.png"
                  projectType="Team Collaboration Platform"
                  link=""
                  type="In Progress"
                  date="January 2025"
                  technologies={[
                { icon: "/icons/typescript.svg", name: "TypeScript", color: "bg-[#000000]", textColor: "text-white", bgColorOn: true },
                { icon: "/icons/react-2.svg", name: "React", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nextjs-icon.svg", name: "Next.js", color: "bg-[#000000]", textColor: "text-white", bgColorOn: false },
                { icon: "/icons/tailwind.svg", name: "Tailwind CSS", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/nodejs-icon.svg", name: "Node.js", color: "bg-[#000000]", bgColorOn: false },
                { icon: "/icons/mysql-logo.svg", name: "MySQL", color: "bg-[#000000]", bgColorOn: false },
                { icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png", name: "FireBase", color: "bg-[#000000]", bgColorOn: false },
                  ]}
              />
            </div>
          </div>
            <h2 className="text-2xl font-semibold text-start mb-4 leading-tight">
              Project Ideas
            </h2>
            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                <ProjectCard
                  title="HSpace"
                  description="HSpace is a social media platform that allows users to connect, share, and collaborate with others."
                  imageSrc="/work/Untitled design (7).png"
                  projectType="Social Media Platform"
                  date=""
                  link={null}
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
                  title="Scam Stopper"
                  description="Scam Stopper is a fraud prevention system that helps users identify and prevent fraudulent activities."
                  imageSrc="/work/scamstopper3.png"
                  projectType="Fraud Prevention System / Platform"
                  link={null}
                  date=""
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
        </div>
      </main>
      <Footer />
    </div>
  )
}

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string[] | string
    projectType: string
    date: string
    link: string | null
    type?: string
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
    link,
    technologies,
    type,
  }: ProjectCardProps) {
    const router = useRouter();
    
    // State to track the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
      
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }, [imageSrc]);

    const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];

    return (
      <div
        onClick={() => link && router.push(link)}
        className="relative dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:dark:[box-shadow:0_-20px_140px_-20px_#ffffff1f_inset] group h-[650px] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            id={`project-image-${title}-${index}`}
            src={image}
            alt={`${title} Project`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end">
          <div className="w-full flex flex-col space-y-2 transform transition-all duration-300 ease-in-out group-hover:translate-y-0 xl:translate-y-[4rem] lg:translate-y-[8rem] md:translate-y-40 sm:translate-y-[7rem] translate-y-[8.1rem]">
            <div className="flex flex-col lg:flex-row justify-between items-start sm:items-start w-full">
              <div className='flex flex-row gap-2'>
                <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
                {
                  type === "Completed" ? (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-green-700 text-white text-sm font-medium">
                      <Check size={16} />
                      <span>Completed</span>
                    </div>
                  ) : type === "In Progress" ? (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-600 text-white text-sm font-medium">
                      <Loader size={16} />
                      <span>In Progress</span>
                    </div>
                  ) : null
                }
              </div>
              <p className="text-sm font-medium text-white flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center">
                <span>{projectType}</span>
                {
                  date !== "" ? (
                    <>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-semibold">{date}</span>
                    </>
                  ) : null
                }
              </p>
            </div>
            <p className="text-sm font-light text-white text-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    );
  }