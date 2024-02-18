import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../store/auth";
import Loader from "../../shared/loader.";
const Register = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { storetokeinLs, islogin } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://foodhut-d4sp.onrender.com/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        const data = await response.json();
        storetokeinLs(data.token);
        setuser({ username: "", email: "", phone: "", password: "" });
        window.location.href = "/";
      } else {
        const data = await response.json();
        toast.error(data.message || "An error occurred");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 1 second, hide the loader
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading || islogin) {
    return <Loader />; // Show loader if still loading or if user is logged in
  }
  return (
    <section className="py-3 px-1 logbg sm:px-6 bg-opacity-30 flex h-screen items-center m-auto justify-center ">
      <div className="container mx-auto justify-center flex items-center ">
        {" "}
        <ToastContainer />
        <div className=" w-[20rem] md:w-2/5 glassEffect md:p-5 justify-center mt-16 items-center text-white  focus:ring-4 focus:outline-none font-medium rounded-3xl text-base  ">
          <div className=" my-4 pb-4 text-center text-3xl  text-white/80">
            Register
          </div>
          <form
            method="post"
            onSubmit={handleSubmit}
            className="mx-12 md:mx-22"
          >
            {" "}
            <div className="relative z-0 w-full md:p-1.5 mb-6 group">
              <input
                type="text"
                name="username"
                id="username"
                className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-text-white appearance-none  dark:border-text-white dark:focus:border-text-white focus:outline-none focus:ring-0 focus:border-text-white peer"
                placeholder=" "
                value={user.username}
                onChange={handleInput}
                required
              />
              <label
                htmlFor="Username"
                className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-text-white dark:text-text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-text-white peer-focus:dark:text-text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Name
              </label>
            </div>
            <div className="relative z-0 w-full md:p-1.5 mb-6 group">
              <input
                type="text"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-text-white appearance-none  dark:border-text-white dark:focus:border-text-white focus:outline-none focus:ring-0 focus:border-text-white peer"
                placeholder=" "
                value={user.email}
                onChange={handleInput}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-text-white dark:text-text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-text-white peer-focus:dark:text-text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full md:p-1.5 mb-6 group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-white bg-transparent border-0 border-b-2 border-text-white appearance-none  dark:border-text-white dark:focus:border-text-white focus:outline-none focus:ring-0 focus:border-text-white peer"
                placeholder=" "
                value={user.password}
                onChange={handleInput}
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-text-white dark:text-text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-text-white peer-focus:dark:text-text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className=" text-center pb-4">
              <button className="btnSub px-10 text-lg">Submit </button>
            </div>
          </form>
          <div className=" text-center md:text-center justify-center md:justify-center  flex ">
            <div className="  w-2/3 md:w-2/3 md:flex md:justify-center ">
              <h1>
                <div className="text-white text-xl ">
                  Already have an account ?{" "}
                  <NavLink to="/login" className="text-gray-800 ">
                    Login
                  </NavLink>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
