import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

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
      <main className="my-14 px-6">
        <div className="overflow-x-auto border rounded-md">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Recipient Name</th>
                <th>Recipient Location</th>
                <th>Donation Date</th>
                <th>Donation Time</th>
                <th>Donation Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">Kazi Newaz</div>
                    </div>
                  </div>
                </td>
                <td>
                  <h3>Rangunia, Chattogram</h3>
                </td>
                <td>
                    6/22/2024
                </td>
                <td>
                    6:00 PM
                </td>
                <td>
                  <h2 className="bg-green-600 text-white text-center py-2">
                    In-Progress
                  </h2>
                </td>
                <th>
                  <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-400">Edit</button>
                </th>
                <th>
                  <button className="btn btn-sm bg-red-600 text-white hover:bg-red-400">Remove</button>
                </th>
                <th>
                  <button className="btn btn-sm bg-green-600 text-white hover:bg-green-400">View</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <NavLink to={"/dashboard/myReq"}>
            <button className="btn btn-md flex justify-center mx-auto my-8 px-6 bg-[#FF0563] text-white  hover:bg-[#ff5174]">View All Requests</button>
        </NavLink>
      </main>
      </section>
    </div>
  );
};

export default DonationReq;
