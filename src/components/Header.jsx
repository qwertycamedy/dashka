import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <h1>QC Dashka</h1>
      {router.pathname == "/" ? (
        <p className="text-right">Welcome back, Comrade</p>
      ) : router.pathname == "/customers" ? (
        <p className="text-right">Customers</p>
      ) : (
        <p className="text-right">Orders</p>
      ) }
    </div>
  );
};

export default Header;
