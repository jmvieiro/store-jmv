import React, { useContext, useEffect, useState } from "react";

import { ShopContext } from "../ShopContext/ShopContext";
import firebase from "firebase/app";
import { showTimerMessage } from "../../utils/helper";
import { updateStock } from "../../firebase/client";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const { products, setProducts } = useContext(ShopContext);

  function getFrom(id) {
    return cart.find((p) => p.product.id === id);
  }

  function isInCart(id) {
    return id === undefined ? undefined : getFrom(id) !== undefined;
  }

  function updateCart(cart_) {
    let total = 0,
      size = 0;
    cart_.forEach((element) => {
      size += element.qty;
      total += element.qty * element.product.price;
    });
    setCartSize(size);
    setCartTotal(total);
  }

  function addItem(obj, qty, update) {
    if (isInCart(obj.id)) {
      let aux = [...cart];
      for (var i in aux) {
        if (aux[i].product.id === obj.id) {
          if (update) aux[i].qty = qty;
          else if (aux[i].qty + qty <= aux[i].product.stock) {
            aux[i].qty += qty;
            showTimerMessage(
              `😎 El producto ya estaba en el carrito. La cantidad del mismo ha sido actualizada.`,
              "info"
            );
          } else {
            showTimerMessage(
              `😱 El stock disponible es ${
                aux[i].product.stock - aux[i].qty
              }. Ingresá una cantidad menor.`,
              "error"
            );
            return;
          }
          break;
        }
      }
      setCart(aux);
    } else {
      setCart([
        ...cart,
        {
          product: obj,
          qty: qty,
        },
      ]);
    }
  }

  function removeItem(id) {
    let aux = cart.filter(function (obj) {
      return obj.product.id !== id;
    });
    setCart(aux);
  }

  function clear() {
    setCart([]);
    setCartSize(0);
    setCartTotal(0);
  }

  const createOrder = (email, name, phone) => {
    const order = {
      buyer: { email: email, name: name, phone: phone },
      detail: cart.map((element) => ({
        idProduct: element.product.id,
        title: element.product.title,
        qty: element.qty,
      })),
      ts_created: firebase.firestore.Timestamp.fromDate(new Date()),
      totalItems: cartSize,
      total: cartTotal,
    };
    return updateStock(order).then((response) => {
      if (response === "ok") {
        products.forEach((item) => {
          let aux = order.detail.find((i) => i.idProduct === item.id);
          if (aux) item.stock -= aux.qty;
        });
        setProducts(products);
        clear();
      }
      return response;
    });
  };

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
    else setCart(JSON.parse(localCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, cartSize, cartTotal]);

  useEffect(() => {
    updateCart(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartSize,
        cartTotal,
        addItem,
        removeItem,
        clear,
        createOrder,
      }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
};
