import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="py-6 flex justify-center items-center lg:h-screen">
      <main className="flex justify-between">
        <section className="border rounded-lg">
          <div style={{background: "url(https://i.ibb.co/Nyxt5Dd/photo-1531913764164-f85c52e6e654.jpg)"}} className="h-28 md:h-40 rounded-t-lg object-cover"></div>
          <div className="px-8 py-2">
            <img
              src={user?.photoURL}
              className="size-24 object-cover rounded-full flex justify-center mx-auto relative -mt-14 border-4 border-white"
              alt=""
            />
            <button className="text-center rounded-full bg-blue-500 text-white px-3 py-1 font-semibold mx-auto flex justify-center my-2">
              Donor
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto px-4 md:px-8 pb-4 md:pb-8 gap-4">
            <div>
            <label className="block mb-2 text-sm text-gray-700 dark:text-white">
              Name
            </label>
            <h3 className="font-bold text-base">{user?.displayName}</h3>
            </div>
            <div>
            <label className="block mb-2 text-sm text-gray-700 dark:text-white">
              Email
            </label>
            <h3 className="font-bold text-base">{user?.email}</h3>
            </div>
            <div>
            <label className="block mb-2 text-sm text-gray-700 dark:text-white">
              Blood
            </label>
            <h3 className="font-bold text-base">O+</h3>
            </div>
            <div>
            <label className="block mb-2 text-sm text-gray-700 dark:text-white">
              District
            </label>
            <h3 className="font-bold text-base">Chattogram</h3>
            </div>
            <div>
            <label className="block mb-2 text-sm text-gray-700 dark:text-white">
              Upazila
            </label>
            <h3 className="font-bold text-base">Rangunia</h3>
            </div>
            <NavLink to={'/dashboard/edit'}>
            <button className="bg-[#FF0563] text-white px-2 py-1 mt-3 rounded-sm">Update profile</button>
            </NavLink>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default Profile;
