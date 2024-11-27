"use client"
import Header from "@/components/header/header"
import { Badge } from "@/components/ui/badge"
import Particles from "@/components/particles/particles"
import { ArrowRight, HardHat, LocateFixedIcon, MapPin, UserCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimateText from "@/components/animatedtext/animation"
import Footer from "@/components/footer/footer"


export default function PageIndex(){
  const questions = ["Who am I?", "What do I do?", "What are my skills?", "What are my interests?", "What are my hobbies?", "What are my goals?", "Why did you start?", "What are you working on?", "What are you listening to?", "What are you building?"];
  
  return(
    <div className="w-full relative justify-center flex-col items-center flex">
      <Header />
      <div className="flex h-auto pb-20 flex-col w-full mt-10 md:container md:mx-auto md:px-4">
        <div className="w-full  relative border-muted border dark:shadow-[#000] overflow-hidden bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#2e3440] items-center justify-center hover:shadow-sm transition-all shadow-md shadow-foreground/20 rounded-lg h-[40rem] p-4">
          <div className="absolute inset-0 h-full" aria-hidden="true">
            <Particles className="h-[200rem]" />
          </div>
          <div className="items-center justify-center h-full flex flex-col">
          <div className="flex flex-col text-center h-full justify-center">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQE8xiUVqps7_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720299869628?e=1738195200&v=beta&t=8BEWlH2SAWnof_LunZt0Ytf5zaK-_OodJ312TfnvzT0" className="rounded-full z-40 w-40 h-40 mx-auto mb-5" />
            <h2 className="lg:text-6xl sm:text-3xl text-2xl font-semibold leading-snug">
              <AnimateText />
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
              <Badge variant="outline">Software Engineer</Badge>
              <Badge variant="outline">Full Stack Developer</Badge>
              <Badge variant="outline">Cyber Security Engineer</Badge>
            </div>
            <div className="w-full mt-5 flex items-center justify-center">
              <p className="text-md text-foreground/90 text-center w-1/2">
                I'm a software engineer committed to delivering secure, fast, and reliable systems that meet and exceed business needs.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 w-full mt-5">
              <Button variant="gradient" size="lg" asChild className="text-md rounded-xl font-semibold">
                Contact Me
              </Button>
              <Link href="/resume">
                <Button variant="ghost" size="lg" asChild className="text-md rounded-xl font-semibold">
                  Resume
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="w-full mt-10 flex flex-col md:grid md:grid-cols-3 gap-10">
          <div className="flex group flex-col w-full h-[20rem] relative items-start dark:shadow-[#000] border-muted transition-all border overflow-hidden shadow-md hover:shadow-sm justify-end shadow-foreground/20 rounded-lg bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#2e3440]">
            <div className="absolute inset-0 h-full blur-sm group-hover:blur-none transition-all z-10" aria-hidden="true">
              <div className="w-full h-full flex gap-5 flex-row items-start justify-start p-6">
                <div className="flex flex-col gap-2 border py-2 px-4 border-muted-foreground h-full bg-muted-foreground/10 rounded-lg w-full">
                  <h3>Textuality</h3>
                  <p className="text-muted-foreground text-sm">A content management system made for websites for blogging, event announcements or any type of content</p>
                </div>
                <div className="flex flex-col border py-2 px-4 border-muted-foreground h-full bg-muted-foreground/10 rounded-lg w-full">
                  <h3>HProjects</h3>
                </div>
              </div>
            </div>
            <div className="group-hover:-translate-y-10 z-20 w-full rounded-tr-lg  group-hover:backdrop-blur-sm transition-transform mb-[-25px]">
              <HardHat className="pl-6 w-20 h-16 group-hover:h-14  group-hover:w-14 transition-all" />
              <h2 className="text-2xl font-semibold pl-6 ">View my Work</h2>
              <p className="text-sm pl-6 text-muted-foreground">View and use my projects.</p>
              <div className="flex flex-row pl-6 backdrop-blur-sm w-full h-full">
                <Button variant="ghost" size="sm" asChild className="text-md mt-3 ml-[-10px]">
                  View Work <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative group w-full h-[20rem] dark:shadow-[#000] items-start border-muted transition-all col-span-2 border overflow-hidden shadow-md hover:shadow-sm justify-end shadow-foreground/20 rounded-lg bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#2e3440] ">
          <div className="absolute inset-0 h-full blur-sm group-hover:blur-none transition-all z-10" aria-hidden="true">
            <div className="w-full h-full flex flex-row items-start justify-start p-6">
            {(() => {
                const isOverlapping = (rect1, rect2) => {
                  return (
                    rect1.x < rect2.x + rect2.width &&
                    rect1.x + rect1.width > rect2.x &&
                    rect1.y < rect2.y + rect2.height &&
                    rect1.y + rect1.height > rect2.y
                  );
                };

                const generatePositions = (numQuestions: any, boxWidth = 200, boxHeight = 100) => {
                  const positions = [] as any;
                  const maxAttempts = 1000;

                  for (let i = 0; i < numQuestions; i++) {
                    let attempts = 0;
                    let position = null as any;

                    do {
                      const randomX = Math.random() * 80; 
                      const randomY = Math.random() * 80; 

                      position = {
                        x: randomX,
                        y: randomY,
                        width: boxWidth / window.innerWidth * 100,
                        height: boxHeight / window.innerHeight * 100,
                      };

                      const hasCollision = positions.some((p: any) => isOverlapping(position, p));

                      if (!hasCollision) {
                        positions.push(position);
                        break;
                      }

                      attempts++;
                    } while (attempts < maxAttempts);

                    if (attempts >= maxAttempts) {
                      console.warn("Unable to place some items without overlap.");
                      break;
                    }
                  }

                  return positions;
                };

                const positions = generatePositions(questions.length);

                return (
                  <>
                    {questions.map((question, index) => {
                      const { x, y } = positions[index];
                      return (
                        <div
                          className="absolute"
                          key={index}
                          style={{
                            position: "absolute",
                            top: `${y}%`,
                            left: `${x}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div className="relative">
                            <div className="flex flex-col gap-2 border py-2 px-4 border-muted-foreground bg-muted-foreground/20 rounded-lg rounded-bl-none">
                              <h2>{question}</h2>
                            </div>
                            <div className="absolute bottom-[-0.54rem] w-0 h-0 border-l-[0px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-muted-foreground"></div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                );
              })()}
            </div>
          </div>
          <div className="group-hover:-translate-y-10 z-20 w-1/2 rounded-tr-lg group-hover:backdrop-blur-sm transition-transform mb-[-25px]">
              <UserCircleIcon className="pl-6 w-20 h-16 group-hover:h-14  group-hover:w-14 transition-all" />
              <h2 className="text-2xl font-semibold pl-6 ">Harry Campbell</h2>
              <p className="text-sm pl-6 text-muted-foreground">Learn about me.</p>
              <div className="flex flex-row pl-6 backdrop-blur-sm w-full h-full">
                <Button variant="ghost" size="sm" asChild className="text-md mt-3 ml-[-10px]">
                  Learn about me <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex group flex-col w-full col-span-2 h-[20rem] relative items-start border-muted transition-all border overflow-hidden shadow-md hover:shadow-sm justify-end shadow-foreground/20 dark:shadow-[#000] rounded-lg bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#2e3440]">
            <div className="group-hover:-translate-y-10 z-20 w-1/2 rounded-tr-lg group-hover:backdrop-blur-sm transition-transform mb-[-25px]">
              <UserCircleIcon className="pl-6 w-20 h-16 group-hover:h-14  group-hover:w-14 transition-all" />
              <h2 className="text-2xl font-semibold pl-6 ">Blog</h2>
              <p className="text-sm pl-6 text-muted-foreground">Read the things I post</p>
              <div className="flex flex-row pl-6 backdrop-blur-sm w-full h-full">
                <Button variant="ghost" size="sm" asChild className="text-md mt-3 ml-[-10px]">
                  Read Blog <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex group flex-col w-full col-span-1 h-[20rem] relative items-start border-muted transition-all border overflow-hidden shadow-md hover:shadow-sm justify-end shadow-foreground/20 dark:shadow-[#000] rounded-lg bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#2e3440] ">
            <div className="group-hover:-translate-y-10 z-20 w-1/2 rounded-tr-lg group-hover:backdrop-blur-sm transition-transform mb-[-25px]">
              <UserCircleIcon className="pl-6 w-20 h-16 group-hover:h-14  group-hover:w-14 transition-all" />
              <h2 className="text-2xl font-semibold pl-6 ">Contact</h2>
              <p className="text-sm pl-6 text-muted-foreground">Read the things I post</p>
              <div className="flex flex-row pl-6 backdrop-blur-sm w-full h-full">
                <Button variant="ghost" size="sm" asChild className="text-md mt-3 ml-[-10px]">
                  Read Blog <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />

    </div>
  )
}
