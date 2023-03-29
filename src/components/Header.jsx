import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <h1>QC Dashka</h1>
      {router.pathname == "/" ? (
        <p>Welcome back, Comrade</p>
      ) : router.pathname == "/customers" ? (
        <p>Customers</p>
      ) : router.pathname == "/orders" ? (
        <p>Orders</p>
      ) : (
        <p>Settings</p>
      )}
    </div>
  );
};

export default Header;
