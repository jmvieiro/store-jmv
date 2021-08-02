import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { Loader } from "../../components/Loader/Loader";
import { getProductById } from "../../firebase/client";
import { ShopContext } from "../../context/ShopContext/ShopContext";

export const ItemDetailContainer = () => {
  const { products } = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const waitForData = async (id) => {
      if (id) {
        let prod = products.find((p) => p.id === id);
        if (prod) setProduct(prod);
        else setProduct(await getProductById(id));
      } else setProduct(null);
      setLoading(false);
    };
    waitForData(id);
  }, [id, products]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        [
          <h2 key={0} className="mb-3">
            Detalle del producto:
          </h2>,
          !product ? (
            <Alert key={1} variant="danger" align="left" className={"mt-3"}>
              Producto no encontrado.{" "}
            </Alert>
          ) : (
            <ItemDetail key={1} product={product} />
          ),
        ]
      )}
    </Container>
  );
};
