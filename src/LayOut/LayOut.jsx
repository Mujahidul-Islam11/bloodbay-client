import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const LayOut = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
