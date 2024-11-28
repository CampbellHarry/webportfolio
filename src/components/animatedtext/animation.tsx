import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

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

export default AnimateText;