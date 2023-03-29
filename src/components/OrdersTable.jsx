import React from "react";
import { data } from "../data/data";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

const OrdersTable = () => {
  return (
    <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
      <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
        <span>Order</span>
        <span className="sm:text-left text-right">Status</span>
        <span className="hidden md:grid">Last order</span>
        <span className="hidden sm:grid">Method</span>
      </div>
      <div>
        {data.map(order => (
          <Link href='/'
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between text-sm cursor-pointer"
          >
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3  sm:flex hidden">
                <FaShoppingBag className="text-purple-500" />
              </div>
              <div className="sm:pl-4">
                <p className="text-grey-500 font-semibold">
                  ${order.total}
                </p>
                <p className="text-grey-500 text-sm">{order.name.first}</p>
              </div>
            </div>
            <p className="text-gray-600 sm:text-left text-right">
              <span
                className={
                  order.status == "Processing"
                    ? "p-2 rounded-lg bg-blue-200"
                    : order.status == "Completed"
                    ? "p-2 rounded-lg bg-green-200"
                    : "p-2 rounded-lg bg-yellow-200"
                }
              >
                {order.status}
              </span>
            </p>
            <p className="hidden md:flex">{order.date}</p>
            <div className="sm:flex hidden justify-between items-center">
              <p>{order.method}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrdersTable;
