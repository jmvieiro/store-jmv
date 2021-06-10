// import { CardComponent } from "../components/CardComponent";

export const ItemListContainer = ({greeting}) => {
  // const product = [
  //   { id: 1, name: "Zatapatilla", price: 150 },
  //   { id: 2, name: "Campera", price: 250 },
  // ];
  return (
    <>
      <section>
        <h1>{greeting}</h1>
        {/* <CardComponent data={product[0]} /> */}
        {/* <CardComponent data={product[1]} title={'Titulo'}/> */}
      </section>
    </>
  );
};
