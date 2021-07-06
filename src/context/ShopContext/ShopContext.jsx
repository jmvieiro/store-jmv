import React, { useEffect, useState } from "react";
import { DATA, CATEGORIES } from "../../utils/const";

export const ShopContext = React.createContext([]);

export const ShopProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(`${CATEGORIES}`);
      let p = await response.json();
      setCategories(p);
    };
    getCategories();
    const getProducts = async () => {
      const response = await fetch(`${DATA}`);
      let p = await response.json();
      setProducts(p);
    };
    getProducts();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        products,
        categories,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
