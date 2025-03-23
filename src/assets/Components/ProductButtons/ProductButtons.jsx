import React from "react";

const ProductButtons = ({ gadgets, selectedCategory, setSelectedCategory }) => {
  const categories = [...new Set(gadgets.map((item) => item.category))];
  return (
    <div className="bg-base-100  shadow-sm rounded-2xl ">
      <div className="w-3/4 grid grid-cols-1 gap-6 mx-auto py-6">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`btn btn-soft rounded-3xl ${
            selectedCategory === "All"
              ? "bg-[#9538E2] text-white"
              : "bg-[#09080F0D] text-[#09080F99]"
          }`}
        >
          All Product
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn btn-soft rounded-3xl ${
              selectedCategory === category
                ? "bg-[#9538E2] text-white"
                : "bg-[#09080F0D] text-[#09080F99]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductButtons;
