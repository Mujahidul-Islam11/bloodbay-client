import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="py-6 flex justify-center items-center lg:h-screen">
      <main className="flex justify-between">
        <section className="border rounded-lg">
          <div style={{background: "url(https://i.ibb.co/Nyxt5Dd/photo-1531913764164-f85c52e6e654.jpg)"}} className="lg:w-[600px] h-28 md:h-40 rounded-t-lg object-cover"></div>
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
          <div className="flex flex-col justify-center px-4 md:px-8 pb-2 md:pb-8 space-y-5 my-3">
          <div className="flex flex-col md:flex-row gap-3 md:gap-7 ">
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
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-16">
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
          </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default Profile;
