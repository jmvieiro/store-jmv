import { Row, Container } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ data, onAdd }) => {
  return (
    <Container>
      <Row >
        {data.map((product) => (
          <Item key={product.id} product={product} onAdd={onAdd} />
        ))}
      </Row>
    </Container>
  );
};
