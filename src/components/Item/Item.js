
import "./item.css"
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
    const { img, nombre, id} = prod;
    return (
        <>
            <div className="card mb-3 cardProd">
                <Link to= {`/item/${id}`}><img src={img} className="card-img-top" alt={nombre} /></Link>
                <div className="card-body">
                    <h5 className="card-title nombre">{nombre}</h5>
                    <Link to={`/item/${id}`}><button type="button" className="btn btn-dark">Mas Informacion</button></Link>
                </div>
            </div>
        </>
    );
};
export default Item;

