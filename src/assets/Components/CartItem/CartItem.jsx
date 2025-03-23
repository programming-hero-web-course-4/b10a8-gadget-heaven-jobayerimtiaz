import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const CartItem = ({ selectedCart, removeItemsFromCart }) => {
  const { product_title, product_image, description, price, product_id } =
    selectedCart;
  return (
    <div className="card card-side bg-base-100 shadow-sm h-48 py-4 my-8">
      <figure>
        <img src={product_image} alt={product_title} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
          <button
            className="text-2xl text-red-500 cursor-pointer"
            onClick={() => removeItemsFromCart(product_id)}
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

export default CartItem;
