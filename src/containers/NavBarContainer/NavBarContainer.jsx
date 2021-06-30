import { CATEGORIES } from "../../utils/const";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";

export const NavBarContainer = ({ cart }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(`${CATEGORIES}`);
      let c = await response.json();
      setCategories(c);
    };
    getCategories();
  }, []);

  return <NavBar categories={categories} cart={cart} />;
};
