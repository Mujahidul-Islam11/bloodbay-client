import { NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <NavLink>
        <button className="text-xl ">Home</button>
      </NavLink>
      <NavLink>
        <button className="text-xl ">Search Donors</button>
      </NavLink>
      <NavLink>
        <button className="text-xl ">Blog</button>
      </NavLink>
      <NavLink>
        <button className="text-xl flex items-center gap-2">
          <LuUserCircle className="text-xl"></LuUserCircle>Sign Up
        </button>
      </NavLink>
      <NavLink>
        <button className="text-xl flex items-center gap-2">
          <MdLogin className="text-xl"></MdLogin>Log In
        </button>
      </NavLink>
      {/* <button>Logout</button> */}
    </>
  );
  return (
    <div className="bg-opacity-40 shadow py-2">
      <div className="flex justify-between max-w-screen-xl items-center mx-auto">
        {/* Logo */}
        <div className="text-xl flex items-center">
          <img
            className="w-16"
            src="https://i.postimg.cc/PqGYdHkX/Blood-Bay-logo.png"
            alt="Logo"
          />{" "}
          <h3 className="hidden md:flex font-semibold">Blood<span className="font-bold text-[#ff0533]">Bay</span></h3>
        </div>
        {/* Routes */}
        <div className="flex gap-6">{links}</div>
      </div>
    </div>
  );
};

export default Navbar;
