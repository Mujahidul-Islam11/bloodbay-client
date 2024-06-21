import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const DashHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      {/* Welcome msg section */}
      <header className="border-b lg:bg-gradient-to-r from-[#FF0563] to-[#ff05659a] py-3 px-5">
        <h3 className="text-2xl md:text-3xl font-semibold lg:text-white">
          Welcome back,{" "}
          <span className="text-gray-800">{user?.displayName}</span>
        </h3>
      </header>
      {/* Components contents */}
      <main className="my-12 px-6 ">
        <div className="overflow-x-auto border rounded-md">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DashHome;
