/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";
import Button from "../Common/Button";


const Banner = () => {
    return (
        <section className="relative">
    <div className="relative z-[1] max-w-screen-xl mx-auto px-4 py-6 md:px-8">
        <div className="space-y-4 max-w-4xl mx-auto text-center lato-bold-500">
            <h2 className="text-3xl md:text-7xl">Be a Hero Donate Blood, Save Lives</h2>
            <p className="text-xl">Connect with donors in your area and make a difference in someone's life.</p>
            <div className="flex gap-6 justify-center">
            <NavLink to={'/signUp'}><Button className={'bg-[#FF0563] text-white'}>Join as a donor</Button></NavLink>
            <NavLink to={'/search'}><Button className={'bg-white text-[#FF0563]'}>Search donors</Button></NavLink>
            </div>
            <img src="https://i.postimg.cc/3wLBsMHv/bloodbay-banner-image.png" alt=""  className="mx-auto flex justify-center"/>
        </div>
    </div>
    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
</section>
    );
};

export default Banner;