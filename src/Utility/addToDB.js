const getStoredCart = () => {
  const storedListStr = localStorage.getItem("cart-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const AddToStoredCart = (id) => {
  const storedList = getStoredCart();
  if (storedList.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    // toast("Added In Cart ");
  }
};

const clearStoredCart = () => {
  localStorage.removeItem("cart-list");
};

const clearStoredList = () => {
  localStorage.removeItem("wish-list");
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const updateStoredCart = (cartItems) => {
  const cartIds = cartItems.map((item) => item.product_id);
  localStorage.setItem("cart-list", JSON.stringify(cartIds));
};

const updateWishList = (wishItems) => {
  const wishIds = wishItems.map((item) => item.product_id);
  localStorage.setItem("wish-list", JSON.stringify(wishIds));
};

const AddToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    // toast("Added In Wishlist");
  }
};

export {
  getStoredCart,
  getStoredWishList,
  AddToStoredCart,
  AddToStoredWishList,
  clearStoredCart,
  updateStoredCart,
  clearStoredList,
  updateWishList,
};
