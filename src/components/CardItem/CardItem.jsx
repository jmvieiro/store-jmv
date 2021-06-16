import { Card, CardColumns, Badge, Row, Col } from "react-bootstrap";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import accounting from "accounting";
import "./styles.scss";

export const CardItem = ({ data }) => {
  return (
    <CardColumns>
      {data.map(({ category, title, text, price, img, id, stock }) => (
        <Card key={id} id={id} text="white" className="mb-2 p-3">
          <Card.Header>
            <Row>
              <Badge variant="success">{category}</Badge>
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
            <ItemCounter stock={stock} initial={1} />
          </Card.Footer>
        </Card>
      ))}
    </CardColumns>
  );
};
