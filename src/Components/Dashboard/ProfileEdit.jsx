import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import useDistrictZilaData from "../../Hooks/useDistrictZilaData";
import axios from "axios";

const ProfileEdit = () => {
  const { user } = useContext(AuthContext);
  const { upazilas, districts } = useDistrictZilaData();
  // for select
  const [UpaZila, setUpaZila] = React.useState("");
  const [District, setDistrict] = React.useState("");
  const [showName, setShowName] = useState({});
  const [blood, setBlood] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // form data
    const form = e.target;
    const name = form.name.value;
    const upazila = UpaZila;
    const district = District;
    const bloodGroup = blood;
    const image = form.image.files[0];
    const imageFile = { image: image };

    // imgbb post method for getting image
    const imageRes = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // the response url
    const imageUrl = imageRes.data.data.display_url;

    console.log(name, imageUrl, upazila, district, bloodGroup);
  };
  return (
    <div className="py-6 flex flex-col justify-center items-center lg:h-screen">
      <header className="">
        <h1 className="text-3xl text-center text-gray-800 lato-bold-700 mt-6">
          Update your <span className="text-[#FF0563]">Profile!</span>
        </h1>
      </header>
      <main className="w-1/2 my-6 space-y-6">
        <div className="flex flex-col items-center py-2">
          <img
            src={user?.photoURL}
            alt=""
            className="size-24 object-cover rounded-full"
          />
          <h3 className="text-lg font-semibold">{user?.displayName}</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-6 border shadow-md rounded-md mx-auto"
        >
          <label
            htmlFor="file_input"
            className="md:w-1/3 text-center cursor-pointer py-4 border border-black rounded-md shadow-md bg-white flex justify-center items-center gap-2 mb-6 mx-auto "
          >
            <div className="text-black text-xl">
            <ion-icon name="cloud-upload-outline"></ion-icon>
            </div>
            <h3 className="">
              {showName.name ? showName.name : "Choose a file"}
            </h3>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName(imageFile);
              }
            }}
            className="hidden"
            type="file"
            name="image"
            id="file_input"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="border hover:border-black w-full p-3"
              type="text"
              defaultValue={user?.displayName}
              name="name"
              placeholder="Type your name"
              required
            />

            <select
              id="blood"
              name="blood"
              value={blood}
              onChange={(event) => setBlood(event.target.value)}
              className="bg-white w-full border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled defaultValue>
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
            <select
              id="districts"
              name="district"
              value={District}
              onChange={(event) => setDistrict(event.target.value)}
              className="bg-white w-full border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled defaultValue>
                Choose a District
              </option>
              {districts?.map((district) => (
                <option key={district?.id} value={district?.name}>
                  {district?.name}
                </option>
              ))}
            </select>

            <select
              id="upazila"
              name="upazila"
              value={UpaZila}
              onChange={(event) => setUpaZila(event.target.value)}
              className="bg-white w-full border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled defaultValue>
                Choose a Upazila
              </option>
              {upazilas?.map((upazila) => (
                <option key={upazila?.id} value={upazila?.name}>
                  {upazila?.name}
                </option>
              ))}
            </select>
          </div>
          <button className="w-full bg-[#FF0563] text-white text-xl rounded-sm py-2 mt-8">
            Update
          </button>
        </form>
      </main>
    </div>
  );
};

export default ProfileEdit;
