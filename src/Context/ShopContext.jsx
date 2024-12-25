import { products } from "@/assets/frontend_assets/assets";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const navigate = useNavigate();

  const addtocart = (itemid, size) => {
    if (!size) {
      toast.error("Select Product Size");
    }

    let cartData = structuredClone(cartItem);
    if (cartData[itemid]) {
      if (cartData[itemid][size]) {
        cartData[itemid][size] += 1;
      } else {
        cartData[itemid][size] = 1;
      }
    } else {
      cartData[itemid] = {};
      cartData[itemid][size] = 1;
    }
    setCartItem(cartData);
  };

  const getCartCount = () => {
    let TotalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            TotalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return TotalCount;
  };

  const UpdataQuantity = async (itemid, size, quantity) => {
    let cartData = structuredClone(cartItem);

    cartData[itemid][size] = quantity;
    setCartItem(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let iteminfo = products.find((product) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += iteminfo.price * cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
    addtocart,
    getCartCount,
    UpdataQuantity,
    getCartAmount,
    navigate,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
