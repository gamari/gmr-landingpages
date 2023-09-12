import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
}

export const MenuLinks: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <div
      className={`
        flex flex-col justify-center items-center md:items-start md:flex-row gap-3
        h-full w-full 
        p-5
        ${className}
      `}
    >
      <div>Top</div>
      <div>お問い合わせ</div>
    </div>
  );
};
