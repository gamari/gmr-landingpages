import React, { FunctionComponent } from "react";

interface Props {
  label: string;
  className?: string;
}

export const HeroTitle: FunctionComponent<Props> = ({ label, className }) => {
  return <h1 className={`${className} text-4xl font-bold`}>{label}</h1>;
};
