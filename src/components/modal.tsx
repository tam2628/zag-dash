/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Order } from "../types";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  order: Order;
  onSaveChange: (id: number, amount: number) => void;
};

export default function Modal({
  isOpen,
  onClose,
  order,
  onSaveChange,
}: ModalProps) {
  const [amountValue, setAmountValue] = useState<string>("");

  useEffect(() => {
    if (!order) return;
    setAmountValue(order.amount.toString());
  }, [order]);

  return (
    <Transition.Root show={isOpen ?? false} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg
               text-left 
            overflow-hidden shadow-xl 
            transform transition-all 
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* <div className="sm:flex sm:items-start w-full"> */}
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text leading-6 font-medium text-gray-900 mb-5"
                  >
                    Change Amount
                  </Dialog.Title>
                  <div className="mt-2">
                    {order && (
                      <div>
                        <div className="flex items-center mb-3">
                          <img
                            src={`/${order.logo}.png`}
                            alt="order company logo"
                            className="mr-2"
                            style={{
                              width: "100px",
                              height: "auto !important",
                            }}
                          />
                          <div className="flex flex-col spacing-y-1">
                            <span className="font-bold text-xl text-black">
                              {order.brand_name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {order.item}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col text-start">
                          <label>Enter new amount</label>
                          <input
                            value={amountValue}
                            onChange={(e) =>
                              setAmountValue(e.currentTarget.value)
                            }
                            className="outline-none border-black p-2 rounded-md w-full"
                            style={{ border: "1px solid black" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md
                   border border-transparent shadow-sm px-4 py-2 bg-zag-primary
                    text-base font-medium text-white
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    onSaveChange(order.id, Number.parseInt(amountValue));
                    onClose();
                  }}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
