"use client"

import Header from "@/components/header/header";
import Particles from "@/components/particles/particles";

export default function AboutPage() {
    return(
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <div className="w-full  relative border-muted border dark:shadow-[#000] overflow-hidden bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#2e3440] items-center justify-center hover:shadow-sm transition-all shadow-md shadow-foreground/20 rounded-lg h-[40rem] p-4">
                        <div className="absolute inset-0 h-full" aria-hidden="true">
                            <Particles className="h-[200rem]" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}