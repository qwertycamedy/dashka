import React from "react";
import {data} from "../data/data";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

const RecentOrders = () => {
  return (
    <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg overflow-y-auto bg-white">
      <h3>Recent Orders</h3>
      <div>
        {data.map(order => (
          <Link href='/'
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 transition-colors ease-linear duration-200 rounded-lg my-3 p-2 flex items-center gap-[10px] cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-600" />
            </div>
            <div>
              <p className="text-gray-800 font-semibold">
                ${order.total}
              </p>
              <p className="text-gray-400 text-sm">
                {order.name.first}
              </p>
            </div>
            <p className="xsm:hidden sm:flex md:hidden lg:flex absolute right-6 text-sm">
              {
                order.date
              }
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;