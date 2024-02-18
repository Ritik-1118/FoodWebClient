import React from "react";
import { NavLink } from "react-router-dom";
import ShopItems from "../pages/menu/menu";
const Header = () => {
  return (
    <section className="py-3 px-10 sm:px-6 lg:px-6">
      <div className="container mx-auto py-[14vh]">
        <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
          <div className="lg:w-[32rem] w-full flex flex-col space-y-6">
            <div className="text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl">
              We are <span className="text-[#f54748]"> Seroius </span>
              For our <span className="text-[#f54748]">Food</span> &{" "}
              <span className="text-[#Fdc55e]">Delivery</span>
            </div>
            <div className="lg:text-xl text-[#191919] md:text-lg text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur perspiciatis, reiciendis nobis dolorem accusamus,
              laborum sed eligendi eaque praesentium voluptatem iusto provident
              numquam quidem, placeat repellat? Fugiat ad nostrum quam!
            </div>
            <div className="items-center">
              <NavLink to="/menu">
                <button className="bg-[#f58a47] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                  explore now
                </button>
              </NavLink>
            </div>
          </div>
          <img
            src={'/banner1.png'}
            alt="banner img"
            className="h-[28rem] mx-auto justify-end"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
