import React from "react";
import { data } from "../data/data";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

const CustomersTable = () => {
  return (
    <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
      <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
        <span>Name</span>
        <span className="sm:text-left text-right">Email</span>
        <span className="hidden md:grid">Last order</span>
        <span className="hidden sm:grid">Method</span>
      </div>
      <div>
        {data.map(order => (
          <Link  href='/'
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between text-sm cursor-pointer"
          >
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3  sm:flex hidden">
                <BsPersonFill className="text-purple-500" />
              </div>
              <p className="sm:pl-4">{order.name.first + " " + order.name.last}</p>
            </div>
            <p className="text-gray-600 sm:text-left text-right">
              {order.name.first}@gmail.com
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

export default CustomersTable;
