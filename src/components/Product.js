import { Card, Col } from "react-bootstrap";

const Product = ({ name, price, id, addToCart }) => {
  return (
    <Col xs={4}>
      <Card>
        <h4>{name}</h4>
        <h5>$ {price}</h5>
        <button onClick={() => addToCart(id)}>Agregar</button>
      </Card>
    </Col>
  );
};

export default Product;
