import React from "react";
import { NewsList } from "./NewsList";

export const NewsSection = () => {
  return (
    <section className="py-20 flex flex-col items-center w-full bg-gray-200">
      <div className="text-company2-primary text-3xl font-bold">お知らせ</div>

      <div className="pt-10">
        <NewsList />
      </div>
    </section>
  );
};
