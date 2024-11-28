import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Linkedin } from "lucide-react";

export default function Footer() {
    const [isDark, setIsDark] = useState(true);
    function ThemeToggle() {
        const html = document.querySelector("html")
        if (!html) return
        if (html.classList.contains("dark")) {
          html.classList.remove("dark")
            window.localStorage.setItem("theme", "light")
          setIsDark(false);
        } else {
          html.classList.add("dark")
            window.localStorage.setItem("theme", "dark")
            setIsDark(true);
        }
      }
      useEffect(() => {
        const theme = window.localStorage.getItem("theme")
        const html = document.querySelector("html")
        if (!html) return
        if (theme === "dark") {
          html.classList.add("dark")
            setIsDark(true);
        } else {
          html.classList.remove("dark")
            setIsDark(false);
        }
      }, [])

    return (
        <footer className="flex flex-col items-center dark:border-t-[#2e3440] bg-[#e9e6e6] border-t-4 pt-10 dark:bg-[#1a1e25] pb-20 justify-center w-full">
            <div className="flex flex-col md:flex-row md:gap-0 gap-5 md:justify-between container mx-auto px-4">
                <div className="flex flex-col items-start gap-5">
                    <h1 className="text-lg font-bold">hdev.uk</h1>
                    <div className="flex flex-col">
                        <h2 className="text-sm font-medium text-muted-foreground">Harry Campbell © { new Date().getUTCFullYear() },</h2>
                        <h2 className="text-sm font-medium text-muted-foreground">All rights reserved.</h2>
                    </div>
                    <div className="flex flex-row gap-3">
                        <a href="https://linkedin.com/in/itharrycampbell" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
                <div className="flex xs:flex-col flex-row mt-0 justify-between md:w-1/4 gap-5 w-full">
                    <div className="flex flex-col items-start justify-start gap-3">
                        <h2 className="text-sm font-semibold text-foreground">Main</h2>
                        <a href="/" className="text-sm font-medium text-muted-foreground">Home</a>
                        <a href="/about" className="text-sm font-medium text-muted-foreground">About</a>
                        <a href="/contact" className="text-sm font-medium text-muted-foreground">Contact</a>
                        <a href="/sitemap" className="text-sm font-medium text-muted-foreground">Sitemap</a>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-sm font-semibold text-foreground">Blog & Work</h2>
                        <a href="/blog" className="text-sm font-medium text-muted-foreground">Blog</a>
                        <a href="/work" className="text-sm font-medium text-muted-foreground">Work</a>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-sm font-semibold text-foreground">Themes</h2>
                        <div className="flex flex-row gap-3">
                            <Button variant="outline" asChild className='cursor-pointer text flex' onClick={() => ThemeToggle()}>
                                <Moon size={18} className='dark:flex hidden' />
                                <Sun size={18} className='dark:hidden' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}