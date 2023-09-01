import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  isFilled?: boolean;
}

export const Button: FunctionComponent<Props> = ({
  children,
  className = "",
  isFilled = true,
}) => {
  return (
    <button
      className={`
       px-6 py-2 rounded-lg
       font-bold
       ${
         isFilled
           ? "bg-sky-400 text-white"
           : "border border-sky-400 bg-white text-sky-400"
       }
       ${className}`}
    >
      {children}
    </button>
  );
};
