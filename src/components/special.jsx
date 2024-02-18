import React from "react";
import food from "../assets/food1.avif";
const Special = () => {
  return (
    <section className="py-3 px-10 sm:px-6 bg-gray-300 bg-opacity-30 lg:px-6">
      <div className="container mx-auto py-[4vh]">
        <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 ">
          <img
            src={food}
            alt="banner img"
            className="h-[20rem] w-[24rem] rounded-3xl mx-auto justify-end"
          />
          <div className=" flex flex-col gap-5">
            <div className="md:text-7xl text-3xl font-bold text-[#191919] ">
              Best Food in <span className="text-[#f54748]">your</span> Home
              <span className="text-[#f54748]"> Town</span>
            </div>
            <span className="sm:font-semibold text-[#191919]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              atque reprehenderit doloribus quod sed numquam obcaecati!
              Consectetur consequatur ab, veniam natus ad minus labore.
              Doloribus, sed id. Dicta, officia quis.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
