import { CardItem } from "../components/CardItem/CardItem";

export const ItemListContainer = ({ greeting }) => {
  const product = [
    {
      id: 1,
      category: "Indumentaria",
      title: "Zatapatilla",
      text: "Modelo deportiva",
      img: "https://assets.reebok.com/images/w_280,h_280,f_auto,q_auto:sensitive/eb75fbbf35c648bbbdacac21011c93e2_9366/zapatillas-reebok-lite-2.jpg",
      price: 8250,
      stock: 0,
    },
    {
      id: 2,
      category: "Indumentaria",
      title: "Remera",
      text: "Modelo deportiva",
      img: "https://http2.mlstatic.com/D_NQ_NP_702530-MLA43040302030_082020-O.webp",
      price: 2500,
      stock: 3,
    },
    {
      id: 3,
      category: "Indumentaria",
      title: "Patalón",
      text: "Modelo deportiva",
      img: "https://grange.com.ar/image/cache/catalog/HOMBRE/PANTALONES/IMG_9287-283x283.jpg",
      price: 3500,
      stock: 8,
    },
  ];
  return (
    <section className="container" style={{ marginTop: "4rem" }}>
      <h2>{greeting}</h2>
      <CardItem data={product} />
    </section>
  );
};
