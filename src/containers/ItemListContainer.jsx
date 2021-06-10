import { CardComponent } from "../components/CardComponent";

export const ItemListContainer = ({ greeting }) => {
  const product = [
    {
      id: 1,
      category: "Indumentaria",
      title: "Zatapatilla",
      text: "Modelo deportiva",
      price: 8250,
    },
    {
      id: 2,
      category: "Indumentaria",
      title: "Remera",
      text: "Modelo deportiva",
      price: 2500,
    },
    {
      id: 3,
      category: "Indumentaria",
      title: "Patalón",
      text: "Modelo deportiva",
      price: 3500,
    },
  ];
  return (
    <>
      <section className="container">
        <h1>{greeting}</h1>
        <CardComponent data={product} />
      </section>
    </>
  );
};
