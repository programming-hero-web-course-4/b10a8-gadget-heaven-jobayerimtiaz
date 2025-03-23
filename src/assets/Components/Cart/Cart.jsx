/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  clearStoredCart,
  getStoredCart,
  updateStoredCart,
} from "../../../Utility/addToDB";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { MdSort } from "react-icons/md";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const totalPrice = cartList
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  const handleSort = () => {
    const sortedPriceList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedPriceList);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
    setCartList([]);
    clearStoredCart();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeItemsFromCart = (productId) => {
    const updatedCartList = cartList.filter(
      (item) => item.product_id !== productId
    );
    setCartList(updatedCartList);
    updateStoredCart(updatedCartList);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-bold">Total Cost: {totalPrice}</h2>
          <button
            onClick={handleSort}
            className="btn bg-white text-[#9538E2] btn-primary border-[#9538E2] rounded-3xl"
          >
            Sort by Price <MdSort />
          </button>
          <button
            onClick={handlePurchase}
            disabled={cartList.length === 0}
            className="btn btn-primary border-none bg-[#9538E2] rounded-3xl"
          >
            Purchase
          </button>
        </div>
      </div>

      {cartList.map((selectedCart) => (
        <CartItem
          key={selectedCart.product_id}
          selectedCart={selectedCart}
          removeItemsFromCart={removeItemsFromCart}
        ></CartItem>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
            <img src="/src/images/Group.png" alt="" />
            <h2 className="text-2xl font-bold mb-4 mt-4">
              Payment Successfully
            </h2>
            <p>Thanks for purchasing</p>
            <p>Total: {totalPrice}</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="btn bg-gray-500 text-white rounded-3xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
