import { CATEGORIES } from "../../utils/const";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";

export const FooterContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      if (categories.length === 0) {
        const response = await fetch(`${CATEGORIES}`);
        let aux = await response.json();
        setCategories(aux);
      }
    };
    getCategories();
  }, [categories]);

  return <Footer categories={categories} />;
};
