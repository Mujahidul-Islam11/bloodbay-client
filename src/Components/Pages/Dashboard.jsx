import { Outlet } from "react-router-dom";
import DashSideBar from "../Dashboard/DashSideBar";
import { useState } from "react";

const Dashboard = () => {
    const [drawer, setDrawer] = useState(false);
  return (
    <div className="relative">
       {drawer && <div className="absolute z-50 h-screen flex lg:hidden justify-between">
       <div onClick={()=> setDrawer(false)} className="shadow-lg">
       <DashSideBar></DashSideBar>
       </div>
       <div onClick={()=>setDrawer(false)} className="text-4xl -ml-12 mt-2">
       <ion-icon name="close-circle-outline"></ion-icon>
       </div>
       </div>}
      <header className="block lg:hidden flex items-center gap-4 md:gap-10 bg-gradient-to-r from-[#FF0563] to-[#ff05659a] py-3 px-5 text-3xl font-semibold text-white">
      <div onClick={()=> setDrawer(true)} className="">
      <ion-icon name="menu-outline"></ion-icon>
      </div>
        <h3 className="text-center text-xl md:text-3xl">
          Welcome to Dashboard
        </h3>
      </header>
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <DashSideBar></DashSideBar>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
