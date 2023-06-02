import { ComponentType } from "react";
import ZagLogo from "./../assets/zag_logo.png";

import classNames from "classnames";
import { IconProps } from "./icons/icon-prop-type";
import LineIcon from "./icons/line-icon";
import SettingsIcon from "./icons/settings-icon";
import TilesIcon from "./icons/tiles-icon";

type SideNavItemProps = {
  text: string;
  Icon: ComponentType<IconProps>;
  active?: boolean;
};

function SideNavItem({ Icon, text, active }: SideNavItemProps) {
  return (
    <div
      className={classNames(
        "flex space-x-4 items-center p-3 rounded-md w-full cursor-pointer",
        {
          "bg-zag-primary-100": active ?? false,
          "hover:bg-zag-gray-100": !active,
        }
      )}
    >
      <Icon />{" "}
      <span className={classNames({ "text-zag-primary-200": active ?? false })}>
        {text}
      </span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-5 drop-shadow-xl shadow-gray-400 w-80 rounded-r-3xl sidebar bg-white">
      <div className="space-y-3">
        <div className="flex justify-center mt-5">
          <img src={ZagLogo} alt={"Zag logo"} />
        </div>
        <div className="flex-1 mt-3">
          <ul className="space-y-4">
            <li>
              <SideNavItem Icon={LineIcon} text="Reports" />
            </li>
            <li>
              <SideNavItem Icon={TilesIcon} text="Workspaces" active />
            </li>
            <li>
              <SideNavItem Icon={SettingsIcon} text="Settings" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
