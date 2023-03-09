import "./itemCart.css"
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({item}) => {
  const {removerProducto} = useCartContext();  
  const {img, nombre, descripcion, cantidad, precio, id} = item;    
  return (
    <div className="card carrito">
      <div className="card-header itemH">
        <h3 className="producto">PRODUCTO</h3>
      </div>
      <div className="card-body itemCarrito">
        <h4 className="card-title">{nombre}</h4>
        <img src={img} className="img-fluid rounded-start foto" alt={nombre} />
        <p className="card-text"><b>{descripcion}</b></p>
        <p className="card-text"><b>Cantidad:</b> {cantidad} Kg/Unid.</p>
        <p className="card-text"><b>Precio:</b> $ {precio} x kg/unid.</p>
        <p className="card-text"><b>Subtotal:</b> $ {cantidad * precio} </p>
        <button type="button" className="btn btn-dark" onClick ={()=> removerProducto(id)}>Eliminar Producto</button>                
      </div>
    </div>
  );
};
export default ItemCart;