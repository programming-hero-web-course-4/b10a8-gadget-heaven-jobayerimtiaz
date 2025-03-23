import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import ProductButtons from "../ProductButtons/ProductButtons";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/public/gadget.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const filterGadgets =
    selectedCategory === "All"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === selectedCategory);

  return (
    <div>
      <h1 className="font-bold text-4xl text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex gap-16 w-10/12 mx-auto">
        <div className="w-1/5">
          <ProductButtons
            gadgets={gadgets}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          ></ProductButtons>
        </div>
        <div className="w-4/5 grid grid-cols-3 gap-4">
          {filterGadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
