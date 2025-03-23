/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../../Utility/addToDB";
import WishlistItem from "../WishlistItem/WishlistItem";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const allProducts = useLoaderData();

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const productList = allProducts.filter((item) =>
      storedWishListInt.includes(item.product_id)
    );
    setWishlist(productList);
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">WishList</h2>
      {wishlist.map((product) => (
        <WishlistItem key={product.product_id} product={product}></WishlistItem>
      ))}
    </div>
  );
};

export default Wishlist;
