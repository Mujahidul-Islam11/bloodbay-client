import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { AuthContext } from "../../AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
    swal("Logged Out", "Successfully logged out", "success");
  };

  const profileLinks = (
    <>
      <NavLink to={"/dashboard/profile"}>
        <button className="text-xl w-full py-2  hover:bg-[#c8cdd5]">
          Profile
        </button>
      </NavLink>{" "}
      <br />
      <NavLink to={"/dashboard/profile"}>
        <button className="text-xl w-full py-2 hover:bg-[#c8cdd5]">
          Dashboard
        </button>
      </NavLink>{" "}
      <br />
      {user ? (
        <button
          onClick={() => handleLogOut()}
          className="text-xl w-full py-2 text-red-500 hover:bg-red-500 hover:text-white"
        >
          Log Out
        </button>
      ) : (
        <NavLink to={"/logIn"}>
          <button className="text-xl w-full py-2 hover:bg-[#FF0563] hover:text-white">
            Log In
          </button>
        </NavLink>
      )}
    </>
  );

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "md:border-b-2 border-[#FF0563] text-[#FF0563]"
            : ""
        }
      >
        <button className="text-lg text-center hover:text-[#FF0563] font-semibold ">
          Home
        </button>
      </NavLink>{" "}
      <br />
      <NavLink
        to={"/donaReq"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "md:border-b-2 border-[#FF0563] text-[#FF0563]"
            : ""
        }
      >
        <button className="text-lg hover:text-[#FF0563] font-semibold  flex items-center gap-2">
          Donation Request
        </button>
      </NavLink>
      <NavLink
        to={"/blogs"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "md:border-b-2 border-[#FF0563] text-[#FF0563]"
            : ""
        }
      >
        <button className="text-lg text-center hover:text-[#FF0563] font-semibold  ">
          Blogs
        </button>
      </NavLink>{" "}
      <br />
      <NavLink
        to={"/payment"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "md:border-b-2 border-[#FF0563] text-[#FF0563]"
            : ""
        }
      >
        <button className="text-lg text-center hover:text-[#FF0563] font-semibold flex items-center gap-2">
          Payment
        </button>
      </NavLink>{" "}
      <br />
      {/* <button>Logout</button> */}
    </>
  );
  return (
    <div className="shadow-md fixed w-full z-50 bg-white">
      <div className="shadow-md py-2 px-2 md:px-0">
        <div className="flex justify-between max-w-screen-xl items-center mx-auto">
          {/* Logo */}
          <NavLink to={"/"}>
            <div className="text-xl flex items-center">
              <img
                className="w-[110px] md:w-[170px]"
                src="https://i.postimg.cc/vTn05fH1/Screenshot-4-removebg-preview.png"
                alt="Logo"
              />{" "}
            </div>
          </NavLink>
          {/* Routes */}
          <div className="hidden md:flex gap-6 items-center">{links}</div>
          {user ? (
            <div className="relative flex items-center gap-2">
              <img
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-12 cursor-pointer h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={user?.photoURL}
                alt="Bordered avatar"
              />
              {profileOpen ? (
                <div className="shadow absolute mt-44 right-0 mr-6 z-40 bg-[#E2E8F0] w-32 md:w-40 text-center">
                  {profileLinks}
                </div>
              ) : (
                ""
              )}
              <RiMenu2Fill
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="flex md:hidden text-xl font-semibold cursor-pointer "
              ></RiMenu2Fill>
            </div>
          ) : (
            <div className="flex gap-2 md:gap-6 items-center">
              <NavLink to={"/logIn"}>
                <button className="text-sm md:text-lg font-semibold">
                  Sign In
                </button>
              </NavLink>
              <NavLink to={"/signUp"}>
                <button className="text-sm md:text-lg  font-semibold bg-[#FF0563] hover:bg-red-500 px-3 py-1 rounded-md text-white">
                  Register
                </button>
              </NavLink>
              <RiMenu2Fill
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="flex md:hidden text-xl font-semibold cursor-pointer "
              ></RiMenu2Fill>
            </div>
          )}
        </div>
      </div>
      {/* Profile dropdown */}
      <div>
        {drawerOpen ? (
          <div className=" shadow md:hidden absolute right-0 px-2 mr-6 z-40 bg-[#E2E8F0] md:w-40">
            {links}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
