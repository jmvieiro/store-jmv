import React, { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { getCategories, getProducts } from "../../firebase/client";

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
    <ShopContext.Provider value={{ categories, products }}>
      {loading ? <Loader /> : children}
    </ShopContext.Provider>
  );
};
