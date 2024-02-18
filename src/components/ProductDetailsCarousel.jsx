/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
    return (
        <div className=" text-[20px] w-full  max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
            infiniteLoop={true}
            showIndicators={true}
            showStatus={true}
            thumbWidth={60}
            width={''}
            dynamicHeight
            className="productCarousel "
        >
            {images?.map((img) => (
            <div key={""}>
                <img src={img} sizes={50} className="rounded-lg" />
            </div>
            ))}
        </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;
