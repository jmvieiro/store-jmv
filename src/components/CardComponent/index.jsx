import { ButtonComponent } from "../ButtonComponent";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import accounting from "accounting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardComponent = ({ data }) => {
  return (
    <>
      <CardColumns>
        {data.map(({ category, title, text, price, img, id }) => (
          <Card key={id} id={id} text={"white"} className="bg-dark mb-2 p-3">
            <Card.Header>
              <Row>
                <Badge variant="info">{category}</Badge>
              </Row>
              <Row>
                <Card.Img
                  className="mt-1"
                  variant="top"
                  src={img}
                  alt={title}
                  title={title}
                />
              </Row>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{title}</Card.Title>
                </Col>
                <Col align="right">
                  <Card.Text>{accounting.formatMoney(price, "$")}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>{text}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col align="right">
                  <ButtonComponent
                    text="Agregar al carrito"
                    id={id}
                    variant="primary"
                    icon={
                      <FontAwesomeIcon
                        icon={"cart-plus"}
                        title="Agregar al carrito"
                      />
                    }
                  />
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </>
  );
};
