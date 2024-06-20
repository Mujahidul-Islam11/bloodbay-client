import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateDonationReq = () => {
  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  // for select
  const [UpaZila, setUpaZila] = React.useState("");
  const [District, setDistrict] = React.useState("");
  useEffect(() => {
    axios
      .get("/upazila.json")
      .then((res) => {
        setUpazilas(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/districts.json")
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="py-6 flex justify-center flex-col items-center">
      <header className="mb-8">
        <h3 className="text-center text-3xl text-capitalize ">
          Create donation <span className="text-[#FF0563]">Request!</span>
        </h3>
      </header>
      <main>
        <form>
          {/* Parent div */}
          <div className="flex gap-6">
            {/* Flexbox first column */}
            <div className="flex flex-col gap-6">
              <input
                className="border outline-none w-72 px-3 py-2"
                type="text"
                placeholder="Name"
              />
              <input
                className="border outline-none w-72 px-3 py-2"
                type="text"
                placeholder="Recipient Name"
              />
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
                  className="bg-white border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              </div>
            </div>
            {/* Flexbox second column */}
            <div className="flex flex-col gap-6">
              <input
                className="border outline-none w-72 px-3 py-2"
                type="text"
                placeholder="Name"
              />
              <input
                className="border outline-none w-72 px-3 py-2"
                type="text"
                placeholder="Recipient Name"
              />
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upazila
                </label>
                <select
                  id="upazila"
                  name="upazila"
                  value={UpaZila}
                  onChange={(event) => setUpaZila(event.target.value)}
                  className="bg-white border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateDonationReq;
