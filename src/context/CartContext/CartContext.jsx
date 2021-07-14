import { SHOW_TOAST } from "../../utils/const";
import React, { useEffect, useState } from "react";
import { productsDB, categoriesDB } from "../../firebase/client";
import { Loader } from "../../components/Loader/Loader";
export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [msj, setMsj] = useState(null);
  const [error, setError] = useState(null);

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
      for (var i in cart) {
        if (cart[i].product.id === obj.id) {
          if (update) cart[i].qty = qty;
          else if (cart[i].qty + qty <= cart[i].product.stock) {
            cart[i].qty += qty;
            setMsj(
              "El producto ya estaba en el carrito. La cantidad del mismo ha sido actualizada."
            );
            hideMsj();
          } else {
            setError(
              `El stock disponible es ${
                cart[i].product.stock - cart[i].qty
              }. Ingresá una cantidad menor.`
            );
            hideMsj();
            return;
          }
          break;
        }
      }
      setCart(cart);
      updateCart(cart);
    } else {
      cart.push({
        product: obj,
        qty: qty,
      });
      setCart(cart);
      updateCart(cart);
    }
  }

  function hideMsj() {
    setTimeout(() => {
      setMsj(null);
      setError(null);
    }, SHOW_TOAST + 100);
  }

  function removeItem(id) {
    let aux = cart.filter(function (obj) {
      return obj.product.id !== id;
    });
    updateCart(aux);
    setCart(aux);
  }

  function clear() {
    setCart([]);
    setCartSize(0);
    setCartTotal(0);
  }

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
    else {
      updateCart(JSON.parse(localCart));
      setCart(JSON.parse(localCart));
    }

    const getCategories = async () => {
      await categoriesDB.get().then((response) => {
        setCategories(
          response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    };
    getCategories();

    const getProducts = async () => {
      await productsDB.get().then((response) => {
        setProducts(
          response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    };
    getProducts();
  }, []);

  const getProductById = async (id) => {
    return await productsDB
      .doc(id)
      .get()
      .then((response) => {
        if (!response.exists) return null;
        return { id: response.id, ...response.data() };
      });
  };

  const getCategoryById = async (id) => {
    return await categoriesDB
      .doc(id)
      .get()
      .then((response) => {
        if (!response.exists) return null;
        return { id: response.id, ...response.data() };
      });
  };

  const getProductsByCategory = async (id) => {
    return await productsDB
      .where("category", "==", id)
      .get()
      .then((response) => {
        let aux = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        return aux;
      });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, cartSize, cartTotal]);

  return (
    <CartContext.Provider
      value={{
        products,
        categories,
        cart,
        cartSize,
        cartTotal,
        msj,
        error,
        addItem,
        removeItem,
        clear,
        getProductById,
        getCategoryById,
        getProductsByCategory,
      }}
    >
      {products.length > 0 && categories.length > 0 ? (
        children
      ) : (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      )}{" "}
    </CartContext.Provider>
  );
};
