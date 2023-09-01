import { Title } from "@/components/base/components/Title";
import React from "react";
import { Price } from "./Price";

export const Prices = () => {
  return (
    <div className="py-10 flex items-center flex-col">
      <Title className="text-company1-primary" label="アプリ料金" />

      <div className="mt-10 w-[90%] mx-auto">
        <Price />
      </div>
    </div>
  );
};
