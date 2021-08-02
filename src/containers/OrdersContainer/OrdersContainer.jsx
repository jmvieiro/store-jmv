import { Container } from "react-bootstrap";
import { getOrders } from "../../firebase/client";
import { Loader } from "../../components/Loader/Loader";
import { useEffect, useState } from "react";

export const OrdersContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const waitForData = async () => {
      let aux = await getOrders();
      setLoading(false);
      document.getElementById("json").textContent = JSON.stringify(
        aux,
        undefined,
        2
      );
    };
    waitForData();
  }, []);

  return (
    <Container>
      {loading ? <Loader /> : <pre style={{ color: "white" }} id="json"></pre>}
    </Container>
  );
};
