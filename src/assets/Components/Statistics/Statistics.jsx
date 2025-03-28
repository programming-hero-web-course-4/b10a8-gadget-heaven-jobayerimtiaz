import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const allGadget = useLoaderData();
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return (
    <div className="mx-auto">
      <div className="bg-[#9538E2] pb-8 pt-8 text-center text-white">
        <h1 className="text-lg  md:text-3xl font-bold">Statistics</h1>
        <p className="text-xs px-2 md:text-base font-normal py-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <div style={{ width: "100%", height: "400px", margin: "20px 0" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={allGadget}>
              <Bar dataKey="price" fill="#8884d8" />
              <XAxis dataKey="product_title"></XAxis>
              <YAxis dataKey="price"></YAxis>
              <Tooltip></Tooltip>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
