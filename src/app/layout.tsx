import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harry Campbell - Full Stack Developer & Security Engineer | Hdev Group Founder",
  description: "Harry Campbell is an experienced full stack developer and security engineer based in the UK, specializing in secure web application development and software engineering. As the founder of Hdev Group, Harry brings over 3 years of expertise in building scalable, high-performance digital solutions. Available for freelance projects, collaborations, and full-time opportunities globally.",
  keywords: [
    "Harry Campbell", 
    "Harry",
    "Hdev Group",
    "Campbell",
    "Full Stack Developer UK", 
    "Security Engineer UK", 
    "Freelance Software Developer", 
    "Web Application Developer", 
    "Founder of Hdev Group", 
    "Senior Software Engineer", 
    "Secure Web Development", 
    "Cybersecurity Expert", 
    "Software Development Consultant", 
    "Liverpool Web Developer", 
    "Manchester Software Developer", 
    "UK-based Full Stack Developer", 
    "Experienced Developer for Hire", 
    "Web Development Expert UK", 
    "JavaScript Developer UK", 
    "React Developer", 
    "Node.js Developer", 
    "Frontend and Backend Developer", 
    "API Developer", 
    "Database Management", 
    "Software Security Specialist", 
    "Web Developer Near Me", 
    "Top Software Engineer UK", 
    "Best Developer St Helens", 
    "Freelance Developer Manchester", 
    "Full Stack Engineer Europe", 
    "Cybersecurity Engineer UK", 
    "Tech Consultant UK", 
    "Freelance Web Developer UK", 
    "Tech Innovator UK", 
    "Remote Software Engineer", 
    "Digital Solutions Architect", 
    "Startup Software Developer", 
    "Software Engineer for Hire", 
    "Security Engineer for Startups"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark transition-all duration-500 ease-in-out">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300;1,300&family=Noto+Sans+JP:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
            <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
            >
        {children}
      </body>
    </html>
  );
}
