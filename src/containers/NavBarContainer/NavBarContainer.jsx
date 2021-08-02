import { useContext } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { ShopContext } from "../../context/ShopContext/ShopContext";

export const NavBarContainer = () => {
  const { categories } = useContext(ShopContext);
  return <NavBar categories={categories} />;
};
