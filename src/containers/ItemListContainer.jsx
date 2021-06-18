import { useEffect, useState } from "react";
import { getProductsMeLi } from "../utils/const.jsx";
import { Alert, Row, Col } from "react-bootstrap";
import { ItemList } from "../components/ItemList/ItemList";
import { ButtonComponent } from "../components/ButtonComponent/ButtonComponent";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [alert, setAlert] = useState(false);

  // useEffect(() => {
  //   const waitForData = async () => {
  //     let data = await getProductsMeLi("zapatillas");
  //     let aux = data.map((element) => {
  //       return {
  //         title: element.title,
  //         img: element.thumbnail,
  //         price: element.price,
  //         stock: element.available_quantity,
  //         category: element.domain_id,
  //       };
  //     });
  //     setProductos(aux);
  //   };
  //   waitForData();
  // }, []);

  function getMeLi() {
    const waitForData = async () => {
      let data = await getProductsMeLi("zapatillas");
      let aux = data.map((element) => {
        return {
          title: element.title,
          img: element.thumbnail,
          price: element.price,
          stock: element.available_quantity,
          category: element.domain_id,
        };
      });
      setProductos(aux);
    };
    setProductos([]);
    setAlert(true);
    waitForData();
  }

  function getData() {
    setProductos([]);
    setAlert(true);
    let value = new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = [
          {
            category: "Indumentaria",
            title: "Zapatilla",
            price: 825,
            stock: 4,
            img: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatilla-adidas-retrorun-mujer-violeta-100010eg4223001-1.jpg",
          },
          {
            category: "Indumentaria",
            title: "Remera",
            price: 2500,
            stock: 10,
            img: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_azul_lisa_2.jpg",
          },
          {
            category: "Indumentaria",
            title: "Patalón",
            price: 3500,
            stock: 0,
            img: "https://renzauniformes.com/wp-content/uploads/2021/03/garys-704800-pantalon-mujer-bols--americano-albero.jpg",
          },
        ];
        resolve(product);
      }, 3000);
    })
      .then((result) => {
        setProductos(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h2>{greeting}</h2>
      <Row>
        <Col lg={6}>
          <ButtonComponent
            text="Get productos using getMeLi"
            variant="info"
            onClick={getMeLi}
            block={true}
          />
        </Col>
        <Col lg={6}>
          <ButtonComponent
            text="Get products using getData"
            variant="info"
            onClick={getData}
            block={true}
          />
        </Col>
      </Row>

      <Alert variant="info" className={alert ? "d-block mt-3" : "d-none"}>
        {productos.length === 0
          ? "Cargando"
          : "Listo, se obtuvieron los productos."}
      </Alert>

      <Row className="mt-3">
        <Col>{productos.length > 0 ? <ItemList data={productos} /> : ""}</Col>
      </Row>
    </>
  );
};
