import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { CartContext } from "../../context/CartContext/CartContext";
import "./styles.scss";

export const CartWidget = () => {
  const { cartSize } = useContext(CartContext);
  return (
    <>
      <div>
        <FontAwesomeIcon icon={"shopping-cart"} className="ml-2 fa" size="lg" />{" "}
        <Badge
          pill
          variant="light"
          style={{
            verticalAlign: "top",
            marginLeft: -4,
            fontSize: "65%",
            opacity: "85%",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
            paddingTop: "0.2em",
          }}
        >
          {cartSize}
        </Badge>
        <span className="sr-only">Carrito de compras</span>
      </div>
    </>
  );
};
