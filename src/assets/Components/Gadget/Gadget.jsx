import React from "react";

const Gadget = ({ gadget }) => {
  const { product_title, product_image, price } = gadget;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className=" rounded-2xl">
        <img className="p-4 h-44" src={product_image} alt={product_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
        <p className="font-medium text-xl text-[#09080F99]">{price}k</p>
        <div className="card-actions">
          <button className="btn btn-outline btn-primary rounded-3xl">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
