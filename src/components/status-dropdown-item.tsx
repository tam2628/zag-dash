import classNames from "classnames";
import DropdownItem from "./dropdown-item";
import { OrderStatus } from "../api/order";

export type StatusOption = {
  key: OrderStatus;
  text: string;
};

type StatusDropdownItemsProps = {
  status: StatusOption[];
  currentStatus: OrderStatus;
  changeStatus: (value: OrderStatus) => void;
};

export default function StatusDropdownItems({
  status,
  currentStatus,
  changeStatus,
}: StatusDropdownItemsProps) {
  return (
    <>
      {status.map((_status, index) => (
        <DropdownItem
          key={`${status}-${index}`}
          onClick={() => changeStatus(_status.key)}
        >
          <div className="flex items-center w-full spacing-x-2">
            <div
              className={classNames(
                "rounded-full border border-1 border-gray-400",
                {
                  "bg-gray-400": currentStatus === _status.key,
                }
              )}
              style={{ height: 12, width: 12 }}
            />
            <div className="ml-3">
              <span className="text-sm  font-normal">{_status.text}</span>
            </div>
          </div>
        </DropdownItem>
      ))}
    </>
  );
}
