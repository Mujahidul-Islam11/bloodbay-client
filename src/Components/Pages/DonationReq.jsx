import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Helmet } from "react-helmet";

const DonationReq = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Helmet>
        <title>BloodBay || Donation Request</title>
      </Helmet>
      <section className="h-screen flex flex-col items-center justify-center">
      <header>
        <h1 className="text-3xl text-center text-gray-800 lato-bold-700">
          Hello, <span className="text-[#FF0563]">{user?.displayName}</span>
        </h1>
      </header>
      <main className="">

      </main>
      </section>
    </div>
  );
};

export default DonationReq;
