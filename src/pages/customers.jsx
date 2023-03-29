import React from "react";
import Header from '../components/Header'
import CustomersTable from '../components/CustomersTable'

const customers = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 ml-20 p-4 flex-col gap-[15px]">
      <Header />
      <CustomersTable />
    </div>
  );
};

export default customers;
