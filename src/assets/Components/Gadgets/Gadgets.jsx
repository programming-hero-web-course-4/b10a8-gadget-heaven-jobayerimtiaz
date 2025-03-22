import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/public/gadget.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div>
      <div className="w-3/4 grid grid-cols-3 gap-4">
        {gadgets.map((gadget) => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
