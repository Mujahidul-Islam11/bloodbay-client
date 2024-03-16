import { NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileLinks = (
    <>
      <NavLink>
        <button className="text-xl w-full py-2 hover:bg-[#c8cdd5]">
          Profile
        </button>
      </NavLink>{" "}
      <br />
      <NavLink>
        <button className="text-xl w-full py-2 hover:bg-[#c8cdd5]">
          Dashboard
        </button>
      </NavLink>{" "}
      <br />
      <NavLink>
        <button className="text-xl w-full py-2 hover:bg-[#c8cdd5]">
          Settings
        </button>
      </NavLink>{" "}
      <br />
      <button className="text-xl w-full py-2 text-red-500 hover:bg-red-500 hover:text-white">
        Log Out
      </button>
    </>
  );

  const links = (
    <>
      <NavLink to={'/'}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b border-gray-700 text-[#FF0563]" : ""
        }
      >
        <button className="text-xl hover:text-[#FF0563] font-semibold ">
          Home
        </button>
      </NavLink>
      <NavLink to={'/search'}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b border-gray-700 text-[#FF0563]" : ""
        }
      >
        <button className="text-xl hover:text-[#FF0563] font-semibold">
          Search Donors
        </button>
      </NavLink>
      <NavLink to={'/blog'}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b border-gray-700 text-[#FF0563]" : ""
        }
      >
        <button className="text-xl hover:text-[#FF0563] font-semibold  ">
          Blog
        </button>
      </NavLink>
      <NavLink to={'/signUp'}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b border-gray-700 text-[#FF0563]" : ""
        }
      >
        <button className="text-xl hover:text-[#FF0563] font-semibold  flex items-center gap-2">
          <LuUserCircle className="text-xl"></LuUserCircle>Sign Up
        </button>
      </NavLink>
      <NavLink to={'/logIn'}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b border-gray-700 text-[#FF0563]" : ""
        }
      >
        <button className="text-xl hover:text-[#FF0563] font-semibold flex items-center gap-2">
          <MdLogin className="text-xl"></MdLogin>Log In
        </button>
      </NavLink>
      <div>
        <img
          onClick={() => setProfileOpen(!profileOpen)}
          className="w-12 cursor-pointer h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://i.postimg.cc/7hkMR1VW/empty-face-icon-avatar-with-black-hair-vector-illustration-601298-13402-removebg-preview.png"
          alt="Bordered avatar"
        />
        {profileOpen ? (
          <div className="shadow absolute mt-3 right-0 mr-6 z-40 bg-[#E2E8F0] w-32 md:w-40 text-center">
            {profileLinks}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <button>Logout</button> */}
    </>
  );
  return (
    <div className="relative">
      <div className="bg-opacity-40 shadow py-2">
        <div className="flex justify-between max-w-screen-xl items-center mx-auto">
          {/* Logo */}
          <div className="text-xl flex items-center">
            <img
              className="w-[170px]"
              src="https://i.postimg.cc/vTn05fH1/Screenshot-4-removebg-preview.png"
              alt="Logo"
            />{" "}
          </div>
          {/* Routes */}
          <div className="flex gap-6 items-center">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
