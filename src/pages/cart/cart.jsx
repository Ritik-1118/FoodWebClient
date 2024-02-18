import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { RiSubtractLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import { UserCart } from "../../store/card";
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "../../store/auth";
import Swal from "sweetalert2";

const CartItem = () => {
  const { cart, removeToCart, increaseQuantityById } = UserCart();
  const { islogin, user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  const decrement = (id) => {
    removeToCart(id);
  };
  const increment = (id) => {
    increaseQuantityById(id);
  };
  useEffect(() => {
    const total = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setTotalPrice(total);
  }, [cart]);
  const proceedToBuy = async (e) => {
    e.preventDefault();
    try {
      if (cart.length === 0) {
        // If cart is empty, show a SweetAlert popup
        await Swal.fire({
          icon: "warning",
          title: "Cart Empty",
          text: "Your cart is empty. Please add items to proceed.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
        return; // Stop further execution if cart is empty
      }
      if (!islogin) {
        // If no user is logged in, show a SweetAlert popup
        await Swal.fire({
          icon: "warning",
          title: "Sign In Required",
          text: "Please sign in to proceed with the purchase.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
        return; // Stop further execution if no user is logged in
      }
      const stripe = await loadStripe(
        "pk_test_51OkUgkSIU9hpmY2dMOtvK5p09Kzwfj61j1kXPQqv7bQHhopOuknwVMUzofTK4SmCcr5nXX7tqDIbZwuNOY1phWEd00LhRz2wcl"
      );

      // Include userId in the address object
      const address = {
        name: "arun",
        line1: "123 Main St", // Sample address, replace with actual address
        city: "City", // Sample city, replace with actual city
        postal_code: "12345", // Sample postal code, replace with actual postal code
        country: "USA", // Set to reflect US address
        userId: user._id, // Include the userId here
      };
      const currency = "USD"; // Set currency to USD
      const body = {
        products: cart,
        address: address,
        currency: currency,
      };

      const response = await fetch(`https://foodhut-d4sp.onrender.com/food/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const session = await response.json();
      console.log("this is response", session);

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error.message);
      // Handle error display to the user or any other appropriate action
    }
  };

  return (
    <section className="py-16 sm:px-6 max-w-7xl items-center m-auto bg-opacity-30 lg:px-6">
      <div className=" text-3xl text-center mb-8 pt-[14vh] font-bold">
        Shopping Cart
      </div>
      <div className="container grid md:grid-cols-2 mx-auto items-center">
        <div className="flex flex-col overflow-auto h-[25rem]">
          {cart?.length === 0 ? (
            <div className="text-lg text-center text-gray-500">
              No items in cart
            </div>
          ) : (
            cart.map((currElem, index) => (
              <div
                key={index}
                className="flex w-full justify-between py-5 px-4 gap-3 md:gap-5 border-b border-cyan-300 rounded-lg shadow-sm hover:shadow-2xl"
              >
                {/* IMAGE START */}
                <div className="shrink-0 aspect-square w-[50px] md:w-[120px] flex items-center justify-center border rounded-2xl shadow-sm hover:shadow-2xl">
                  <img
                    src={currElem.foodImg[0]}
                    alt={"foodImg"}
                    width={120}
                    height={120}
                    className="h-[5rem] w-[4rem]"
                  />
                </div>
                {/* IMAGE END */}

                <div className="w-full flex flex-col">
                  <div className="flex flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                      {currElem.title}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                      MRP : &#36;{currElem.price} USD
                    </div>
                  </div>

                  {/* PRODUCT SUBTITLE */}
                  {currElem.holemark ? (
                    <img
                      src="/img/red.jpg"
                      className="h-[1rem] w-[1rem]"
                      alt="Non-veg"
                    />
                  ) : (
                    <img
                      src="/img/green.png"
                      className="h-[1rem] w-[1rem]"
                      alt="Veg"
                    />
                  )}

                  {/* Quantity */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                      <div className="flex items-center gap-1">
                        <div className="font-semibold">Quantity:</div>
                        <div className="items-center font-semibold text-sm flex flex-row">
                          <button onClick={() => decrement(currElem._id)}>
                            <RiSubtractLine />
                          </button>
                          <span className="mx-1 cursor-not-allowed bg-white border px-4 font-semibold rounded-lg">
                            {currElem.quantity}
                          </span>
                          <button
                            onClick={() => increment(currElem._id)}
                            className="font-bold"
                          >
                            <IoAddSharp />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        removeToCart(currElem._id);
                      }}
                    >
                      <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
                    </button>{" "}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="md:ml-32 sm:w-full md:w-3/4 pt-16 md:pt-0">
          <div className="text-lg font-bold">Summary</div>
          <div className="p-5 my-5 bg-cyan-100/20 rounded-xl hover:shadow-md">
            <div className="flex justify-between">
              <div className="uppercase text-md md:text-lg font-medium text-black">
                Subtotal
              </div>
              <div className="text-md md:text-lg font-medium text-black">
                &#36;{totalPrice}
              </div>
            </div>
            <div className="text-sm md:text-md py-5 border-t mt-5">
              The subtotal reflects the total price of your order, including
              duties and taxes, before any applicable discounts. It does not
              include delivery costs and international transaction fees.
            </div>
          </div>

          {/* BUTTON START */}
          <button
            onClick={proceedToBuy}
            className="w-4/5 m-auto py-4 capitalize rounded-full bg-orange-600/85 text-white/75 hover:text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
          >
            Proceed to buy
          </button>
          {/* BUTTON END */}
        </div>
      </div>
    </section>
  );
};
export default CartItem;
