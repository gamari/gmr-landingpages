import React, { FunctionComponent } from "react";

import { Feature } from "./Feature";

interface Props {
  className?: string;
}

export const Features: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-5xl mx-auto grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 ${className}`}
    >
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
};
