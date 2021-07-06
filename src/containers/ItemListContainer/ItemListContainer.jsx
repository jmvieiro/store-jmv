import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container, Spinner } from "react-bootstrap";
import { ItemList } from "../../components/ItemList/ItemList";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext/ShopContext";

export const ItemListContainer = () => {
  const { products, categories } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoaded(false);
    const getItems = async () => {
      let cat = id ? categories.find((c) => c.id === parseInt(id)) : null;
      let p = id ? products.filter((p) => p.category === parseInt(id)) : products;
      setTimeout(() => {
        setFilterProducts(p);
        setCategory(cat);
        setLoaded(true);
      }, 1000);
    };
    getItems();
  }, [id, products, categories]);

  return (
    <Container>
      {loaded ? (
        [
          <h2 key={1} className="mb-3">
            {category
              ? `Listado de productos por categoría: ${category.name}`
              : "Listado de productos:"}
          </h2>,
          filterProducts.length === 0 ? (
            <Alert key={2} variant="danger" align="left" className={"mt-3"}>
              No hay productos para mostrar.
            </Alert>
          ) : (
            <ItemList key={3} data={filterProducts} />
          ),
        ]
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner align="center" animation="border" variant="info" />
        </div>
      )}
    </Container>
  );
};
