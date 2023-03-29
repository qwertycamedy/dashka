import Link from "next/link";
import React from "react";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'

const Sidebar = ({children}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center gap-[15px] fixed w-20 h-screen p-4 bg-white border-r-[1px]">
        <div className="flex flex-col">
          <Link href="/">
            <span className="bg-purple-600 hover:bg-purple-700 transition-colors ease-linear duration-200 cursor-pointer text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </span>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
        </div>

        <div className="flex flex-col gap-[15px]">
          <Link href="/">
            <span className="bg-gray-100 hover:bg-gray-200 transition-colors ease-linear duration-200 cursor-pointer text-black p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </span>
          </Link>
          <Link href="/customers">
            <span className="bg-gray-100 hover:bg-gray-200 transition-colors ease-linear duration-200 cursor-pointer text-black p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </span>
          </Link>
          <Link href="/orders">
            <span className="bg-gray-100 hover:bg-gray-200 transition-colors ease-linear duration-200 cursor-pointer text-black p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </span>
          </Link>
          <Link href="/settings">
            <span className="bg-gray-100 hover:bg-gray-200 transition-colors ease-linear duration-200 cursor-pointer text-black p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </span>
          </Link>
        </div>
      </div>
      <main className="w-full">
      {children}
      </main>
    </div>
  );
};

export default Sidebar;
