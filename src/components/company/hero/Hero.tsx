import React from "react";

export const Hero = () => {
  return (
    <div className="bg-primary text-white pt-10 flex flex-col items-center justify-center">
      <div className="text-sm"></div>
      <div className="text-3xl">アプリ名</div>

      <div className="mt-3 p-4 border border-white">features</div>

      <button className="w-[90%] bg-teal-500 mt-5 text-lg py-3 rounded-sm ">
        無料登録
      </button>

      <div className="mt-4 mb-6">image</div>
    </div>
  );
};
