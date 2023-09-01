import React from "react";
import { Button } from "../Button";
import { Features } from "./Features";

export const FeaturesSection = () => {
  return (
    <section className="py-20 flex flex-col items-center w-full">
      <div className="text-company2-primary text-3xl font-bold">機能一覧</div>

      <Features className="mt-10" />

      <div className="mt-20">
        <Button className="w-[300px]">資料請求</Button>
      </div>
    </section>
  );
};
