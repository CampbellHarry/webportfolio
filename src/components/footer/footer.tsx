import { Github, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Linkedin } from "lucide-react";

export default function Footer() {
    const [isDark, setIsDark] = useState(true);
    function ThemeToggle({ theme }: { theme: string }) {
        const html = document.querySelector("html")
        if (!html) return
        if (theme === "dark") {
          html.classList.add("dark")
          window.localStorage.setItem("theme", "dark")
          setIsDark(true);
        } else {
          html.classList.remove("dark")
          window.localStorage.setItem("theme", "light")
          setIsDark(false);
        }
      }
      useEffect(() => {
        const theme = window.localStorage.getItem("theme")
        const html = document.querySelector("html")
        if (!html) return
        if (theme === "light") {
          html.classList.add("light")
            setIsDark(true);
        } else {
          html.classList.remove("light")
          html.classList.add("dark")
            setIsDark(false);
        }
      }, [])

    return (
        <footer className="flex flex-col items-center dark:border-t-[#000000] bg-[#e9e6e6] border-t-4 pt-4 dark:bg-[#020103] z-30 pb-2 justify-center w-full">
            <div className="flex flex-col md:flex-row md:gap-0 gap-5 md:justify-between container mx-auto px-4">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-lg font-bold">hdev.uk</h1>
                    <div className="flex flex-col">
                        <h2 className="text-sm font-medium text-muted-foreground">Harry Campbell © 2022 - { new Date().getUTCFullYear() },</h2>
                        <h2 className="text-sm font-medium text-muted-foreground">All rights reserved.</h2>
                    </div>
                </div>
                <div className="flex flex-row gap-3 mt-5">
                        <a href="https://linkedin.com/in/itharrycampbell" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://github.com/CampbellHarry" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground">
                            <Github size={18} />
                        </a>
                    </div>
            </div>
        </footer>
    );
}