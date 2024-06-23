import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="py-6 flex justify-center items-center h-screen">
      <main className="flex justify-between">
        <section className="border">
          <div>

          </div>
          <div className="px-8">
          <img
            src={user?.photoURL}
            className="size-24 object-cover rounded-full flex justify-center mx-auto"
            alt=""
          />
          </div>
          <div>

          </div>
        </section>
        <section>
        </section>
      </main>
    </div>
  );
};

export default Profile;
