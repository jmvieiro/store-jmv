import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import "./styles.scss";

export const CartWidget = ({ cantidad }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={"shopping-cart"}
        className="ml-2 fa"
      />{" "}
      <Badge pill variant="primary">
        {cantidad}
      </Badge>
      <span className="sr-only">Carrito de compras</span>
    </>
  );
};
