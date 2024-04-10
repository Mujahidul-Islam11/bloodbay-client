import { BiHealth, BiPlus, BiPlusCircle, BiUser } from "react-icons/bi";
import { CiMedicalCase } from "react-icons/ci";
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
             <BiUser className="text-2xl text-black"></BiUser> Profile
            </button>
          </NavLink>{" "}
          <NavLink to={"/dash/myReq"}>
          <button className="text-xl w-full py-2 px-6 mb-2 hover:bg-[#c8cdd5] flex gap-3 items-center">
             <CiMedicalCase className="text-2xl text-black"></CiMedicalCase> My Request
            </button>
          </NavLink>{" "}
        </>
      );
    return (
        <div className="w-60 h-screen bg-white border">
            <div className="text-xl px-6 my-4">
            <img
              className="w-[150px] md:w-[170px]"
              src="https://i.postimg.cc/vTn05fH1/Screenshot-4-removebg-preview.png"
              alt="Logo"
            />{" "}
          </div>
          <div className="border-b"></div>
            {dashLinks}
        </div>
    );
};

export default DashSideBar;