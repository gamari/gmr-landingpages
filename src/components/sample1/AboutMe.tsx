import React from "react";

export const AboutMe = () => {
  return (
    <div
      className="
        relative
        flex items-center
        min-h-screen w-[80%]
        mx-auto
      "
    >
      <div
        className={`
          absolute top-24
          text-3xl
        `}
      >
        About Me
      </div>

      {/* Left */}
      <div>
        初めまして、ガマリと申します。
        <br />
        普段はAIに関する個人開発などをしています。
        <br />
        好きな言語は「Python」、よく使う言語は「Java」。
        <br />
        沢山の方と交流したいと思っています。
      </div>

      {/* Right */}
      <div>
        <img src="/images/hat-man.jpg" alt="img" width={400} height={600} />
      </div>
    </div>
  );
};
