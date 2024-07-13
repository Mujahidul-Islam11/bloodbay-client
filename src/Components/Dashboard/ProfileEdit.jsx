import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import useDistrictZilaData from "../../Hooks/useDistrictZilaData";

const ProfileEdit = () => {
  const { user } = useContext(AuthContext);
  const { upazilas, districts } = useDistrictZilaData();
  // for select
  const [UpaZila, setUpaZila] = React.useState("");
  const [District, setDistrict] = React.useState("");
  const [showName, setShowName] = useState({});
  const [blood, setBlood] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const upazila = UpaZila;
    const district = District;
    const bloodGroup = blood;
    const image = form.image.files[0];
    const imageFile = { image: image };
  };
  return (
    <div className="py-6 flex flex-col justify-center items-center lg:h-screen">
      <header className="">
        <h1 className="text-3xl text-center text-gray-800 lato-bold-700">
          Update your <span className="text-[#FF0563]">Profile!</span>
        </h1>
      </header>
      <main className="w-3/4 my-12 space-y-6">
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
          className="p-6 border bg-[#FF0563] mx-auto"
        >
          <label
            htmlFor="file_input"
            className="text-center py-3 border bg-white flex justify-center mb-6 mx-auto w-1/2"
          >
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
              className="border hover:border-black outline-none w-full p-3"
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
              className="bg-white w-full border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="bg-white w-full border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="bg-white w-full border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </form>
      </main>
    </div>
  );
};

export default ProfileEdit;
