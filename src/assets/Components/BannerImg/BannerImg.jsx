import React from "react";

const BannerImg = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="w-4/6 absolute top-110 border-14 border-[#FFFFFF4D] h-[500px] rounded-4xl"
        src="/src/images/banner.jpg"
        alt="Gadget"
      />
    </div>
  );
};

export default BannerImg;
