import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import accounting from "accounting";
import "./styles.scss";

export const Item = ({ product }) => {
  return (
    <Link
      to={`/item/${product.id}`}
      style={{ color: "#fff", textDecoration: "none" }}
    >
      <Card key={product.id} text="white" className="mb-2 p-4">
        <Card.Header>
          <Card.Img
            className="mt-1"
            variant="top"
            src={product.img}
            alt={product.title}
            title={product.title}
          />
        </Card.Header>
        <Card.Body className="pt-2">
          <Card.Text>{product.title}</Card.Text>
          <Card.Text>{accounting.formatMoney(product.price, "$")}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Badge
            className="outOfStock"
            variant={product.stock === 0 ? `dark` : `light`}
          >
            {product.stock === 0 ? `Sin stock` : `Stock: ${product.stock}`}
          </Badge>
        </Card.Footer>
      </Card>
    </Link>
  );
};
