import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import swal from "sweetalert";


const Login = () => {
    const naviGate = useNavigate()
    const {logIn} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        logIn(email, pass)
        .then(result => {
            console.log(result.user)
            naviGate("/")
            swal("Good Job!", "Successfully logged in", "success")
        })
        .catch(error=>{
            console.error(error)
        })
      };

    return (
        <div className="bg-[#F1BBD5] w-full min-h-screen items-center flex justify-center">
      <form onSubmit={handleSubmit} className="px-4 border-l md:w-1/3 shadow-2xl bg-white py-10 rounded-md">
        <h2 className="text-2xl md:text-4xl lato-bold-700 text-center">Login<span className="text-[#FF0563]">!</span></h2>
        <div className="">
          <div className="">
            <div className="mb-4 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="pass"
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your password"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="text-white font-medium rounded-lg text-[18px] w-full px-5 py-2.5 text-center"
          >
            Log In
          </Button>
        </div>
        <h2 className="text-center mt-6">
          Already have an account? please{" "}
          <NavLink to={`/signUp`} className={"text-[#FF0563] font-semibold"}>
            Register!
          </NavLink>
        </h2>
      </form>
        </div>
    );
};

export default Login;