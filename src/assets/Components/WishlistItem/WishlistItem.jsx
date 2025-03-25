import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const WishlistItem = ({ product, removeItemsFromList }) => {
  const { product_image, product_title, description, price, product_id } =
    product;
  return (
    <div className="card card-side bg-base-100 shadow-sm md:h-48 py-4 my-8 flex flex-col md:flex-row">
      <figure>
        <img
          className="w-40 h-40 md:w-full md:h-full"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
          <button
            onClick={() => {
              removeItemsFromList(product_id);
            }}
            className="text-2xl text-red-500 cursor-pointer"
          >
            <RxCrossCircled />
          </button>
        </div>
        <p className="text-lg font-normal text-[#09080F99]">{description}</p>
        <p className="text-[#09080FCC] text-xl font-semibold">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default WishlistItem;
