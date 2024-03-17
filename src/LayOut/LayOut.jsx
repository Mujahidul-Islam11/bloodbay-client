import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { IoMdClose } from "react-icons/io";

const LayOut = () => {
  const {user} = useContext(AuthContext)
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(true);

  return (
    <div>
      {user && showWelcomeMsg && <div className="flex items-center justify-between">
        <h3
          style={{ borderRadius: "0 200px 0 0" }}
          className="md:w-1/2 bg-[#0087c1c2] text-xl md:text-5xl px-4 py-2 text-white "
        >
          Welcome! <i className="text-[#FF0563] lato-400">{user?.displayName}</i>
        </h3>
        <IoMdClose className="md:text-4xl cursor-pointer" onClick={()=> setShowWelcomeMsg(!showWelcomeMsg)}></IoMdClose>
      </div>}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
