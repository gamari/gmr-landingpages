import { SlideIn } from "@/components/base/components/animation/SlideIn";
import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";

export const Feature = () => {
  return (
    <SlideIn direction="bottom">
      <div className="w-full max-w-[500px] bg-white flex flex-col items-center pt-4 px-4 pb-6">
        <div className="text-xl font-bold">レンタル</div>

        <div className="my-6">
          <AiOutlineFieldTime className="h-12 w-12 text-blue-500" />
        </div>

        <p className="text-gray-600 text-start">
          100円を使ってMovieをレンタルすることが可能です。
        </p>
      </div>
    </SlideIn>
  );
};
