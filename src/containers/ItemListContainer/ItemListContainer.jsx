import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Alert, Container } from "react-bootstrap";
import { ItemList } from "../../components/ItemList/ItemList";
import { Link } from "react-router-dom";
import "./styles.scss";
import { getCategoryById, getProductsByCategory } from "../../firebase/client";
import { Loader } from "../../components/Loader/Loader";
import { ShopContext } from "../../context/ShopContext/ShopContext";

export const ItemListContainer = () => {
  const { categories, products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const waitForData = async (id) => {
      let cat = null;
      if (id) {
        cat = categories.find((c) => c.id === id);
        if (!cat) cat = await getCategoryById(id);
        let prods = products.filter((p) => p.category === id);
        if (prods.length !== 0) setFilterProducts(prods);
        else setFilterProducts(await getProductsByCategory(id));
      } else setFilterProducts(products);
      setCategory(cat);
      setLoading(false);
    };
    waitForData(id);
  }, [id, categories, products]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
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
            <h2 key={1} className="mb-3">
              {category ? `${category.name}` : ""}
            </h2>
            {!filterProducts || filterProducts.length === 0 ? (
              <Alert key={2} variant="danger" align="left" className={"mt-3"}>
                No hay productos para mostrar.
              </Alert>
            ) : (
              <ItemList key={2} data={filterProducts} />
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};
