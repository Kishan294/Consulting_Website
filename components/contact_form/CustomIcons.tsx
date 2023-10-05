import { LucideIcon } from "lucide-react";
import React from "react";

const CustomIcons = ({ Icon }: { Icon: LucideIcon }) => {
  return (
    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
      <Icon className="w-5 h-5" />
    </span>
  );
};

export default CustomIcons;
