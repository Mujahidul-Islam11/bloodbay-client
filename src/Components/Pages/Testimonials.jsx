import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Common/Button";
/* eslint-disable react/no-unescaped-entities */
const Testimonials = () => {
  //testimonials data stored in the testimonials useSate
  const [testimonials, setTestimonials] = useState([]);
  const [sliceBtn, setSliceBtn] = useState(3);
  // fetching the data from testimonials.json folder
  useEffect(() => {
    axios
      .get(`../../../public/testimonials.json`)
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="my-28">
      <h1 className="text-3xl md:text-5xl text-center text-gray-800 lato-bold-700 mb-16">
        See what our trusted users say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-10 items-center mx-8 md:mx-16 gap-6">
        {testimonials?.slice(0, sliceBtn).map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white px-3 py-6 mb-6 md:h-[375px] rounded-md md:rounded-xl shadow-md text-center"
          >
            <img
              className="w-24 rounded-full mx-auto"
              src={testimonial?.imageUrl}
              alt="donarImage"
            />
            <div></div>
            <div>
              <h2 className="text-xl my-8">“{testimonial?.quote}”</h2>
              <h2 className="text-xl md:text-xl lato-bold-600 mb-2">
                {testimonial?.name}
              </h2>
              <h2 className="">{testimonial?.email}</h2>
            </div>
          </div>
        ))}
      </div>
      {
        sliceBtn == 3 ? <Button
        onClick={() => setSliceBtn(20)}
        className={"flex justify-center mx-auto text-white"}
      >
        Load More
      </Button> : <Button
        onClick={() => setSliceBtn(3)}
        className={"flex justify-center mx-auto text-white"}
      >
        Load Less
      </Button>
      }
    </div>
  );
};

export default Testimonials;
