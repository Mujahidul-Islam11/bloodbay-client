import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="py-6 flex justify-center items-center h-screen">
      <main className="flex justify-between">
        <section>
          <img
            src={user?.photoURL}
            className="size-32 object-cover rounded-full flex justify-center mx-auto"
            alt=""
          />
          <h3 className="text-4xl font-semibold my-6 text-center">
            {user?.displayName}
          </h3>
          <div className="flex gap-12">
            <div>
              <h3 className="text-xl mb-2">
                <b>Email:</b> {user?.email}
              </h3>
              <h3 className="text-xl mb-2">
                <b>Role:</b> Donor
              </h3>
              <h3 className="text-xl mb-2">
                <b>Upazila:</b> Rangunia
              </h3>
            </div>
            <div>
              <h3 className="text-xl mb-2">
                <b>Blood Group:</b> O+
              </h3>
              <h3 className="text-xl mb-2">
                <b>District:</b> Chattogram
              </h3>
            </div>
          </div>
        </section>
        <section>
        </section>
      </main>
    </div>
  );
};

export default Profile;
