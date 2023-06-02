import React from "react";
import SearchIcon from "./icons/search-icon";
import classNames from "classnames";

export const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>((props, ref) => (
  <div ref={ref} className="flex space-x-2 w-fit">
    <SearchIcon />
    <input
      {...props}
      placeholder="Search"
      className={classNames("outline-none", props.className)}
    />
  </div>
));
