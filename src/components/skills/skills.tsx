import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    useEffect(() => {
        const uppop = document.querySelectorAll(".uppop");
        uppop.forEach((uppop, index) => {
            gsap.fromTo(
                uppop,
                { y: -30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.35,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: uppop,
                        start: "top 80%",
                    },
                }
            );
        });
    }, []);

    const skills = [
        {
            title: "React",
            description: "JavaScript Library",
            logo: "/icons/react-2.svg",
            colour: "#3178C6",
        },
        {
            title: "Next.js",
            description: "React Framework",
            logo: "/icons/nextjs-icon.svg",
            colour: "#000000",
        },
        {
            title: "TypeScript",
            description: "Programming Language",
            logo: "/icons/typescript.svg",
            colour: "#3178C5",
        },
        {
            title: "JavaScript",
            description: "Programming Language",
            logo: "/icons/JavaScript-logo.png",
            colour: "#F7DF1E",
        },
        {
            title: "Python",
            description: "Programming Language",
            logo: "/icons/py.webp",
            colour: "#306998",
        },
        {
            title: "Tailwind",
            description: "Utility-First CSS",
            logo: "/icons/tailwind.svg",
            colour: "#0EA5E9",
        },
        {
            title: "Node.js",
            description: "JavaScript Runtime",
            logo: "/icons/nodejs-icon.svg",
            colour: "#339933",
        },
        {
            title: "Convex",
            description: "Database",
            logo: "/icons/symbol-color.png",
            colour: "#EE342F",
        },
        {
            title: "MongoDB",
            description: "Database",
            logo: "/icons/mongodb_original_wordmark_logo_icon_146425.webp",
            colour: "#47A248",
        },
        {
            title: "MySQL",
            description: "Database",
            logo: "/icons/mysql-logo.svg",
            colour: "#000000",
        },
        {
            title: "AWS",
            description: "Cloud, Emails, AI",
            logo: "/icons/aws-logo-logo-png-transparent.png",
            colour: "#F7DF1E",
        },
        {
            title: "Git",
            description: "Version Control System",
            logo: "/icons/Git_icon.svg.png",
            colour: "#F05032",
        },
 
    ];

    function SkillCard({ title, description, logo, colour }: any) {
        return (
            <div
            className="boxbg rounded-xl border bg-muted/20 transition-all w-full px-2 py-2 hover:shadow-lg "
            style={{
                borderColor: "",
                backgroundColor: ``,
                transition: "background-color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
                const element = e.currentTarget;
                element.style.borderColor = colour;
                element.style.backgroundColor = `${colour}40`;
            }}
            onMouseLeave={(e) => {
                const element = e.currentTarget;
                element.style.borderColor = "";
                element.style.backgroundColor = ``;
            }}
        >
            <div className="flex flex-row gap-4">
                <div
                    className="p-1 rounded-lg items-center flex justify-center"
                    style={{ backgroundColor: `${colour}30` }}
                >
                    <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                        <Image src={logo} alt={title} height={40} width={40} objectFit="contain" />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                    <h3 className="text-xl ">{title}</h3>
                    <p className="text-muted-foreground dark:text-gray-300 text-sm">{description}</p>
                </div>
            </div>
        </div>
        );
    }

    return (
        <div className="flex flex-col flex-wrap mt-12">
            <h1 className="font-medium text-white text-3xl mb-5">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-top justify-left w-full">
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        logo={skill.logo}
                        colour={skill.colour}
                    />
                ))}
            </div>
        </div>
    );
}
