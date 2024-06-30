import Contact_US from "../Contact_US";
import Banner from "./Banner";
import Testimonials from "../Testimonials";
import { Helmet } from "react-helmet";
import How_It_Works from "../How_It_Works";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BloodBay || Donate Blood Easily</title>
      </Helmet>
      <Banner></Banner>
      <How_It_Works></How_It_Works>
      <Contact_US></Contact_US>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
