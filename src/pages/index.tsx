import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";
import BarChart from "../components/BarChart";
import RecentOrders from "../components/RecentOrders";
import App from "./_app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>QC DASHBOARD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex bg-gray-100 ml-20 p-4 flex-col gap-[15px]">
          <Header />
          <TopCards />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart />
            <RecentOrders />
          </div>
      </main>
    </>
  );
}
