import { ButtonComponent } from "../ButtonComponent";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export const CardComponent = ({ data }) => {
  return (
    <>
      <CardColumns>
        {data.map(({ category, title, text, price, id }) => (
          <Card
            key={id}
            id={id}
            text={"white"}
            className="bg-dark mb-2 p-3 text-center"
          >
            <Card.Header>{category}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Card.Text>$ {price}</Card.Text>
              <ButtonComponent text="Agregar al carrito" id={id} />
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </>
  );
};
