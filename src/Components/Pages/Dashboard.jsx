import { Outlet } from "react-router-dom";
import DashHome from "../Dashboard/DashHome";
import DashSideBar from "../Dashboard/DashSideBar";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <DashSideBar></DashSideBar>
            <div className="w-full">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;