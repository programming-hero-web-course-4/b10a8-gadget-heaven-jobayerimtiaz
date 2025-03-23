import React from "react";

const WishlistItem = ({ product }) => {
  const { product_image, product_title, description, price } = product;
  return (
    <div className="card card-side bg-base-100 shadow-sm h-48 p-4 m-8">
      <figure>
        <img className="w-full" src={product_image} alt={product_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
        <p className="text-lg font-normal text-[#09080F99]">{description}</p>
        <p className="text-[#09080FCC] text-xl font-semibold">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default WishlistItem;
