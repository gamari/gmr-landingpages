import React from "react";
import { News } from "./News";

export const NewsList = () => {
  return (
    <div className="flex flex-col space-y-6">
      <News />
      <News />
      <News />
    </div>
  );
};
