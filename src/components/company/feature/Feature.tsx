import React from "react";

export const Feature = () => {
  return (
    <div className="border-2 border-company1-primary bg-white w-[90%] mx-auto relative">
      <div className="absolute top-0 bg-company1-primary text-white right-[50%] translate-y-[-50%] translate-x-[50%] text-[2rem] w-12 h-12 text-center flex items-center justify-center rounded-full">
        1
      </div>

      <div className="mt-6 p-2 flex flex-col items-center">
        <div className="text-3xl text-company1-primary">特徴1</div>

        <div className="p-2">
          <div>説明1</div>
          <div>説明2</div>
        </div>

        <div className="border-2 border-secondary w-full p-3">
          <div>test</div>
        </div>
      </div>
    </div>
  );
};
