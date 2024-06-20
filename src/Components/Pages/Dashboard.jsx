import { Outlet } from "react-router-dom";
import DashHome from "../Dashboard/DashHome";
import DashSideBar from "../Dashboard/DashSideBar";
import { FaHamburger } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <header className="block lg:hidden flex items-center gap-10 bg-gradient-to-r from-[#FF0563] to-[#ff05659a] py-3 px-5 text-3xl font-semibold text-white">
      <div className="">
      <ion-icon name="menu-outline"></ion-icon>
      </div>
        <h3 className="text-center">
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
