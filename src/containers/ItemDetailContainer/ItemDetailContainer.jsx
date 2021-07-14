import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { CartContext } from "../../context/CartContext/CartContext";
import { Loader } from "../../components/Loader/Loader";

export const ItemDetailContainer = () => {
  const { getProductById } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductById_ = async (id) => {
      setProduct(await getProductById(id));
      setLoading(false);
    };
    getProductById_(id);
  }, [id, getProductById]);

  return (
    <Container>
      {!loading ? (
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
      ) : (
        <div className="mt-5 d-flex justify-content-center">
          <Loader />
        </div>
      )}
    </Container>
  );
};
