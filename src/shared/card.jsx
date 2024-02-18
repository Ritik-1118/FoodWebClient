import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineStarRate } from "react-icons/md";
import { useAuth } from "../store/auth";
import { UserCart } from "../store/card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ food }) => {
  const { addToCart } = UserCart();
  if (!food) {
    return <p>Loading...</p>;
  }
  const handleAddToCart = (currElem) => {
    toast("Cart Added Succesfully");
    addToCart(currElem);
  };
  return (
    <div className="flex flex-wrap    justify-center ">
      <ToastContainer />
      {food.map((currElem, index) => {
        const { title, rating, price, foodImg, description, _id } = currElem;
        return (
          <div
            key={index}
            className="flex flex-col mt-5  cursor-pointer w-[20rem]  mx-3  rounded-lg bg-cyan-100/40 shadow-xl transition-all shadow-black/50 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          >
            <NavLink to={`/cart/${_id}`}>
              {" "}
              <img
                src={foodImg[0]}
                alt={title}
                className="h-[14rem] w-full rounded-t-lg"
              />{" "}
            </NavLink>

            <div className="py-9 flex flex-col p-2 cursor-none">
              <div className="text-2xl flex font-extrabold justify-between mx-3 my-3">
                <span>{title}</span>
                <span className="flex items-center justify-center">
                  {rating}
                  <MdOutlineStarRate className="text-sm mb-2 text-[#0b7c90]" />
                </span>
              </div>
              <span className="mx-3">{description}</span>
              <div className="flex flex-row gap-9 justify-around">
                <span className="flex flex-row gap-2 items-center">
                  &#36;{price} USD
                </span>
                <span>
                  <button
                    className="btn text-[#191919] font-semibold"
                    onClick={() => handleAddToCart(currElem)}
                  >
                    <span className="btn-text-one">Add to cart</span>
                    <span className="btn-text-two">Cart added</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
