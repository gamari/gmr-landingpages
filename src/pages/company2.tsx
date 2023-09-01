import React from "react";

import { Header } from "@/components/company2/components/Header/Header";
import { Hero } from "@/components/company2/components/Hero/Hero";
import { FeaturesSection } from "@/components/company2/components/Features/FeaturesSection";
import { Footer } from "@/components/company2/components/Footer/Footer";
import { NewsSection } from "@/components/company2/components/News/NewsSection";
import { ReminderSection } from "@/components/company2/components/Reminder/ReminderSection";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <NewsSection />
      <ReminderSection />
      <Footer />
    </>
  );
};

export default Index;
