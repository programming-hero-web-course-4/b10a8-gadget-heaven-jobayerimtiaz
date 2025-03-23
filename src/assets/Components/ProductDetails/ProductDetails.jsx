import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  console.log(data);
  const id = parseInt(product_id);

  const gadget = data.find((gadget) => gadget.product_id === id);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
    availability,
  } = gadget;

  return (
    <div className="pb-200 flex items-center justify-center bg-[#ECECEC] w-full">
      <div className="bg-[#9538E2] pb-50 pt-5 text-center text-white relative w-full">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="text-base font-normal py-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-sm w-3/4 absolute top-60">
        <figure className="p-8 w-2/5">
          <img className="w-full" src={product_image} alt={product_title} />
        </figure>
        <div className="card-body w-3/5">
          <h2 className="card-title">{product_title}</h2>
          <button className="btn btn-outline btn-success w-24 bg-[#309C081A] rounded-3xl">
            {availability ? "In Stock" : "Out of Stock"}
          </button>

          <p>Price: ${price}</p>
          <p>{description}</p>
          <p>
            Specification: <br />
            {Specification.map((spec, index) => (
              <p key={index}>
                {index + 1}. {spec}
              </p>
            ))}
          </p>

          <p>Rating</p>
          <button className="btn btn-soft w-12 rounded-2xl">{rating}</button>
          <div className="card-actions">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
