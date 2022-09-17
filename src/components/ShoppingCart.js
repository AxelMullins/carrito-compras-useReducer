import { useReducer } from "react";
import { Container, Row } from "react-bootstrap";
import { TYPES } from "../actions/actions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import CartItem from "./CartItem";
import Product from "./Product";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCT, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <Container>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <Row>
        {products.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            id={item.id}
            addToCart={addToCart}
          />
        ))}
      </Row>
      <h3>Carrito</h3>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
            deleteFromCart={deleteFromCart}
          />
        ))}
      </div>
      <button onClick={clearCart}>Limpiar carrito</button>
    </Container>
  );
};

export default ShoppingCart;
