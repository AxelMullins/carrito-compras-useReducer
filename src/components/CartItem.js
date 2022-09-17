import React from "react";

const CartItem = ({ name, price, id, quantity, deleteFromCart }) => {
  return (
    <div>
      <h4>{name}</h4>
      <h5>$ {price * quantity}</h5>
      <h5>Cantidad: {quantity}</h5>
      <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
      <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;
