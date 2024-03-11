import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const LayOut = () => {
  return (
    <div>
      <div className="flex items-center">
        <h3
          style={{ borderRadius: "0 200px 0 0" }}
          className="w-1/2 bg-[#0087c1c2] text-6xl py-2 text-white "
        >
          Welcome! <i className="text-[#ff0533e4]">User Name</i>
        </h3>
      </div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
