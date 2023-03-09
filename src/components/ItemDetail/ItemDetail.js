import Counter from "../Counter/Counter";
import "./itemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ prod }) => {

    const { img, nombre, descripcion, precio, stock } = prod;

    const { agregarProducto } = useCartContext();

    const [irCarrito, setIrCarrito] = useState(false);

    const onAdd = (cantidad) => {
        setIrCarrito(true);        
        agregarProducto(prod, cantidad);
        
    };
    return (
        <>
            <div className="card mb-3 cardDetail" style={{ max_widht: "200px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{nombre}</h3>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text"><b> Precio:</b> $ {precio} x Kg/Unid.</p>
                            <p className="card-text"><b>Stock Disponible:</b> {stock} Kg/Unid.</p>
                            {irCarrito ? <><Link to="/"><button type="button" className="btn btn-dark button3">Seguir Comprando</button></Link><Link to="/cart"><button type="button" className="btn btn-dark button3">Ir al Carrito</button></Link></> : <Counter stock={stock} onAdd={onAdd} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ItemDetail;


