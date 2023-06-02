import DashIcon from "./components/icons/dash-icon";
import PlusIcon from "./components/icons/plus-icon";

import Sidebar from "./components/sidebar";
import Table from "./components/table";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div
        className="w-full px-10 py-5"
        style={{
          backgroundColor: "#F9F9F9",
        }}
      >
        <div className="flex justify-between mb-5">
          <p className=" text-xl">Orders</p>
          <button className="bg-zag-primary rounded-md text-xs text-white font-bold p-2 flex items-center">
            <PlusIcon color="white" />
            <span className="ml-2">Add Order</span>
          </button>
        </div>
        <hr className="mb-5" />
        <div className="p-5 rounded-lg bg-white border-1 border mb-5">
          <div className="flex w-full justify-between items-center mb-3">
            <div className="space-x-3 font-bold text-lg">
              <span>Confirmed</span>
              <span className="text-gray-400 ">258</span>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-zag-gray-100 rounded-full">
              <DashIcon />
            </div>
          </div>
          <hr />
          <div
            style={{ maxHeight: "600px" }}
            className="overflow-auto custom-scrollbar"
          >
            <Table />
          </div>
        </div>

        <div className="p-5 rounded-lg bg-white border-1 border">
          <div className="flex w-full justify-between items-center">
            <div className="space-x-3 font-bold text-lg">
              <span>Issues</span>
              <span className="text-gray-400 ">21</span>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-zag-gray-100 rounded-full">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
