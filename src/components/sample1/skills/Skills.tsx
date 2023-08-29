import { useRef, useEffect } from "react";
import { SkillPanel } from "./SkillPanel";

export const Skills = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > vh * 2 && scrollY < 5 * vh) {
        const relativeScroll = scrollY - vh * 2;
        const scrollRation = relativeScroll / (2 * vh);

        if (scrollContainerRef.current) {
          const moveX = 640 * scrollRation;
          scrollContainerRef.current.style.transform = `translateX(-${moveX}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[400vh] w-full mx-auto flex justify-start items-start">
      <div className="sticky flex flex-row top-0 w-full">
        <div className="z-30 h-screen bg-gray-800">
          <div className="text-white text-3xl p-4 w-[300px]">Skills</div>
        </div>

        <div
          className="flex-1 relative z-10 flex flex-row items-center pl-16"
          ref={scrollContainerRef}
        >
          <SkillPanel title="HTML/CSS" />
          <SkillPanel title="JavaScript" />
          <SkillPanel title="Java" />
        </div>
      </div>
    </div>
  );
};
