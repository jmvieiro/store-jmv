import { useEffect, useState } from "react";
import { getProductsMeLi } from "../../utils/const";
import { Alert, Row, Col } from "react-bootstrap";
import { ItemList } from "../ItemList/ItemList";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { products } from "../../utils/products";

export const ItemListContainer = ({ greeting, onAdd }) => {
  const [productos, setProductos] = useState([]);
  const [alert, setAlert] = useState(false);
  const [searchMeli, setSearchMeli] = useState(false);
  const [searchLocal, setSearchLocal] = useState(false);

  useEffect(() => {
    if (searchMeli) {
      setProductos([]);
      setAlert(true);
      setSearchMeli(false);
      const waitForData = async () => {
        let data = await getProductsMeLi("zapatillas");
        let aux = data.map((element) => {
          return {
            id: element.id,
            title: element.title,
            img: element.thumbnail,
            price: element.price,
            stock: element.available_quantity,
            category: element.domain_id,
          };
        });
        setProductos(aux);
      };
      waitForData();
    }
    if (searchLocal) {
      setProductos([]);
      setAlert(true);
      setSearchLocal(false);
      simulateNetworkRequest().then(() => {
        setProductos(products);
      });
    }
  }, [productos, searchLocal, searchMeli, alert]);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const handleClickMeli = () => setSearchMeli(true);
  const handleClickLocal = () => setSearchLocal(true);

  return (
    <>
      <h2 className="mb-3" text="center">
        {greeting}
      </h2>

      <Row>
        <Col lg={6}>
          <ButtonComponent
            text={`Traer productos de MeLi`}
            variant="info"
            onClick={handleClickMeli}
            block={true}
            className="mt-1"
          />
        </Col>
        <Col lg={6}>
          <ButtonComponent
            text="Traer productos local"
            variant="info"
            onClick={handleClickLocal}
            block={true}
            className="mt-1"
          />
        </Col>
      </Row>

      <Alert variant="info" className={alert ? "d-block mt-3" : "d-none"}>
        {productos.length === 0
          ? "Cargando"
          : "Listo, se obtuvieron los productos."}
      </Alert>

      {productos.length > 0 ? (
        <Row className="mt-3">
          <Col>
            <ItemList data={productos} onAdd={onAdd} />
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
};
