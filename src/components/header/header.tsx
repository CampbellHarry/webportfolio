'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Book, Home, HardHat, Text, Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { gsap } from 'gsap';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mainlocation, setMainLocation] = useState({ left: 0, width: 0 });
  const [hasScrolled, setHasScrolled] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: mainlocation.left, width: mainlocation.width })
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
        { label: "Work", href: "/work" },
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
      ];
  
      const activeItem = navItems.find((item) => path === item.href);
      if (activeItem) {
        const element = document.querySelector(`.nav-link[href='${activeItem.href}']`) as HTMLElement;
        
        console.log("Active Link Element:", element);
  
        if (element) {
          const { offsetLeft, offsetWidth } = element;
          const paddedWidth = offsetWidth; 
          console.log("Calculated Underline Position:", offsetLeft, paddedWidth);
  
          setUnderlineStyle({ left: offsetLeft, width: paddedWidth });
          setMainLocation({ left: offsetLeft, width: paddedWidth });
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
    console.log(offsetLeft, offsetWidth)
    setUnderlineStyle({
      left: offsetLeft,
      width: offsetWidth,
    })
  }

  const handleMouseLeave = () => {
    console.log("Resetting Underline to:", mainlocation);
    setUnderlineStyle({
      left: mainlocation.left,
      width: mainlocation.width,
    });
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
    <header className={`sticky  w-full top-0 z-50 rounded-b-lg backdrop-blur-xl`}>
    <div className='relative w-full'>
      <div
        className={`lg:absolute top-[0rem] lg:visible lg:flex hidden h-[4.5rem] left-1/2  -translate-x-1/2 w-full z-10 backdrop-blur-lg  shadow-md transition-all duration-100 ${hasScrolled ? 'border-muted border-b' : 'border border-muted'}`}
        style={{
            width: hasScrolled ? '100%' : '25rem',
            top: hasScrolled ? '0' : '0.73rem',
            height: hasScrolled ? '4.5rem' : '3rem',
            borderRadius: hasScrolled ? '0' : '1rem',
            backgroundColor: hasScrolled ? `${isDark ? 'bg-[#282c34]' : 'bg-black'}` : 'bg-white',
        }}
      />
    </div>
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between z-50 items-center py-4 lg:justify-start md:space-x-10">
          <div className="flex justify-start z-50 items-center gap-5 lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <img src="/hdevlogo.png" alt="Textuality Logo" className="h-8 w-8 dark:flex hidden" />
              <img src="/hdevlogo.png" alt="Textuality Logo" className="h-8 w-8 dark:hidden flex" />
            </Link>
          </div>

          <nav className="hidden lg:flex z-20 items-center space-x-8 relative">
            {[
                { label: "Home", icon: <Home size={18} />, href: "/" },
                { label: "Work", icon: <HardHat size={18} />, href: "/work" },
                { label: "Blog", icon: <Book size={18} />, href: "/blog" },
                { label: "About", icon: <Text size={18} />, href: "/about" },
            ].map((item) => (
                <Link
                key={item.href}
                href={item.href}
                className={`nav-link relative z-10 w-full font-semibold text-sm flex items-center gap-1.5 transition-colors text-foreground hover:text-primary ${
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
              className="absolute bottom-0 rounded-sm border-accent h-[30px] z-0 dark:bg-cyan-200/20 bg-cyan-500/20 transition-all duration-300"
              style={{
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width > 1 ? underlineStyle.width + 20 : underlineStyle.width}px`,
              transform: `translate(-40px, 5px)`, 
              }}
            />
            </nav>
            <div className="hidden lg:flex items-center justify-end flex-1 lg:w-0 space-x-4">
                <Link href="/contact">
                  <Button variant="outline" asChild className='hidden text lg:flex'>
                      Contact
                  </Button>
                </Link>
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
  )
}