import React from "react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="text-white flex flex-col space-y-8 justify-center items-center relative overflow-hidden mb-20 md:mb-70 mt-12">
      <h1 className="text-2xl md:text-5xl font-bold md:leading-16 text-center md:px-30">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-xs md:text-base font-normal text-center">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <Link to="/dashboard">
        <button className="btn btn-soft rounded-3xl text-[#9538E2] font-bold text-xl">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default BannerSection;
