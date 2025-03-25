/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { AddToStoredCart, AddToStoredWishList } from "../../../Utility/addToDB";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [isCart, setIsCart] = useState(false);
  const [isWishListed, setIsWishListed] = useState(false);

  const data = useLoaderData();
  const { product_id } = useParams();
  console.log(data);
  const id = parseInt(product_id);

  const gadget = data.find((gadget) => gadget.product_id === id);

  const {
    product_id: currentProduct,
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
    availability,
  } = gadget;

  useEffect(() => {
    document.title = `${product_title} Details | Gadget Heaven`;
  }, []);

  const handleCartList = (id) => {
    AddToStoredCart(id);
    if (!isCart) {
      toast.success(`Added to Cart!`);
      setIsCart(true);
    } else {
      toast.info("Already In Cart");
    }
  };

  const handleWishList = (id) => {
    AddToStoredWishList(id);
    if (!isWishListed) {
      toast.success(`Added to Wishlist!`);
      setIsWishListed(true);
    }
  };

  return (
    <div className="pb-120 flex flex-col md:flex-row items-center justify-center bg-[#ECECEC] w-full">
      <div className="bg-[#9538E2] pb-50 pt-5 text-center text-white relative w-full">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="text-base font-normal py-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-sm w-3/4 absolute top-60">
        <figure className="p-4 w-2/5 ">
          <img className="" src={product_image} alt={product_title} />
        </figure>
        <div className="card-body w-3/5">
          <h2 className="card-title text-3xl font-semibold">{product_title}</h2>
          <p className="text-xl text-[#09080FCC] font-semibold">
            Price: ${price}
          </p>
          <button className="btn btn-outline btn-success w-24 bg-[#309C081A] text-[#309C08] font-medium rounded-3xl">
            {availability ? "In Stock" : "Out of Stock"}
          </button>

          <p className="text-[#09080F99] font-normal text-lg">{description}</p>
          <p className="text-lg font-bold">
            Specification:
            {Specification.map((spec, index) => (
              <p className="text-lg font-normal text-[#09080F99]" key={index}>
                {index + 1}. {spec}
              </p>
            ))}
          </p>

          <p className="text-lg font-bold">Rating ⭐ </p>
          <div className="flex gap-3">
            <div class="flex items-center">
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <button className="btn btn-soft w-12 rounded-2xl">{rating}</button>
          </div>

          <div className="card-actions mt-4 flex items-center">
            <button
              onClick={() => {
                handleCartList(currentProduct);
              }}
              className="btn btn-primary bg-[#9538E2] border-none rounded-3xl text-lg hover:cursor-pointer font-bold"
            >
              Add To Cart <FiShoppingCart />
            </button>
            <div
              onClick={() => {
                handleWishList(currentProduct);
              }}
              className={`flex justify-center items-center w-10 h-10 text-lg bg-white rounded-full cursor-pointer  border-1 border-gray-300 ml-3 text-black  ${
                isWishListed ? " border-none" : "hover:bg-gray-400"
              }`}
              disabled={isWishListed}
            >
              <CiHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
