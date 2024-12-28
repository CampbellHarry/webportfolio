import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Badge } from "../ui/badge";

gsap.registerPlugin(ScrollTrigger);

function AnimateText() {
    useEffect(() => {
        const wordshower = document.querySelectorAll('.wordshow');
        wordshower.forEach((word, index) => {
          gsap.fromTo(
            word,
            { y: 30, opacity: 0, filter: 'blur(10px)' },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 1,
              delay: index * 0.6,
              scrollTrigger: {
                trigger: word,
                start: 'top 80%',
              },
            }
          );
        });
      }, []);

      return (
        <div className="fulltopgradient flex flex-row items-center text-center justify-center gap-1 md:gap-3 lg:gap-5">
          <span className="wordshow">Harry</span>
          <span className="wordshow">Campbell</span>
        </div>
      );
}

function AnimateLowerText(){
    useEffect(() => {
        const wordshower = document.querySelectorAll('.wordshow-lower');
        wordshower.forEach((word, index) => {
            gsap.fromTo(
            word,
            { y: 30, opacity: 0, filter: 'blur(10px)' },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 1,
              delay: index * 1.5 + 1.5,
              scrollTrigger: {
              trigger: word,
              start: 'top 80%',
              },
            }
            );
        });
      }, []);

      return (
        <div className="fulltopgradient flex flex-row items-center text-center justify-center gap-1 md:gap-3 lg:gap-5">
            <span className="wordshow-lower">I am a dedicated software engineer focused on creating secure, efficient, and dependable systems that surpass business expectations.</span>
        </div>
      );
}

function BadgeAnimation(){
    useEffect(() => {
        const badges = document.querySelectorAll('.badge');
        badges.forEach((badge, index) => {
          gsap.fromTo(
            badge,
            { y: 30, opacity: 0, filter: 'blur(10px)' },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 1,
              delay: index * 0.55,
              scrollTrigger: {
                trigger: badge,
                start: 'top 80%',
              },
            }
          );
        });
      }, []);

      return (
        <div className="flex flex-row items-center justify-center gap-4">
              <Badge variant="outline" className="badge">Software Engineer</Badge>
              <Badge variant="outline" className="badge">Full Stack Developer</Badge>
              <Badge variant="outline" className="badge">Cyber Security Engineer</Badge>
        </div>
      );
}

export {AnimateText, AnimateLowerText, BadgeAnimation};