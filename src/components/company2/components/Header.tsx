import React from "react";

export const Header = () => {
  return (
    <header className="h-16 border-b flex justify-center flex-col px-2 md:px-6">
      <div className="flex flex-row justify-between items-center">
        <div className="text-2xl text-company2-primary font-bold">LOGO</div>
        <div>right</div>
      </div>
    </header>
  );
};
