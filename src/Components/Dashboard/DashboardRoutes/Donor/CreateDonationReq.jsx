import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../AuthProvider";
import "react-time-picker/dist/TimePicker.css";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import useDistrictZilaData from "../../../../Hooks/useDistrictZilaData";

const CreateDonationReq = () => {
  const { user } = useContext(AuthContext);
  const { upazilas, districts } = useDistrictZilaData();
  // for select
  const [UpaZila, setUpaZila] = React.useState("");
  const [District, setDistrict] = React.useState("");
  const [blood, setBlood] = React.useState("");

  // date and time
  const [startDate, setStartDate] = useState(new Date());
  const donationDatetime = moment(startDate).format("LT");
  const [value, onChange] = useState(donationDatetime.split(" ")[0]);

  return (
    <div className="py-6 flex justify-center flex-col items-center">
      <header className="mb-8">
        <h3 className="text-center text-3xl text-capitalize ">
          Create donation <span className="text-[#FF0563]">Request!</span>
        </h3>
      </header>
      <main>
        <form className="flex flex-col gap-3 border p-4 rounded-md shadow-md">
          {/* Parent div */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Flexbox first column */}
            <div className="flex flex-col gap-3">
              <input
                className="border outline-none w-full md:w-72 p-3"
                type="text"
                placeholder="Name"
                readOnly
                defaultValue={user?.displayName}
              />
              <input
                className="border outline-none w-full md:w-72 p-3"
                type="text"
                placeholder="Recipient Name"
              />

              <input
                className="border outline-none w-full md:w-72 p-3"
                type="text"
                placeholder="Full Address"
              />
              <div>
                <select
                  id="districts"
                  name="district"
                  value={District}
                  onChange={(event) => setDistrict(event.target.value)}
                  className="bg-white w-full md:w-72 border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              {/* date & time picker */}
              <div className="">
                <div className="w-full">
                  <p>Donation Time </p>
                  <TimePicker
                    onChange={onChange}
                    value={value}
                    className={`w-full`}
                  />
                </div>
              </div>
            </div>
            {/* Flexbox second column */}
            <div className="flex flex-col gap-3">
              <input
                className="border outline-none w-full md:w-72 p-3"
                type="email"
                placeholder="Email"
                readOnly
                defaultValue={user?.email}
              />
              <input
                className="border outline-none w-full md:w-72 p-3"
                type="text"
                placeholder="Hospital Name"
              />

              <select
                id="blood"
                name="blood"
                value={blood}
                onChange={(event) => setBlood(event.target.value)}
                className="bg-white w-full md:w-72 border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled defaultValue>
                  Choose a blood group
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
              <div>
                <select
                  id="upazila"
                  name="upazila"
                  value={UpaZila}
                  onChange={(event) => setUpaZila(event.target.value)}
                  className="bg-white w-full md:w-72 border outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

              <div className="md:mt-1.5">
                <p>Donation Date </p>
                <div className="border w-full border-black py-[1.2px]">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <textarea
            name=""
            className="w-full border outline-none p-3"
            placeholder="Message"
          ></textarea>
          <button className="w-full bg-[#FF0563] text-white text-xl rounded-sm py-2">
            Request
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateDonationReq;
