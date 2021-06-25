import { useEffect, useState } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ greeting, onAdd }) => {
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("./assets/products.json");
      let products = await response.json();
      setTimeout(() => {
        setProduct(products[0]);
      }, 2000);
    };
    getItems();
  }, []);

  return (
    <>
      <h2>{greeting}</h2>

      <Alert variant="info" className={alert ? "d-block mt-3" : "d-none"}>
        {!product ? "Cargando" : "Listo, se obtuvo el producto."}
      </Alert>

      {product ? (
        <Row className="mt-3">
          <Col>
            <ItemDetail product={product} onAdd={onAdd} />
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
};
