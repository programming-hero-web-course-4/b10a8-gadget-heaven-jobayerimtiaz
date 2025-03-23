/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getStoredCart } from "../../../Utility/addToDB";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const allGadgets = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredCart();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    const gadgetList = allGadgets.filter((item) =>
      storedCartListInt.includes(item.product_id)
    );
    console.log(storedCartList, storedCartListInt, allGadgets, cartList);
    setCartList(gadgetList);
  }, []);
  return (
    <div>
      <h1>this is cart:{cartList.length}</h1>
      {cartList.map((selectedCart) => (
        <CartItem
          key={selectedCart.product_id}
          selectedCart={selectedCart}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;
