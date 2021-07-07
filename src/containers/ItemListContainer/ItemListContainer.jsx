import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Alert, Container, Spinner } from "react-bootstrap";
import { ItemList } from "../../components/ItemList/ItemList";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext/ShopContext";
import "./styles.scss";

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
      let p = id
        ? products.filter((p) => p.category === parseInt(id))
        : products;
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
      <Row>
        <Col lg={3} className="categories d-none d-lg-block">
          <h5 className="mb-3">Categorías</h5>
          <ul className=" list-unstyled nav-links">
            <li>
              <Link to={`/`} style={{ textDecoration: "none" }}>
                Todos los productos{" "}
              </Link>
            </li>
            {categories.map((cat) => {
              return (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {cat.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col lg={9}>
          {loaded ? (
            [
              <h2 key={1} className="mb-3">
                {category ? `${category.name}` : ""}
              </h2>,
              filterProducts.length === 0 ? (
                <Alert key={2} variant="danger" align="left" className={"mt-3"}>
                  No hay productos para mostrar.
                </Alert>
              ) : (
                <ItemList key={2} data={filterProducts} />
              ),
            ]
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner align="center" animation="border" variant="info" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
