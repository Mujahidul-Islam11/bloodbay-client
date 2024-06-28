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
      <section className="py-28 px-14">
        <header>
          <h1 className="text-3xl text-center text-gray-800 lato-bold-700">
            Welcome back, <span className="text-[#FF0563]">Donor!</span>
          </h1>
        </header>
        <main className="my-12 px-6">
          <div className="overflow-x-auto border rounded-md">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-base font-semibold">Requester</th>
                  <th className="text-base font-semibold">Location</th>
                  <th className="text-base font-semibold">Donation Date</th>
                  <th className="text-base font-semibold">Donation Time</th>
                  <th className="text-base font-semibold">Status</th>
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
                        <div className="text-base text-gray-800">
                          Kazi Newaz
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="text-base text-gray-800">
                      Rangunia, Chattogram
                    </h3>
                  </td>
                  <td>
                    <h3 className="text-base text-gray-800">6/22/2024</h3>
                  </td>
                  <td>
                    <h3 className="text-base text-gray-800">6:00 PM</h3>
                  </td>
                  <td>
                    <h2 className="bg-yellow-500 text-white text-center p-2">
                      Pending
                    </h2>
                  </td>
                  <th>
                    <NavLink to={'/donationDetails'}>
                      <button className="btn btn-sm bg-green-700 text-white hover:bg-green-600 active:bg-green-600">
                        View
                      </button>
                    </NavLink>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </div>
  );
};

export default DonationReq;
