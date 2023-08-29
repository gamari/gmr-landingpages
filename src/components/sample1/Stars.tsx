import React, { FunctionComponent } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  title: string;
  level: number;
}

export const Stars: FunctionComponent<Props> = ({ level, title }) => {
  return (
    <div className="p-2 text-yellow-300 flex flex-row space-x-2">
      {[...new Array(level)].map((v, i) => (
        <AiFillStar key={`${title}${i}`} className="text-3xl" />
      ))}
      {[...new Array(5 - level)].map((v, i) => (
        <AiOutlineStar key={`${title}${i}`} className="text-3xl" />
      ))}
    </div>
  );
};
