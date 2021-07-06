import { useContext } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { ItemListCheckout } from "../../components/ItemListCheckout/ItemListCheckout";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accounting from "accounting";
import { CartContext } from "../../context/CartContext/CartContext";
import "./styles.scss";

export const ItemCheckoutContainer = () => {
  const { clear, cart, cartTotal, cartSize } = useContext(CartContext);
  return (
    <Container>
      <h2 className="mb-3">Carrito de compras</h2>
      <Row>
        <Col lg={9} md={8}>
          {cartSize > 0 ? (
            <ItemListCheckout data={cart} />
          ) : (
            <Alert variant="warning" className={"d-block"}>
              No tenés productos agregados al carrito
            </Alert>
          )}
        </Col>
        <Col lg={3} md={4}>
          <Row noGutters>
            <Col className="checkout mt-3 mt-md-0 mb-2 p-3">
              <h4>Total ítems: {cartSize}</h4>
              <h5>Importe: {accounting.formatMoney(cartTotal, "$")}</h5>
              {cartSize > 0
                ? [
                    <ButtonComponent
                      key={1}
                      className="mt-4"
                      text="Confirmar carrito"
                      variant="success"
                      icon={
                        <FontAwesomeIcon
                          icon={"cart-plus"}
                          title="Confirmar carrito"
                        />
                      }
                      onClick={() => {}}
                      block={true}
                    ></ButtonComponent>,
                    <ButtonComponent
                      key={2}
                      className="mt-4"
                      text="Vaciar carrito"
                      variant="danger"
                      icon={
                        <FontAwesomeIcon
                          icon={"cart-arrow-down"}
                          title="Vaciar carrito"
                        />
                      }
                      onClick={clear}
                      block={true}
                    ></ButtonComponent>,
                  ]
                : " "}
            </Col>
          </Row>
        </Col>
      </Row>{" "}
    </Container>
  );
};
