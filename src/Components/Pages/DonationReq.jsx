import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import {Helmet} from "react-helmet"

const DonationReq = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-16">
      <Helmet>
        <title>BloodBay || Donation Request</title>
      </Helmet>
      <h1 className="text-4xl text-center text-gray-800 lato-bold-700">
        Hello, <span className="text-[#FF0563]">{user?.displayName}</span>
      </h1>
    </div>
  );
};

export default DonationReq;
