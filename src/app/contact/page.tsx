"use client"
import dynamic from 'next/dynamic';
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';
import { MovingCommand } from '../page';


export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full min-h-screen flex flex-col bg-[#f1f1f1] dark:bg-[#08070b]">
            <Header />
            <MovingCommand setmenu={setIsMenuOpen} isopen={isMenuOpen} />
            <main className="flex-grow py-12">
                <div className="container mx-auto items-center flex flex-col px-4">
                    <div className="w-full xl:w-[60%] border bg-white dark:bg-black transition-all dark:[box-shadow:0_-20px_50px_-20px_#ffffff1f_inset] hover:dark:[box-shadow:0_-20px_70px_-20px_#ffffff1f_inset] backdrop-blur-md shadow-md rounded-xl flex flex-col items-center">
                        <div className="border-b dark:border-muted-foreground/20 flex items-center justify-center gap-2 w-full py-10">
                            <p className="lg:text-xl md:text-md gap-1 flex flex-col md:flex-row font-semibold text-center">
                                <span>Send me a message.</span>
                                <span className="text-foreground/60">
                                    If you want to say hi or collaborate on your next big idea
                                </span>
                            </p>
                        </div>
                        <form
                            className="w-full flex flex-col items-center gap-4 px-8 pt-8 pb-16 border-b dark:border-muted-foreground/20"
                            action="https://formsubmit.co/b8873c5a8eefade0970301a1dc87e5dc"
                            method="POST"
                        >
                            <div className="flex flex-row justify-between gap-5 w-full">
                                <div className="flex flex-col w-full gap-1">
                                    <label htmlFor="name" className="text-md font-semibold">Name</label>
                                    <Input name="name" placeholder="First Name" type="text" maxLength={1000} minLength={3} required />
                                </div>
                                <div className="flex flex-col w-full gap-1">
                                    <label htmlFor="email" className="text-md font-semibold">Email</label>
                                    <Input name="email" placeholder="Email Address" type="email" maxLength={255} minLength={3} required />
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="message" className="text-md font-semibold">Your Message</label>
                                <Textarea name="message" className="w-full h-40 p-4 border rounded-md" placeholder="Your message here" required />
                            </div>
                            <div className="flex flex-col gap-5 w-full justify-start">
                                <Button variant="gradient" className='bg-foreground text-background' type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                        <div className="w-full flex flex-row items-center mt-12">
                            <div className="flex flex-col gap-4 border-t border-r h-64 justify-center dark:border-muted-foreground/20 w-1/2 px-10">
                                <Linkedin size={32} />
                                <p className="text-md font-semibold">Follow me on Linkedin.</p>
                                <p className="text-sm text-foreground/60">
                                    Stay up to date on my professional posts and networking on Linkedin
                                </p>
                                <Link href="https://www.linkedin.com/in/harry-campbell-75ab83250/">
                                    <Button variant="outline" className="w-full">Follow</Button>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4 border-t h-64 justify-center dark:border-muted-foreground/20 w-1/2 px-10">
                                <Github size={32} />
                                <p className="text-md font-semibold">Follow me on GitHub.</p>
                                <p className="text-sm text-foreground/60">
                                    Get up to date on my projects and open source contributions
                                </p>
                                <Link href="https://github.com/CampbellHarry">
                                    <Button variant="outline" className="w-full">Follow</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
