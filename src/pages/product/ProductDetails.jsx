import { useParams } from "react-router-dom";
import ProductDetailsCarousel from "../../components/ProductDetailsCarousel.jsx";
import { FaCartArrowDown } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserCart } from "../../store/card.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../shared/loader..jsx";

const ProductDetails = () => {
  const { addToCart } = UserCart();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getBYid = async () => {
    try {
      const response = await axios.get(
        `https://foodhut-d4sp.onrender.com/food/find/${id}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBYid();
  }, []);
  const defaultImages = ["/banner.png", "/coco-cola.jpg", "/redBull.png"];
  const images =
    data.foodImg && data.foodImg.length > 0 ? data.foodImg : defaultImages;
  const handleAddToCart = (data) => {
    toast(`${data.title} Added in Cart`);
    addToCart(data);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="py-3 px-10 sm:px-6 lg:px-6">
          <div className="container mx-auto py-[14vh]">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition:Bounce
            />
            <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto text-gray-800 md:py-20">
              <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                {/* left column start */}
                <div className="w-full md:w-auto  flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                  <ProductDetailsCarousel images={images} className="" />
                </div>
                {/* left column end */}

                {/* right column start */}
                <div className="flex-[1] py-3">
                  {/* PRODUCT TITLE */}
                  <div className="text-[34px] text-sky-800  font-bold mb-2 leading-tight">
                    {data.title}
                  </div>

                  {/* PRODUCT PRICE */}
                  <div className="flex items-center ">
                    <p className="mr-2 text-lg font-semibold">
                      MRP - &#36; {data.price} USD
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-row items-center justify-between">
                      {" "}
                      <div className="text-lg font-bold my-5">
                        Product Details
                      </div>{" "}
                      <div>
                        {data.holemark ? (
                          <img
                            src="/img/red.jpg"
                            className="h-[2rem]"
                            alt="Non-veg"
                          />
                        ) : (
                          <img
                            src="/img/green.png"
                            className="h-[2rem]"
                            alt="Veg"
                          />
                        )}
                      </div>
                    </div>

                    <div className="markdown text-xl text-sky-700 mb-5">
                      {data.description}
                    </div>
                  </div>
                  {/* ADD TO CART BUTTON START */}
                  <button
                    className="w-full flex items-center justify-center py-4 rounded-full bg-transparent border-2 border-sky-900 border-solid text-sky-800 text-xl font-medium transition-transform active:scale-95 mb-3 hover:opacity-80 hover:bg-gradient-to-r from-sky-700 via-gray-50 to-sky-500"
                    onClick={() => handleAddToCart(data)}
                  >
                    <span>Add to Cart &nbsp;</span>
                    <FaCartArrowDown />
                  </button>
                  {/* ADD TO CART BUTTON END */}
                </div>
                {/* right column end */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
