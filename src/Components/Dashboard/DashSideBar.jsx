import { BiDonateBlood, BiEdit, BiHealth, BiHeart, BiPlus, BiPlusCircle, BiUser } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { CiMedicalCase } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { GiBlood } from "react-icons/gi";
import { MdCreate, MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";


const DashSideBar = () => {
    const dashLinks = (
        <>
          <NavLink to={"/dash/createReq"}>
            <button className="text-xl w-full py-2 px-6 mb-2 bg-[#FF0563] text-white hover:bg-[#ff76aa] flex gap-3 items-center">
             <BiPlus className="text-2xl text-white"></BiPlus> Create Request
            </button>
          </NavLink>{" "}
          <NavLink to={"/dash"}>
            <button className="text-xl w-full py-2 px-6 mb-2 hover:bg-[#c8cdd5] flex gap-3 items-center">
             <MdDashboard className="text-2xl text-black"></MdDashboard> Dashboard
            </button>
          </NavLink>{" "}
          <NavLink to={"/dash/profile"}>
          <button className="text-xl w-full py-2 px-6 mb-2 hover:bg-[#c8cdd5] flex gap-3 items-center">
             <FaUserEdit className="text-2xl text-black"></FaUserEdit> Profile Settings
            </button>
          </NavLink>{" "}
          <NavLink to={"/dash/myReq"}>
          <button className="text-xl w-full py-2 px-6 mb-2 hover:bg-[#c8cdd5] flex gap-3 items-center">
             <BiDonateBlood className="text-2xl text-black"></BiDonateBlood> My Request
            </button>
          </NavLink>{" "}
        </>
      );
    return (
        <div className="w-64 h-screen bg-white border px-2">
            <div className="text-xl px-6 my-4">
            <img
              className="w-[150px] md:w-[170px]"
              src="https://i.postimg.cc/vTn05fH1/Screenshot-4-removebg-preview.png"
              alt="Logo"
            />{" "}
          </div>
          <div className="border-b mb-4"></div>
            {dashLinks}
        </div>
    );
};

export default DashSideBar;