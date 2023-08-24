import { Hero } from "@/components/sample1/Hero";
import { Loader } from "@/components/sample1/Loader";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

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

        <div>Test</div>
      </main>
    </>
  );
};

export default Index;
