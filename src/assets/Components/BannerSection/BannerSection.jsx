import React from "react";

const BannerSection = () => {
  return (
    <div className="text-white flex flex-col space-y-8 justify-center items-center relative overflow-hidden mb-70 mt-12">
      <h1 className="text-5xl font-bold leading-16 text-center px-30">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-base font-normal">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn btn-soft rounded-3xl text-[#9538E2] font-bold text-xl">
        Shop Now
      </button>
    </div>
  );
};

export default BannerSection;
