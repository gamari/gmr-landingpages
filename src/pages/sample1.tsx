import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";

import { AboutMe } from "@/components/sample1/AboutMe";
import { Hero } from "@/components/sample1/Hero";
import { Loader } from "@/components/sample1/Loader";
import { ContactForm } from "@/components/sample1/contact/ContactForm";
import { Skills } from "@/components/sample1/skills/Skills";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000);
  // }, []);

  return (
    <>
      <AnimatePresence>{isLoaded ? null : <Loader />}</AnimatePresence>

      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <ContactForm />
      </main>
    </>
  );
};

export default Index;
