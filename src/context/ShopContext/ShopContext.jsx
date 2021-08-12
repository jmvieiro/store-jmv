import React, { useEffect, useState } from "react";
import { getCategories, getProducts } from "../../firebase/client";

import { Loader } from "../../components/Loader/Loader";

export const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const waitForData = async () => {
      setCategories(await getCategories());
      setProducts(await getProducts());
      setLoading(false);
    };
    waitForData();
  }, []);

  return (
    <ShopContext.Provider value={{ categories, products, setProducts }}>
      {loading ? <Loader /> : children}
    </ShopContext.Provider>
  );
};
