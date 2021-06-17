import { useEffect, useState } from "react";
import { getProductsMeLi } from "../utils/const.jsx";
import Alert from "react-bootstrap/Alert";
import { ItemList } from "../components/ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
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
    waitForData();
  }, []);

  productos.length > 0 ? console.log(productos) :  console.log("a");
  return (
    <>
      <h2>{greeting}</h2>
      <Alert variant="info">
        {productos.length === 0
          ? "Cargando"
          : "Listo, se obtuvieron los productos de Mercado Libre."}
      </Alert>
      {productos.length > 0 ? <ItemList data={productos} /> : ""}
    </>
  );
};
