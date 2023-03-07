import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { cantidadProductos } = useCartContext();

    return (<Link to="/cart" className="cart">🛒<span>{cantidadProductos() || ""}</span></Link>);
};
export default CartWidget;