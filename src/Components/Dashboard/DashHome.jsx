import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { NavLink } from "react-router-dom";

const DashHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-screen">
      {/* Welcome msg section */}
      <header className="border-b lg:bg-gradient-to-r from-[#FF0563] to-[#ff05659a] py-3 px-5">
        <h3 className="text-2xl md:text-3xl font-semibold lg:text-white">
          Welcome back,{" "}
          <span className="text-gray-800">{user?.displayName}</span>
        </h3>
      </header>
      {/* Components contents */}
      <main className="my-12 px-6">
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
                    In-Progress
                </td>
                <th>
                  <button className="btn btn-sm bg-green-600 text-white hover:bg-green-400">Done</button>
                </th>
                <th>
                  <button className="btn btn-sm bg-red-600 text-white hover:bg-red-400">Cancel</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <NavLink to={"/dashboard/myReq"}>
            <button className="btn btn-md flex justify-center mx-auto my-8 px-6 bg-[#FF0563] text-white  hover:bg-[#ff5174]">View All Requests</button>
        </NavLink>
      </main>
    </div>
  );
};

export default DashHome;
