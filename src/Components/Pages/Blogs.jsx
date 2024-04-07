import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Common/Button";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("/blog.json")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="mx-8 md:mx-16 my-12">
      <h2 className="text-3xl md:text-6xl mb-3 lato-bold-700 text-gray-800">
        Read our latest blogs
      </h2>
      <p className="text-xl text-gray-500">
        Discover insights on blood donation, health, and community <br />{" "}
        impact. Stay informed with our latest content!
      </p>
      {/* blogs section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8 md:my-10">
        {blogs?.map((blog) => (
          <div key={blog?.id}>
            <div className="border">
              <img
                src={blog?.image}
                alt=""
                className="w-full h-[203.98px]"
              />
              <div className="px-3 pb-4">
              <h1 className="text-2xl text-gray-800 lato-bold-600 my-3">
                {blog?.title}
              </h1>
              <p className="text-gray-500">{blog?.content.slice(0, 200)} <Button className={'text-white text-sm'}>Read More...</Button> </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
