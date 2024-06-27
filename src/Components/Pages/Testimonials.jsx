import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Common/Button";
/* eslint-disable react/no-unescaped-entities */
const Testimonials = () => {
  //testimonials data stored in the testimonials useSate
  const [testimonials, setTestimonials] = useState([]);
  // fetching the data from testimonials.json folder
  useEffect(() => {
    axios
      .get(`./testimonials.json`)
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <header className="">
      <h1 className="text-3xl md:text-4xl text-center text-gray-800 font-extrabold">
        Voices of Our Community
      </h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-10 items-center mx-8 md:mx-16 gap-6">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white px-3 py-6 mb-6 md:h-[375px] border rounded-md md:rounded-xl shadow-md text-center"
          >
            <img
              className="size-24 rounded-full mx-auto object-cover"
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
      </main>
    </div>
  );
};

export default Testimonials;
