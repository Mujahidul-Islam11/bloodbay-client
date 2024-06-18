import { Outlet } from "react-router-dom";
import DashHome from "../Dashboard/DashHome";
import DashSideBar from "../Dashboard/DashSideBar";


const Dashboard = () => {
    return (
        <div>
            {/* Sidebar */}
            <DashSideBar></DashSideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;