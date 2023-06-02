import { useEffect, useState } from "react";
import { Order, OrderStatus, getOrders } from "../api/order";
import classNames from "classnames";
import OptionIcon from "./icons/menu-icon";
import Dropdown from "./dropdown";
import StatusDropdownItems, { StatusOption } from "./status-dropdown-item";
import SortIcon from "./icons/sort-icon";
import { SearchInput } from "./search-input";
import Modal from "./modal";

const statusOptions: StatusOption[] = [
  { key: "Confirmed", text: "Confirmed" },
  { key: "Refund Completed", text: "Refund Completed (30d)" },
  { key: "Delivered", text: "Delivered" },
  { key: "Pending", text: "Pending" },
];

export default function Table() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [orderToEdit, setOrderToEdit] = useState<Order | null>(null);

  useEffect(() => {
    fetch("/db.json")
      .then((result) => result.json())
      .then((data) => setOrders(data.orders));
  }, []);

  useEffect(() => {
    if (isModalOpen) return;
    const id = setTimeout(() => setOrderToEdit(null), 500);
    return () => {
      clearTimeout(id);
    };
  }, [isModalOpen]);

  function updateAmount(orderId: number, amount: number) {
    const updatedOrders = Array.from(orders);
    for (let x = 0; x < orders.length; ++x) {
      if (orders[x].id !== orderId) continue;
      orders[x].amount = amount;
    }
    setOrders(updatedOrders);
  }

  function filterByOrderStatus(status: OrderStatus) {
    getOrders().then((result) => {
      setOrders(result.unwrap().filter((order) => order.status === status));
      setOrderStatus(status);
    });
  }

  function sortBy(propName: string) {
    setOrders(Array.from(orders.sort((a, b) => a[propName] - b[propName])));
  }

  function onModalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={onModalClose}
        order={orderToEdit as Order}
        onSaveChange={updateAmount}
      />

      <table
        className="table-auto w-full"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 1.5em ",
        }}
      >
        <thead className="font-normal fixed-table-head">
          <tr>
            <th className="font-normal">
              <SearchInput />
            </th>
            <th>
              <div className="flex items-center space-x-2 justify-center">
                <Dropdown title="Active Orders">
                  <StatusDropdownItems
                    currentStatus={orderStatus}
                    status={statusOptions}
                    changeStatus={(value) => filterByOrderStatus(value)}
                  />
                </Dropdown>
                <button
                  className="p-2"
                  title={"Sort by active orders"}
                  onClick={() => sortBy("quantity")}
                >
                  <SortIcon />
                </button>
              </div>
            </th>
            <th>
              <div className="flex items-center space-x-2 justify-center">
                <Dropdown title="Amount" />
                <button
                  className="p-2"
                  onClick={() => sortBy("amount")}
                  title={"Sort by amount"}
                >
                  <SortIcon />
                </button>
              </div>
            </th>
            <th>
              <div className="flex items-center space-x-2 justify-center">
                <Dropdown title="Placed on" />
                <button className="p-2">
                  <SortIcon />
                </button>
              </div>
            </th>
            <th>
              <Dropdown title="Options" hasBg={false} />
            </th>
          </tr>
        </thead>

        <tbody>
          {!orders.length && <p>No orders found</p>}
          {!!orders.length &&
            orders.map((order, index) => (
              <tr
                key={`order${index}`}
                className={classNames("text-sm text-gray-500 text-center")}
              >
                <td className="text-start">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
                    <img
                      src={`/${order.logo}.png`}
                      alt="order company logo"
                      style={{ width: "60px", height: "auto !important" }}
                    />
                    <div className="flex flex-col spacing-y-1">
                      <span className="font-bold text-base text-black">
                        {order.brand_name}
                      </span>
                      <span className="text-sm">{order.item}</span>
                    </div>
                  </div>
                </td>
                <td>{order.quantity}</td>
                <td>{order.amount}</td>
                <td>{order.placed_on}</td>
                <td className="flex justify-center">
                  <button
                    title="Edit order"
                    className="w-fit p-3"
                    onClick={() => {
                      setOrderToEdit(order);
                      setIsModalOpen(true);
                    }}
                  >
                    <OptionIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
