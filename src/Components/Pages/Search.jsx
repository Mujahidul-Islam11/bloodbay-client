import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import Button from "../Common/Button";


const Search = () => {
  const [UpaZila, setUpaZila] = React.useState("");
  const [District, setDistrict] = React.useState("");
  const [blood, setBlood] = React.useState("");
  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [donarData, setDonarData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
  useEffect(() => {
    axios
      .get("/donarData.json")
      .then((res) => {
        setDonarData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleSearch = () =>{
      const data = donarData.filter(item => item.upazila === UpaZila || item.district === District);
      setFilteredData(data)
  }
    return (
        <div className="">
            <div className="md:flex justify-center items-center h-screen">
            <div className="flex">
              <div>
                <select
                  id="upazilla"
                  name="upaZilla"
                  value={UpaZila}
                  onChange={(event) => setUpaZila(event.target.value)}
                  className="bg-gray-50 border cursor-pointer outline-none rounded-r-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Rangunia" defaultValue>
                    Rangunia
                  </option>
                  {/* Mapping over Upazilla data */}
                  {upazilas.map((upa) => (
                    <option key={upa.id} value={upa.name}>
                      {upa.name}
                    </option>
                  ))}
                </select>
            </div>
              <div>
                <select
                  id="districts"
                  name="district"
                  value={District}
                  onChange={(event) => setDistrict(event.target.value)}
                  className="bg-gray-50 border outline-none cursor-pointer rounded-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Chattogram" defaultValue>
                    Chattogram
                  </option>
                  {districts.map((upa) => (
                    <option key={upa.id} value={upa.name}>
                      {upa.name}
                    </option>
                  ))}
                </select>
            </div>
            <div>
                <select
                  id="blood"
                  name="blood"
                  value={blood}
                  onChange={(event) => setBlood(event.target.value)}
                  className="bg-gray-50 border outline-none rounded-r-lg md:rounded-none md:w-24 cursor-pointer border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled defaultValue>
                    Blood group
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
          <Button onClick={handleSearch} className="px-4 py-2 bg-[#FF0563] shadow-none mt-6 md:mt-0 text-white text-sm rounded-lg md:rounded-r-lg">Search</Button>
        </div>
        <SearchCard filteredDatas={filteredData}></SearchCard>
        </div>
    );
};

export default Search;