import React from "react";
import { Star } from "./Star";
import { Qwitcher_Grypen } from "next/font/google";

const qwitcherGrypen = Qwitcher_Grypen({ weight: ["400"], subsets: ["latin"] });

export const Logo = () => {
  return (
    <div
      className={`
        absolute
        top-[1rem] left-[1rem]
        flex items-end
        w-full
        z-[8]
      `}
    >
      <Star color="white" />

      <span
        className={`
      text-white text-4xl ${qwitcherGrypen.className}
      `}
      >
        Gmr&apos;s house
      </span>
    </div>
  );
};
