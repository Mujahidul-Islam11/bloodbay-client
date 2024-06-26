/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Button from "../Common/Button";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import swal from "sweetalert";
import useDistrictZilaData from "../../Hooks/useDistrictZilaData";

const Register = () => {
  const { createUser, upProfile, logOut, user } = useContext(AuthContext);
  const {upazilas, districts} = useDistrictZilaData();
  // for select
  const [UpaZila, setUpaZila] = React.useState("");
  const [District, setDistrict] = React.useState("");
  const [blood, setBlood] = React.useState("");

  // for image hosting
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const naviGate = useNavigate();

  const handleSubmit = async (e) => {
    // accessing form data
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const confirmPass = form.confirmPass.value;
    const upazila = UpaZila;
    const district = District;
    const bloodGroup = blood;
    const image = form.image.files[0];
    const imageFile = { image: image };

    // imgbb post method for getting image url

    const imageRes = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    // the response url
    const imageUrl = imageRes.data.data.display_url;
    const userData = {
      name,
      email,
      pass,
      confirmPass,
      upazila,
      district,
      bloodGroup,
      image: imageUrl,
      role: "donor",
      status: "active",
    };
    console.log(userData);
    // auth:- creating user
    if (pass !== confirmPass) {
      swal(
        "Wrong Password!",
        "Type the correct password in confirm password field",
        "error"
      );
    } else {
      createUser(email, pass)
      .then((result) => {
          console.log(result.user)
          upProfile(name, imageUrl).then((result) => {
            console.log(result.user);
          });
          naviGate("/logIn");
          swal("Good Job!", "Successfully created account", "success");
          logOut()
            .then()
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
        console.log(user)
    }
  };


  return (
    <div className="md:flex h-screen">
      <img
        src="https://i.ibb.co/z6SHmwZ/premium-photo-1661769338046-e07bc03ff32a.jpg"
        alt=""
        className="md:w-1/2 object-cover"
      />
      <form
        onSubmit={handleSubmit}
        className="px-20 py-6 rounded-sm md:w-1/2 border md:border-l md:min-h-screen"
      >
        <h2 className="text-2xl -mb-10 md:text-4xl lato-bold-700 text-center">
          Register<span className="text-[#FF0563]">!</span>
        </h2>
        <div className="my-16">
          <div className="flex gap-6">
            <div className="mb-4 w-6/12">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your name"
                required
              />
            </div>
            <div className="mb-4 w-6/12">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="mb-5 w-6/12">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="pass"
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type a strong password"
                required
              />
            </div>
            <div className="mb-5 w-6/12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPass"
                className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Retype your password"
                required
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="mb-5 w-6/12">
              <div>
                <label
                  htmlFor="upazila"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upazila
                </label>
                <select
                  id="upazila"
                  name="upaZila"
                  value={UpaZila}
                  onChange={(event) => setUpaZila(event.target.value)}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled defaultValue>
                    Choose an Upazila
                  </option>
                  {/* Mapping over Upazila data */}
                  {upazilas.map((upa) => (
                    <option key={upa.id} value={upa.name}>
                      {upa.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-5 w-6/12">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  District
                </label>
                <select
                  id="districts"
                  name="district"
                  value={District}
                  onChange={(event) => setDistrict(event.target.value)}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled defaultValue>
                    Choose a District
                  </option>
                  {districts.map((upa) => (
                    <option key={upa.id} value={upa.name}>
                      {upa.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="mb-5 w-6/12">
              <div>
                <label
                  htmlFor="blood"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Blood Group
                </label>
                <select
                  id="blood"
                  name="blood"
                  value={blood}
                  onChange={(event) => setBlood(event.target.value)}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled defaultValue>
                    Choose your blood group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div className="mb-5 w-6/12">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload image
                </label>
                <input
                  className="block w-full py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 outline-none"
                  id="file_input"
                  type="file"
                  name="image"
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="text-white bg-[#FF0563] font-medium shadow-none rounded-lg text-[18px] w-full px-5 py-2.5 text-center"
          >
            Register
          </Button>
        </div>
        <h2 className="-mt-12 text-center">
          Already have an account? please{" "}
          <NavLink to={`/logIn`} className={"text-[#FF0563] font-semibold"}>
            Log In!
          </NavLink>
        </h2>
      </form>
    </div>
  );
};

export default Register;
