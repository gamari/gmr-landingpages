import React, { FunctionComponent } from "react";

import { Stars } from "../Stars";

interface Props {
  title: string;
}

export const SkillPanel: FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="w-[450px] h-[600px] rounded-lg border-2 shadow p-6 m-2 flex flex-col justify-between">
      <div>
        <div className="text-3xl text-gray-700">{title}</div>

        <div className="mt-4">
          <div className="text-gray-500">レベル</div>

          <Stars title={title} level={3} />
        </div>

        <div className="mt-4">
          <div className="text-gray-500">経験</div>

          <Stars title={title} level={3} />
        </div>
      </div>

      <div className="mt-4">
        <div className="border h-[200px] p-2 text-gray-600 text-lg">
          <div>コメント</div>
        </div>
      </div>
    </div>
  );
};
