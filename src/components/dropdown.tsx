import classNames from "classnames";
import { ReactNode, useRef, useState } from "react";
import ArrowUpIcon from "./icons/arrow-up-icon";
import { useOutsideClick } from "../hooks/outside-click";

type DropdownProps = {
  title: string;
  children?: ReactNode;
  hasBg?: boolean;
};

export default function Dropdown({ children, title, hasBg }: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div
      className="flex flex-col items-center cursor-pointer relative z-10"
      onClick={() => {
        if (!children) return;
        setOpen((open) => !open);
      }}
      ref={ref}
    >
      <div>
        <div
          className={classNames(
            "rounded-md p-1 px-3 w-fit text-sm text-gray-600 flex items-center space-x-2 font-normal",
            { "bg-zag-gray-100": hasBg ?? true }
          )}
        >
          <span>{title}</span>
          <span className={classNames({ "rotate-180": !open })}>
            {open ? <ArrowUpIcon /> : <ArrowUpIcon />}
          </span>
        </div>
        {children && open && (
          <div className="bg-white p-3 rounded-md shadow-md w-60 absolute top-10 flex flex-col items-start z-10">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
