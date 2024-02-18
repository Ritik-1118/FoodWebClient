import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import Swal from "sweetalert2";
import { TiThMenu } from "react-icons/ti";
import { LuUtensilsCrossed } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../store/auth";
import { UserCart } from "../store/card";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const { islogin, Logoutuser } = useAuth();
  const { itemcount } = UserCart();

  const Logout = async () => {
    const result = await Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#f58a47",
    });

    // If user confirms logout, proceed with logout
    if (result.isConfirmed) {
      try {
        Logoutuser();
        window.location.href = "/login";
      } catch (error) {
        console.error("Error logging out:", error);
        // Handle error
      }
    }
  };
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section>
      <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
        <div className="py-3 px-10 md:px-16 lg:px-6 container mx-auto ">
          <div className="flex  items-center justify-between">
            <NavLink to="/">
              <img src={logo} alt="" className="h-14 cursor-pointer" />
            </NavLink>{" "}
            <div className="lg:flex hidden gap-8 items-center">
              <NavLink
                to="/"
                className="flex flex-row items-center gap-2 text-[#191919] text-xl font-medium hover:text-blue-500"
              >
                <FaHome /> Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-[#191919] text-xl font-medium hover:text-blue-500"
              >
                Why us?
              </NavLink>
              <NavLink
                to="/menu"
                className="text-[#191919] text-xl font-medium hover:text-blue-500"
              >
                Our Menu
              </NavLink>
              <NavLink
                to="/cart"
                className="text-[#191919] flex flex-row items-center gap-2 text-xl font-medium hover:text-blue-500 "
              >
                <FaShoppingCart /> Cart
                {itemcount > 0 && (
                  <span className="text-white bg-cyan-500 -translate-x-5 -translate-y-3 rounded-full text-xs  px-1 m-auto font-semibold flex justify-start">
                    {itemcount}
                  </span>
                )}
              </NavLink>
              {islogin ? (
                <>
                  <div className=" items-center flex flex-row gap-12">
                    {" "}
                    <NavLink to="/profile">
                      <button className="flex flex-row shadow-2xl  bg-white/5 shadow-black items-center gap-2 text-[#f58a47] focus:outline-none rounded-full active:scale-90  transition duration-100 transform hover:shadow-xl  px-6 py-2 text-xl font-medium">
                        <CgProfile /> Profile
                      </button>
                    </NavLink>
                    <button
                      className="bg-[#f58a47] focus:outline-none rounded-sm active:scale-90 text-white transition duration-100 transform hover:shadow-xl hover:shadow-black/30 shadow-lg shadow-black/35 px-8 py-2 text-xl font-medium"
                      onClick={Logout}
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <NavLink to="/login">
                  {" "}
                  <button className="bg-[#f58a47] focus:outline-none rounded-sm active:scale-90 text-white transition duration-100 transform hover:shadow-xl shadow-md px-8 py-2 text-xl font-medium">
                    Login
                  </button>
                </NavLink>
              )}{" "}
            </div>
            <div className="block lg:hidden z-40" onClick={handleNav}>
              {nav ? (
                <>
                  <LuUtensilsCrossed
                    size={20}
                    className="text-[#191919] cursor-pointer"
                  />
                </>
              ) : (
                <>
                  {" "}
                  <TiThMenu
                    size={20}
                    className="text-blue-500 cursor-pointer"
                  />
                </>
              )}
            </div>
            <div
              className={`absolute w-1/2 lg:hidden sm:w-2/5 h-screen py-2 px-4 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/90 top-0 duration-150 ${
                nav ? "right-0" : "right-[-100%]"
              } pt-24`}
            >
              <div className="flex flex-col gap-8 items-center">
                <NavLink
                  to="/"
                  className="flex flex-row items-center gap-2 text-[#191919] text-sm font-medium hover:text-blue-500"
                >
                  <FaHome /> Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-[#191919] text-sm font-medium hover:text-blue-500"
                >
                  Why us?
                </NavLink>
                <NavLink
                  to="/menu"
                  className="text-[#191919] text-sm font-medium hover:text-blue-500"
                >
                  Our Menu
                </NavLink>
                <NavLink
                  to="/cart"
                  className="text-[#191919] flex flex-row items-center gap-2 text-xl font-medium hover:text-blue-500 "
                >
                  <FaShoppingCart /> Cart
                  {itemcount > 0 && (
                    <span className="text-white bg-cyan-500 -translate-x-5 -translate-y-3 rounded-full text-xs px-1 m-auto font-semibold flex justify-start">
                      {itemcount}
                    </span>
                  )}
                </NavLink>
                {islogin ? (
                  <>
                    <div className=" items-center flex flex-col gap-12">
                      {" "}
                      <NavLink to="/profile">
                        <button className="flex flex-row shadow-2xl  bg-white/5 shadow-black items-center gap-2 text-[#f58a47] focus:outline-none rounded-full active:scale-90  transition duration-100 transform hover:shadow-xl  px-6 py-2 text-xl font-medium">
                          <CgProfile /> Profile
                        </button>
                      </NavLink>
                      <button
                        className="bg-[#f58a47] focus:outline-none rounded-sm active:scale-90 text-white transition duration-100 transform hover:shadow-xl hover:shadow-black/30 shadow-lg shadow-black/35 px-8 py-2 text-xl font-medium"
                        onClick={Logout}
                      >
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <NavLink to="/login">
                    {" "}
                    <button className="bg-[#f58a47] focus:outline-none rounded-sm active:scale-90 text-white transition duration-100 transform hover:shadow-xl shadow-md px-8 py-2 text-xl font-medium">
                      Login
                    </button>
                  </NavLink>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
