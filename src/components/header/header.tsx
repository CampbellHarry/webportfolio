'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Book, Home, HardHat, Text, Sun, Moon, Building2, Command } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { gsap } from 'gsap';
import { MovingCommand } from '@/app/page'



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCommandmenuOpen, setIsCommandMenuOpen] = useState(false)
  const [mainlocation, setMainLocation] = useState({ left: 0, width: 0 });
  const [hasScrolled, setHasScrolled] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: mainlocation.left, width: mainlocation.width, visibility: "hidden" });
  const [activeNav, setActiveNav] = useState<string | null>(null)
  const menuRef = useRef(null);
  useEffect(() => {
    if (isMenuOpen) {
        gsap.to(menuRef.current, {
            y: '0%',
            opacity: 1,
            duration: 0.001,
            ease: 'power5.out',
            display: 'flex',
        });
        } else {
        // Slide the menu up
        gsap.to(menuRef.current, {
            y: '-120%',
            opacity: 1,
            duration: 0.001,
            ease: 'power5.in',
            onComplete: () => {
            gsap.set(menuRef.current, { display: 'none' });
            },
        });
    }
}, [isMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const updateUnderline = () => {
      const path = window.location.pathname;
      const navItems = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
      ];
  
      const activeItem = navItems.find((item) => path === item.href);
      if (activeItem) {
        const element = document.querySelector(`.nav-link[href='${activeItem.href}']`) as HTMLElement;
        
  
        if (element) {
          const { offsetLeft, offsetWidth } = element;
          const paddedWidth = offsetWidth; 
  
          setUnderlineStyle({ left: offsetLeft - 10, width: paddedWidth - 20, visibility: "visible" });
          setMainLocation({ left: offsetLeft - 40, width: paddedWidth });
        }
      }
    };
  
    setTimeout(updateUnderline, 0.1); 
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, []);
  const handleMouseEnter = (e: React.MouseEvent, href: string) => {
    const target = e.currentTarget as HTMLElement
    const { offsetLeft, offsetWidth } = target
    setUnderlineStyle({
      left: offsetLeft - 8,
      width: offsetWidth - 20,
      visibility: "visible",
    })
  }

  const handleMouseLeave = () => {
    if (mainlocation.left === 0){
      setUnderlineStyle({
        left: 0 - 120,
        width: 0 - 120,
        visibility: "hidden",
      });
    } else {
      setUnderlineStyle({
        left: mainlocation.left + 30,
        width: mainlocation.width - 20,
        visibility: "visible",
      });
    }
  };

  var isDark = true
  
  function ThemeToggle() {
    const html = document.querySelector("html")
    if (!html) return
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      window.localStorage.setItem("theme", "light")
      isDark = false
    } else {
      html.classList.add("dark")
        window.localStorage.setItem("theme", "dark")
        isDark = true
    }
  }

  useEffect(() => {
    const theme = window.localStorage.getItem("theme")
    const html = document.querySelector("html")
    if (!html) return
    if (theme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [])
  
  return (
    <>
    <MovingCommand setmenu={setIsCommandMenuOpen} isopen={isCommandmenuOpen} />
    <header className={`sticky w-full top-0 z-50 rounded-b-lg backdrop-blur-xl`}>
    <div className='relative w-full'>
      <div
        className={`lg:absolute top-[0rem] lg:visible rounded-b-xl  lg:flex hidden h-[4.5rem] left-1/2 -translate-x-1/2 w-full z-10 backdrop-blur-lg shadow-md transition-all duration-100`}
        style={{
            width: hasScrolled ? '100%' : '100%',
            top: hasScrolled ? '0' : '0',
            height: hasScrolled ? '4.5rem' : '4.5rem',
        }}
      />
    </div>
      <div className="container mx-auto lg:px-24">
        <div className="flex justify-between z-50 items-center py-4 lg:justify-start md:space-x-10">
          <div className="flex justify-start z-50 items-center gap-5 lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <img src="/hdevlogo.png" alt="Textuality Logo" className="h-8 w-8 dark:flex hidden" />
              <img src="/hdevlogo.png" alt="Textuality Logo" className="h-8 w-8 dark:hidden flex" />
            </Link>
          </div>

          <nav className="hidden lg:flex z-20 items-center relative">
            {[
                { label: "Home", icon: <Home size={18} />, href: "/" },
                { label: "Projects", icon: <Building2 size={18} />, href: "/projects" },
                { label: "Blog", icon: <Book size={18} />, href: "/blog" },
                { label: "About", icon: <Text size={18} />, href: "/about" },
            ].map((item) => (
                <Link
                key={item.href}
                href={item.href}
                className={`nav-link relative z-10 py-2 w-full px-2 font-semibold text-sm flex items-center gap-1.5 transition-colors text-foreground hover:text-primary ${
                    activeNav === item.href ? "font-semibold" : ""
                }`}
                onMouseEnter={(e) => handleMouseEnter(e, item.href)}
                onMouseLeave={handleMouseLeave}
                >
                {item.icon}
                {item.label}
                </Link>
            ))}
            <span
              className="absolute bottom-0 rounded-sm border-accent h-[30px] -top-0.5 z-0 bg-foreground/15  transition-all duration-500"
              style={{
              left: `${underlineStyle.left + 50}px`,
              width: `${underlineStyle.width > 1 ? underlineStyle.width + 20 : underlineStyle.width - 10000}px`,
              display: `${underlineStyle.visibility === "visible" ? "block" : "none"}`,
              transform: `translate(-40px, 5px)`, 
              }}
            />
            </nav>
            <div className="hidden lg:flex items-center justify-end flex-1 lg:w-0 space-x-4">
                <Link href="/contact">
                  <Button variant="gradient" asChild className='hidden text lg:flex'>
                      Contact
                  </Button>
                </Link>
                <Button variant="outline" asChild className='cursor-pointer text flex' onClick={() => setIsCommandMenuOpen(!isCommandmenuOpen)}>
                  <Command size={18} />
                </Button>
            </div>
            <div className="flex lg:hidden">
                <Button
                variant="ghost"
                size="icon"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
            ref={menuRef}
            className={`fixed w-full h-screen mt-[-4.5rem] transform backdrop-blur-lg bg-background ${isMenuOpen ? 'visible' : 'hidden'}`}
        >
            <div className="flex flex-col items-start h-screen mt-[5rem] w-full px-2">
                <Button className="w-full">Get in touch</Button>
                <Link
                    href="/"
                    className="flex items-center gap-4 w-full py-2 mt-3 border-b border-muted-foreground/30"
                >
                    Home
                </Link>
                <Link
                    href="/work"
                    className="flex items-center gap-4 w-full py-2  mt-3 border-b border-muted-foreground/30"
                >
                    Work
                </Link>
                <Link
                    href="/contact"
                    className="flex items-center gap-4 w-full py-2 mt-3 border-b border-muted-foreground/30"
                >
                    Contact
                </Link>
                <Link
                    href="/blog"
                    className="flex items-center gap-4 w-full py-2 mt-3 border-b border-muted-foreground/30"
                >
                    Blog
                </Link>
                <Link
                    href="/about"
                    className="flex items-center gap-4 w-full py-2 mt-3 border-b border-muted-foreground/30"
                >
                    About
                </Link>
                <Link
                    href="/resume/Harry Campbell (2).pdf"
                    className="flex items-center gap-4 w-full py-2 mt-3 border-b border-muted-foreground/30"
                >
                    Resume
                </Link>
                <Button variant="outline" asChild className='cursor-pointer text flex w-full mt-5' onClick={() => ThemeToggle()}>
                    <Moon size={18} className='dark:flex hidden' />
                    <Sun size={18} className='dark:hidden' />
                </Button>
            </div>
        </div>
    </header>
    </>
  )
}