import { ButtonHTMLAttributes, ReactNode } from "react";

type DropdownItemProps = {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<React.HTMLProps<HTMLButtonElement>, "type">;

export default function DropdownItem({
  children,
  ...props
}: DropdownItemProps) {
  return (
    <button className="w-full p-2 hover:bg-slate-100 rounded-md" {...props}>
      {children}
    </button>
  );
}
