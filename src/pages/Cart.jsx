import React, { useContext } from "react";
import Cartitem from "../components/Cartitem/Cartitem";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
const {all_product ,addToCart,removeFromCart}=useContext(ShopContext)

  return (
    <div>
      <Cartitem />
    </div>
  );
};

export default Cart;
