import React from "react";

export const ContactForm = () => {
  return (
    <div className="h-screen  flex flex-row items-center justify-center">
      <div className="bg-stone-100 border-2 border-stone-100 shadow-lg max-w-[600px] max-h-[800px] w-full h-full py-10 flex flex-col justify-between">
        <div className="">
          <div className="flex items-center justify-center">
            <div className="text-xl">お問い合わせフォーム</div>
          </div>

          <div className="flex flex-col items-center space-y-5 mt-6">
            <input
              type="text"
              className="border text-xl p-2 rounded-lg w-full max-w-lg"
            />
            <input
              type="text"
              className="border text-xl p-2 rounded-lg w-full max-w-lg"
            />
            <input
              type="text"
              className="border text-xl p-2 rounded-lg w-full max-w-lg"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="p-4 rounded-full w-full mx-12 bg-gray-500 text-white">
            送信
          </button>
        </div>
      </div>
    </div>
  );
};
