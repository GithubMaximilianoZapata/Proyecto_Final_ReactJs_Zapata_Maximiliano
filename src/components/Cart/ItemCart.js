import "./itemCart.css"
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({item}) => {
  const {removerProducto} = useCartContext();  
    
  return (
    <div className="card">
      <div className="card-header">
        <h2>PRODUCTO</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text">Cantidad: {item.cantidad} Kg/Unid.</p>
        <p className="card-text">Precio: $ {item.precio}</p>
        <p className="card-text">Subtotal: $ {item.cantidad * item.precio} </p>
        <button type="button" className="btn btn-dark button3" onClick = {()=> removerProducto(item.id)}>Eliminar Producto</button>                
      </div>
    </div>
  );
};
export default ItemCart;