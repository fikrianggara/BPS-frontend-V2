import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const AlertAccordion = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={classNames(
        open ? "py-1" : "h-4",
        "duration-200 ease-in-out bg-yellow-400"
      )}
    >
      <div className="w-11/12 flex m-auto items-center justify-between">
        <div className="font-medium text-sm text-yellow-800">
          {open && props.children}
        </div>
        <div className="duration-200 ease-in-out rounded-full p-1 hover:cursor-pointer ml-2 bg-yellow-400 hover:bg-yellow-500">
          {open ? (
            <button
              className="h-5 w-6 font-bold"
              onClick={() => setOpen((prev) => !prev)}
            >
              X
            </button>
          ) : (
            <ChevronDownIcon
              className="h-5 w-5 z-10"
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default AlertAccordion;
