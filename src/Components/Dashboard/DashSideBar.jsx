import { BiPlusCircle, BiUser } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";


const DashSideBar = () => {
    const dashLinks = (
        <>
          <NavLink to={"/dash"}>
            <button className="text-xl w-full py-2 px-6 hover:bg-[#c8cdd5] flex gap-3 items-center">
             <MdDashboard className="text-2xl text-black"></MdDashboard> Dashboard
            </button>
          </NavLink>{" "}
          <br />
          <NavLink to={"/dash"}>
          <button className="text-xl w-full py-2 px-6  hover:bg-[#c8cdd5] flex gap-3 items-center">
             <BiUser className="text-2xl text-black"></BiUser> Profile
            </button>
          </NavLink>{" "}
          <br />
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