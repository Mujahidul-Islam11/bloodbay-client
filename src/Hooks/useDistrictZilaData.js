import axios from "axios";
import { useEffect, useState } from "react";

const useDistrictZilaData = () =>{
    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);
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
    return {upazilas, districts}
}

export default useDistrictZilaData