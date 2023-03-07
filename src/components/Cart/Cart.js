import "./cart.css"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { carrito, totalCompra, limpiarCarrito } = useCartContext();

  if (carrito.length === 0) {
    return (
      <div>
        <p>Tu carrito esta vacio</p>
        <Link to="/">IR A COMPRAR</Link>
      </div>
    )
  }
  return (
    <div>
      {carrito.map(item => <ItemCart key={item.id} item={item} />)}
      <h3><strong>TOTAL DE TU COMPRA: $ {totalCompra()}</strong></h3>
      <Link to="/"><button type="button" className="btn btn-dark button3">Seguir Comprando</button></Link>
      <button type="button" className="btn btn-dark button3" onClick={() => limpiarCarrito()}>Limpiar Carrito</button>
      <button type="button" className="btn btn-dark button3">Ir a Pagar</button>
    </div>
  );
};
export default Cart;