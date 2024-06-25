import { useContext } from "react";
import { BiDonateBlood, BiPlus } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const DashSideBar = () => {
  const { user } = useContext(AuthContext);
console.log(user?.displayName)
  const dashLinks = (
    <>
      <NavLink to={"/dashboard/createReq"}>
        <button className="text-xl w-full py-2 px-6 mb-2 rounded bg-[#FF0563] text-white hover:bg-[#ff6fa6] hover:text-gray-700 flex gap-3 items-center">
          <BiPlus className="text-2xl text-white"></BiPlus> Create Request
        </button>
      </NavLink>{" "}
      <NavLink to={"/dashboard/dashboardHome"}>
        <button className="text-xl w-full py-2 px-6 mb-2 rounded hover:bg-gray-200 flex gap-3 items-center">
          <MdDashboard className="text-2xl text-black"></MdDashboard> Dashboard
        </button>
      </NavLink>{" "}
      <NavLink to={"/dashboard/profile"}>
        <button className="text-xl w-full py-2 px-6 mb-2 rounded hover:bg-gray-200 flex gap-3 items-center">
          <FaUserEdit className="text-2xl text-black"></FaUserEdit> Profile
          Settings
        </button>
      </NavLink>{" "}
      <NavLink to={"/dashboard/myReq"}>
        <button className="text-xl w-full py-2 px-6 mb-2 rounded hover:bg-gray-200 flex gap-3 items-center">
          <BiDonateBlood className="text-2xl text-black"></BiDonateBlood> My
          Requests
        </button>
      </NavLink>{" "}
    </>
  );
  return (
    <div className="md:h-screen w-72 bg-white border px-2">
      {/* Dashboard logo */}
      <NavLink
      to={'/'}>
        <div className="text-xl px-6 my-4 cursor-pointer">
        <img
          className="w-[150px] md:w-[170px]"
          src="https://i.postimg.cc/vTn05fH1/Screenshot-4-removebg-preview.png"
          alt="Logo"
        />{" "}
      </div>
      </NavLink>
      <div className="border-b mb-4"></div>

      {/* Dashboard routes */}
      <div>{dashLinks}</div>
      <div className="border-b mt-4"></div>

      {/* Dashboard Profile */}
      <NavLink to={"/dashboard/profile"}>
        <div className="mt-
        6 lg:absolute bottom-6 flex gap-3 items-center hover:hover:bg-gray-200 rounded px-2 py-2">
          <img
            className="w-12 cursor-pointer h-12 p-1 rounded-full dark:ring-gray-500"
            src={user?.photoURL}
            alt="Bordered avatar"
          />
          <h2>{user?.displayName}</h2>
          <PiArrowsDownUpLight></PiArrowsDownUpLight>
        </div>
      </NavLink>
    </div>
  );
};

export default DashSideBar;
