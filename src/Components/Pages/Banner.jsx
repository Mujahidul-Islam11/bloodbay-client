/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";
import Button from "../Common/Button";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="relative z-[1] max-w-screen-xl mx-auto px-4 py-14 md:px-8">
        <div className="space-y-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-gray-800 lato-bold-700">
            Be a Hero!
          </h2>
          <h2 className="text-3xl md:text-4xl text-gray-800 lato-bold-700">
          Donate Blood, Save Lives
          </h2>
          <p className="text-xl">
            Connect with donors in your area and make a difference in someone's
            life.
          </p>
          <div className="flex gap-6 justify-center">
            <NavLink to={"/signUp"}>
              <Button className={"bg-[#FF0563] font-normal text-white border shadow-none px-3 py-2"}>
                Join as a Donor
              </Button>
            </NavLink>
            <NavLink to={"/search"}>
              <button
                className={
                  "bg-white font-normal py-2 px-3 md:px-4 rounded text-black border"
                }
              >
                Find a Donor
              </button>
              
            </NavLink>
          </div>
          <img
            src="https://i.postimg.cc/3wLBsMHv/bloodbay-banner-image.png"
            alt=""
            className="mx-auto flex justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
