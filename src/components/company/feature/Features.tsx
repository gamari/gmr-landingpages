import React from "react";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <div className="flex flex-col justify-center bg-company1-secondary pt-10 items-center">
      <div className="text-primary font-bold text-3xl">アプリの特徴</div>

      <div className="w-full mt-10 mb-6">
        <Feature />
      </div>
    </div>
  );
};
