import React from "react";

import { Header } from "@/components/company/Header";
import { Hero } from "@/components/company/hero/Hero";
import { Features } from "@/components/company/feature/Features";
import { Functions } from "@/components/company/functions/Functions";
import { Prices } from "@/components/company/price/Prices";
import { Footer } from "@/components/company/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Functions />
      <Prices />

      <Footer />
    </>
  );
};

export default Index;
