import { DATA, CATEGORIES } from "../../utils/const";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container, Spinner } from "react-bootstrap";
import { ItemList } from "../../components/ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setSpinner(true);
    setProducts([]);
    setCategory(undefined);
    const getItems = async () => {
      const response = await fetch(`${DATA}`);
      let products = await response.json();
      const responseCat = await fetch(`${CATEGORIES}`);
      let cat = await responseCat.json();
      products = id
        ? products.filter((p) => p.category === parseInt(id))
        : products;
      cat = cat.find((c) => c.id === parseInt(id));
      setTimeout(() => {
        setProducts(products);
        setCategory(cat);
        setSpinner(false);
      }, 2000);
    };
    getItems();
  }, [id]);

  return (
    <Container>
      <h2 className="mb-3" align="center">
        {greeting}
        {category ? `: ${category.name}` : ""}
      </h2>

      {spinner ? (
        <div className="d-flex justify-content-center">
          <Spinner align="center" animation="border" variant="info" />
        </div>
      ) : products.length === 0 ? (
        <Alert variant="danger" align="left" className={"mt-3"}>
          No hay productos para mostrar.
        </Alert>
      ) : (
        ""
      )}

      {products.length > 0 ? <ItemList data={products} /> : ""}
    </Container>
  );
};
