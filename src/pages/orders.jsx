import React from 'react'
import Header from '../components/Header'
import OrdersTable from '../components/OrdersTable'

const orders = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 ml-20 p-4 flex-col gap-[15px]">
      <Header />
      <OrdersTable />
    </div>
  )
}

export default orders