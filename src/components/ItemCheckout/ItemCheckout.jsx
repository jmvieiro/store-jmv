import { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../context/CartContext/CartContext";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import accounting from "accounting";

export const ItemCheckout = ({ product, qty }) => {
  const { removeItem, addItem } = useContext(CartContext);
  function remove() {
    removeItem(product.id);
  }
  function onAdd(c) {
    addItem(product, c, true);
  }
  return (
    <Card text="white" className="mb-2 p-2">
      <Card.Header>
        <Row noGutters>
          <Col lg={12} align="right">
            <Card.Img
              className="mt-1"
              variant="top"
              src={product.img}
              alt={product.title}
              title={product.title}
            />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row noGutters className="mb-4">
          <Col xs={12} className="flex-grow-1">
            <Card.Text className="mb-2">{product.title}</Card.Text>
            <Card.Text>
              {accounting.formatMoney(product.price * qty, "$")}
            </Card.Text>
          </Col>
        </Row>
        <ItemCounter
          className="mt-4"
          stock={product.stock}
          initial={qty}
          onAdd={onAdd}
        />
        <Row noGutters>
          <Col sm={5} lg={8} align="right"></Col>
          <Col sm={7} lg={4} align="right">
            <ButtonComponent
            className="mt-2"
              text="Eliminar del carrito"
              variant="outline-danger"
              icon={
                <FontAwesomeIcon
                  icon={"trash-alt"}
                  title="Eliminar del carrito"
                />
              }
              onClick={remove}
              block={true}
              textOnlyXs={true}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
