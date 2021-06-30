import { DATA } from "../../utils/const";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ greeting, onAdd }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`${DATA}`);
      let products = await response.json();
      let aux = products.find((p) => p.id === parseInt(id));
      if (aux) setProduct(aux);
    };
    getItems();
  }, [id]);

  return (
    <Container>
      <h2 className="mb-3" align="center">
        {greeting}
      </h2>

      {!product ? (
        <Alert variant="info" className={alert ? "d-block mt-3" : "d-none"}>
          Producto no encontrado.{" "}
        </Alert>
      ) : (
        ""
      )}

      {product ? <ItemDetail product={product} onAdd={onAdd} /> : ""}
    </Container>
  );
};
