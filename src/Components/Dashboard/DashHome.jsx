import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";


const DashHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="">
            {/* Welcome msg section */}
            <header className="border-b lg:bg-gradient-to-r from-[#FF0563] to-[#ff05659a] py-3 px-5">
                <h3 className="text-2xl md:text-3xl font-semibold lg:text-white">Welcome back, <span className="text-gray-800">{user?.displayName}</span></h3>
            </header>
            {/* Components contents */}
            <main>
                
            </main>
        </div>
    );
};

export default DashHome;