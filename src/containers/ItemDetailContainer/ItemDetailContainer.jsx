import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container, Spinner } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { ShopContext } from "../../context/ShopContext/ShopContext";

export const ItemDetailContainer = () => {
  const { products } = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const getItems = async () => {
      let p = products.find((p) => p.id === parseInt(id));
      setTimeout(() => {
        setProduct(p);
        setLoaded(true);
      }, 500);
    };
    getItems();
  }, [id, products]);

  return (
    <Container>
      <h2 className="mb-3">Detalle del producto: #{id}</h2>

      {loaded ? (
        !product ? (
          <Alert variant="danger" align="left" className={"mt-3"}>
            Producto no encontrado.{" "}
          </Alert>
        ) : (
          <ItemDetail product={product} />
        )
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner align="center" animation="border" variant="info" />
        </div>
      )}
    </Container>
  );
};
