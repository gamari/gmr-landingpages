import React, { FunctionComponent } from "react";

interface Props {
  size?: "h1" | "h2" | "h3";
  className?: string;
  label: string;
}

// TODO sizeの変更
export const Title: FunctionComponent<Props> = ({
  className,
  size = "h3",
  label,
}) => {
  return <h2 className={`text-3xl font-bold ${className}`}>{label}</h2>;
};
