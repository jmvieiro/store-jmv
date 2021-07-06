import { Row, Col } from "react-bootstrap";
import { ItemCheckout } from "../ItemCheckout/ItemCheckout";

export const ItemListCheckout = ({ data }) => {
  return (
    <Row>
      {data.map(({product, qty}) => (
        <Col key={product.id} lg={4}>
          <ItemCheckout product={product} qty={qty} />
        </Col>
      ))}
    </Row>
  );
};
