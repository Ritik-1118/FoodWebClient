import React, { useState, useEffect } from "react";
import Cococ from "../assets/coco-cola.avif";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Card from "../shared/card";
import { useAuth } from "../store/auth";
import Loader from "../shared/loader.";

const Recommended = () => {
  const { food } = useAuth();
  const recommendedFood = food.slice(0, 4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // After 2 seconds, set loading to false
    }, 2000);

    return () => clearTimeout(timeout);
  }, []); // Empty dependency array to run effect only once

  return (
    <section className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
      <div className="container mx-auto py-[2vh]">
        <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
          Recommend <span className="text-[#cf4d4d]">Foods</span>{" "}
        </div>
        {loading ? (
          <><Loader/></>
        ) : (
          <div className="py-6 flex flex-wrap gap-7  m-auto justify-center">
            <Card food={recommendedFood} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Recommended;
