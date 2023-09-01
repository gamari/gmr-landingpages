import React from "react";
import { Button } from "../Button";

export const ReminderSection = () => {
  return (
    <div className="py-20 flex flex-col items-center space-y-6">
      <Button className="w-full max-w-lg">資料請求</Button>
      <Button isFilled={false} className="w-full max-w-lg">
        試してみる
      </Button>
    </div>
  );
};
