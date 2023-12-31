import React from "react";

import { Button } from "../Button";
import { HeroTitle } from "./HeroTitle";
import { HeroCaption } from "./HeroCaption";
import { motion } from "framer-motion";
import { SpinningStar } from "../ThreeD/SpinningStar";

export const Hero = () => {
  return (
    <div
      className={`
        py-20
        bg-company2-primary text-white min-h-[400px]
        flex items-center justify-center
        h-screen
      `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="
          flex 
          max-w-[1000px] mx-auto p-6 
        "
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <HeroCaption label="ワンコインで楽しめる映画館" className="mb-3" />
          <HeroTitle label="OneMovie" className="mt-3 mb-4" />
          <Button className="w-full md:w-fit mb-3">資料請求</Button>
          <Button className="w-full md:w-fit" isFilled={false}>
            無料トライアル
          </Button>
        </div>

        <div className="hidden md:block md:w-1/2">
          <SpinningStar />
          {/* <Image
            src="https://via.placeholder.com/400"
            width={400}
            height={400}
            alt="img"
          /> */}
        </div>
      </motion.div>
    </div>
  );
};
