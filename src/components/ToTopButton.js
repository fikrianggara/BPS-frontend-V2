import React from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
const ToTopButton = () => {
  return (
    <div className="fixed right-4 bottom-[10%] z-100">
      <a href="#root" className="scroll-smooth">
        <ChevronUpIcon className="h-12 w-12 bg-green-500 hover:bg-green-700 text-white text-xl rounded-full shadow-lg hover:mb-1 duration-200 ease-in-out"></ChevronUpIcon>
      </a>
    </div>
  );
};

export default ToTopButton;
