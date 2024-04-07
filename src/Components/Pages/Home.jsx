import Banner from "./Banner";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BloodBay || Donate Blood Easily</title>
      </Helmet>
      ;<Banner></Banner>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
