"use client"
import Header from "@/components/header/header"
import { Badge } from "@/components/ui/badge"

import { ArrowRight, Book, Building2Icon, CircleAlert, Clipboard, Hammer, Link2, MailOpen, Pen, Sun} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer/footer"

import {
  User,
} from "lucide-react"

import { useEffect, useState } from "react"

function MovingCommand({ setmenu, isopen }: { setmenu: (isopen: any) => void, isopen: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(isopen);

  useEffect(() => {
    setIsMenuOpen(isopen);
  }, [isopen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      e.stopPropagation();
      const newMenuState = !isMenuOpen;
      setIsMenuOpen(newMenuState);
      setmenu(newMenuState);
      document.body.style.overflowY = newMenuState ? "hidden" : "auto";
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [lastHovered, setLastHovered] = useState<string | null>(null);

  function handleHover(title: string) {
    setLastHovered(title);
  }

  function handleShortcut(command: string) {
    switch (command) {
      case "CTRL E":
        window.location.href = "mailto:hello@hdev.uk";
        break;
      case "CTRL L":
        navigator.clipboard.writeText(window.location.href);
        const clip = document.getElementById("clipped-link");
        if (!clip) return;
        clip.innerText = "Copied!";
        setTimeout(() => {
          clip.innerText = "Copy Link";
        }, 2000);
        break;
      case "CTRL M":
        window.location.href = "/resume/Harry_Campbell_CV.pdf";
        break;
      case "CTRL D":
        ThemeToggle();
        break;
      case "CTRL A":
        window.location.href = "/about";
        break;
      case "CTRL X":
        window.location.href = "/projects";
        break;
      case "CTRL B":
        window.location.href = "/about#skills";
        break;
      case "CTRL O":
        window.location.href = "/contact";
        break;
      case "CTRL G":
        window.location.href = "/blog";
        break;
      
    }
  }

  const [isDark, setIsDark] = useState(true);
  function ThemeToggle() {
    const html = document.querySelector("html");
    if (!html) return;
    const isCurrentlyDark = html.classList.contains("dark");
    
    if (isCurrentlyDark) {
      html.classList.remove("dark");
      html.classList.add("light");
      window.localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    const html = document.querySelector("html");
    if (!html) return;
    if (theme === "light") {
      html.classList.remove("dark");
      html.classList.add("light");
      setIsDark(false);
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const generalcommands = [
    {
      icon: <MailOpen size={18} />,
      title: "Send an Email",
      commandshortcut: "CTRL E",
      href: "mailto:hello@hdev.uk",
    },
    {
      icon: <Link2 size={18} />,
      title: "Copy Link",
      commandshortcut: "CTRL L",
      comand: "copylink",
      id: "clipped-link"
    },
    {
      icon: <Book size={18} />,
      title: "Resume",
      commandshortcut: "CTRL M",
      href: "/resume/Harry_Campbell_CV.pdf",
    },
    {
      icon: <Sun size={18} />,
      title: "Toggle Dark Mode",
      commandshortcut: "CTRL D",
      command: "toggledarkmode",
    },
  ];

  const commands = [
    {
      icon: <User size={18} />,
      title: "About",
      commandshortcut: "CTRL A",
      href: "/about",
    },
    {
      icon: <Building2Icon size={18} />,
      title: "Projects",
      commandshortcut: "CTRL X",
      href: "/projects",
    },
    {
      icon: <Hammer size={18} />,
      title: "Skills",
      commandshortcut: "CTRL B",
      href: "/about#skills",
    },
    {
      icon: <Clipboard size={18} />,
      title: "Contact",
      commandshortcut: "CTRL O",
      href: "/contact",
    },
  ];

  const writingcommands = [
    {
      icon: <Pen size={18} />,
      title: "My Blog",
      commandshortcut: "CTRL G",
      href: "/blog",
    },
  ];

    function clickListen({commandShortCut}: {commandShortCut: string}){
      const command = generalcommands.find((cmd) => cmd.commandshortcut === commandShortCut) ||
              commands.find((cmd) => cmd.commandshortcut === commandShortCut) ||
              writingcommands.find((cmd) => cmd.commandshortcut === commandShortCut);
      if (command) {
        handleShortcut(command.commandshortcut);
      }
    }
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setmenu(false);
        document.body.style.overflowY = "auto";
        setFilteredListGeneral(generalcommands);
        setFilteredListCommands(commands);
        setFilteredListWriting(writingcommands);
        searchCommands("");
      }
    };

    const handleOuterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === "outerboundclose") {
      setIsMenuOpen(false);
      setmenu(false);
      document.body.style.overflowY = "auto";
      setFilteredListGeneral(generalcommands);
      setFilteredListCommands(commands);
      setFilteredListWriting(writingcommands);
      searchCommands("");
      }
    };

    const handleCtrlShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
      e.preventDefault();
      e.stopPropagation();
      handleShortcut(`CTRL ${e.key.toUpperCase()}`);
    }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleOuterClick);
    document.addEventListener("keydown", handleCtrlShortcut);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleOuterClick);
      document.removeEventListener("keydown", handleCtrlShortcut);
    };
  }, []);
  const [filteredlistgeneral, setFilteredListGeneral] = useState(generalcommands);
  const [filteredlistcommands, setFilteredListCommands] = useState(commands);
  const [filteredlistwriting, setFilteredListWriting] = useState(writingcommands);

  function searchCommands(search: string) {
    setFilteredListGeneral(
      generalcommands.filter((command) =>
        command.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredListCommands(
      commands.filter((command) =>
        command.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredListWriting(
      writingcommands.filter((command) =>
        command.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  return (
    isMenuOpen && (
      <div
        id="outerboundclose"
        className="absolute w-full transition-all  h-full bg-black/20 backdrop-blur-md flex items-center justify-center z-40"
      >
        <div className="rounded-lg top-24 absolute shadow-md md:max-h-[35vh] overflow-y-scroll barhide h-auto transition-all bg-muted/60 flex flex-col backdrop-blur-sm py-2 z-50 duration-300 ease-in-out w-full md:max-w-[700px]">
          <input
            placeholder="Type a command..."
            className="w-full bg-transparent pt-2 border-0 px-3 focus:ring-0 text-sm focus:outline-none text-white"
            autoFocus
            onChange={(e) => searchCommands(e.target.value)}
          />
        {filteredlistgeneral.length > 0 && (
          <div className="flex flex-col gap-2 mt-4 ">
            <p className="text-muted-foreground px-3 text-xs sticky -top-2 w-full py-2 bg-white dark:bg-[#19191a] z-50 backdrop-blur-3xl">
              GENERAL
            </p>
            <div className="flex flex-col">
              {filteredlistgeneral.map((command, index) => (
                <div
                  key={index}
                  className={`flex px-3 group items-center justify-between gap-2 cursor-pointer hover:bg-muted/60 py-1.5 ${
                    lastHovered === command.title ? "bg-muted/60" : ""
                  }`}
                  data-cmd={command.commandshortcut}
                  onClick={() => clickListen({commandShortCut: command.commandshortcut})}
                  onMouseEnter={() => handleHover(command.title)}
                >
                  <div className="flex flex-row items-center gap-2">
                    <p className="group-hover:scale-95 transition-all">
                      {command.icon}
                    </p>
                    <p
                      id={command.id}
                      className={`text-md font-light ${
                        lastHovered === command.title
                          ? "text-white"
                          : "text-muted-foreground"
                      }`}
                    >
                      {command.title}
                    </p>
                  </div>
                  <div className="items-center justify-center md:flex hidden gap-2">
                    {command.commandshortcut.split(" ").map((letter, index) => (
                      <p
                        key={index}
                        className={`text-md font-medium group-hover:translate-x-1 transition-all bg-muted-foreground/20 px-2 rounded-sm ${
                          lastHovered === command.title
                            ? "text-white translate-x-1"
                            : "text-muted-foreground"
                        }`}
                      >
                        {letter}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {filteredlistcommands.length > 0 && (
          <div className="flex flex-col gap-2 mt-4 border-t pt-2">
            <p className="text-muted-foreground px-3 text-xs sticky -top-2 w-full py-2 bg-white dark:bg-[#19191a] z-50 backdrop-blur-3xl">
              IMPORTANT
            </p>
            <div className="flex flex-col">
              {filteredlistcommands.map((command, index) => (
                <div
                  key={index}
                  className={`flex px-3 group items-center justify-between gap-2 cursor-pointer hover:bg-muted/60 py-1.5 ${
                    lastHovered === command.title ? "bg-muted/60" : ""
                  }`}
                  data-cmd={command.commandshortcut}
                  onClick={() => clickListen({commandShortCut: command.commandshortcut})}
                  onMouseEnter={() => handleHover(command.title)}
                >
                  <div className="flex flex-row items-center gap-2">
                    <p className="group-hover:scale-95 transition-all">
                      {command.icon}
                    </p>
                    <p
                      className={`text-md font-light ${
                        lastHovered === command.title
                          ? "text-white"
                          : "text-muted-foreground"
                      }`}
                    >
                      {command.title}
                    </p>
                  </div>
                  <div className="items-center justify-center md:flex hidden gap-2">
                  {command.commandshortcut.split(" ").map((letter, index) => (
                      <p
                        key={index}
                        className={`text-md font-medium group-hover:translate-x-1 transition-all bg-muted-foreground/20 px-2 rounded-sm ${
                          lastHovered === command.title
                            ? "text-white translate-x-1"
                            : "text-muted-foreground"
                        }`}
                      >
                        {letter}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {filteredlistwriting.length > 0 && (
          <div className="flex flex-col gap-2 mt-4 border-t pt-2">
            <p className="text-muted-foreground px-3 text-xs sticky -top-2 w-full py-2 bg-white dark:bg-[#19191a] z-50 backdrop-blur-3xl">
              Writing
            </p>
            <div className="flex flex-col">
              {filteredlistwriting.map((command, index) => (
                <div
                  key={index}
                  className={`flex px-3 group items-center justify-between gap-2 cursor-pointer hover:bg-muted/60 py-1.5 ${
                    lastHovered === command.title ? "bg-muted/60" : ""
                  }`}
                  data-cmd={command.commandshortcut}
                  onClick={() => clickListen({commandShortCut: command.commandshortcut})}
                  onMouseEnter={() => handleHover(command.title)}
                >
                  <div className="flex flex-row items-center gap-2">
                    <p className="group-hover:scale-95 transition-all">
                      {command.icon}
                    </p>
                    <p
                      className={`text-md font-light ${
                        lastHovered === command.title
                          ? "text-white"
                          : "text-muted-foreground"
                      }`}
                    >
                      {command.title}
                    </p>
                  </div>
                  <div className="items-center justify-center md:flex hidden gap-2">
                    {command.commandshortcut.split(" ").map((letter, index) => (
                      <p
                        key={index}
                        className={`text-md font-medium group-hover:translate-x-1 transition-all bg-muted-foreground/20 px-2 rounded-sm ${
                          lastHovered === command.title
                            ? "text-white translate-x-1"
                            : "text-muted-foreground"
                        }`}
                      >
                        {letter}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {
          filteredlistcommands.length === 0 && filteredlistgeneral.length === 0 && filteredlistwriting.length === 0 && (
            <div className="flex flex-col gap-2 mt-4 border-t pt-2">
              <p className="text-muted-foreground px-3  sticky flex flex-row gap-2 items-center justify-center text-xl -top-2 w-full py-2 bg-white dark:bg-[#19191a] z-50 backdrop-blur-3xl">
              <CircleAlert size={24} className="text-red-500"/> No results found 
              </p>
            </div>
          )
        }
        </div>
      </div>
    )
  );
}

export default function PageIndex(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return(
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col relative bg-[#f1f1f1] dark:bg-[#08070b]">
      <MovingCommand setmenu={setIsMenuOpen} isopen={isMenuOpen} />
      <Header />
      <main className="flex-grow py-12 md:-mt-24 container mx-auto lg:px-24 h-full flex flex-col  items-center justify-center">
        <div className="flex w-full h-full items-start justify-start flex-col z-50">
          <h1 className="text-4xl z-50 font-bold px-3">Harry Campbell</h1>
          <h2 className="text-md font-light px-3 text-foreground mt-3 z-50">Lead Developer & Founder at Hdev</h2>
          <h3 className="text-md font-light px-3 text-foreground/70 z-50 mt-1">Focused on Secure Development, Performance and User Experience.</h3>
          <div className="w-auto cursor-pointer px-3 flex items-center z-50  justify-start gap-4 mt-2 group hover:bg-muted-foreground/20 py-1 rounded-md" onClick={() => setIsMenuOpen(true)}>
            <p className="text-lg ">Press </p><div className="flex items-center gap-2"><Badge className="rounded-sm group-hover:border group-hover:border-muted">Ctrl</Badge><Badge className="rounded-sm group-hover:border group-hover:border-muted ">K</Badge></div><p> to start</p> <ArrowRight size={18} className="text-foreground/70 group-hover:translate-x-1.5 transition-all group-hover:text-foreground/100"/>
          </div>
          <div className="flex flex-row gap-4 px-3 mt-4">
            <Link href="/contact">
              <Button variant="gradient" className="bg-foreground text-background" asChild>
                Contact me
              </Button>
            </Link>
            <Link href="/resume/Harry_Campbell_CV.pdf">
              <div className="flex items-center gap-2 text-center hover:text-white hover:bg-muted-foreground/20 px-3 rounded-md transition-all justify-center h-full text-foreground/70">
                Resume
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute w-96 h-96 ml-44 rounded-full blur-[90px] bg-cyan-500/10 z-10"></div>
      </main>
      <Footer />
    </div>
  )
}

export { MovingCommand }