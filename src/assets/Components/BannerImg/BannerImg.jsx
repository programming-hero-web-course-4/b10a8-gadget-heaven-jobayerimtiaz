import React from "react";

const BannerImg = () => {
  return (
    <div className="flex justify-center items-center mb-20 md:mb-80">
      <img
        className="w-4/6 absolute md:top-115 border-14 border-[#FFFFFF4D] md:h-[500px] rounded-4xl"
        src="/src/images/banner.jpg"
        alt="Gadget"
      />
    </div>
  );
};

export default BannerImg;
