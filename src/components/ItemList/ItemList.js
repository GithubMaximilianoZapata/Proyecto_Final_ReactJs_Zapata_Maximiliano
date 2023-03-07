import Item from "../Item/Item"
import "./itemList.css"

const ItemList = ({ prod }) => {
    return (
        <div className="container cards">
            <div className="row row-cols-1 row-cols-md-3 g-4 pd-5">
                {prod.map((prod) => {
                    return <Item key={prod.id} prod={prod} />
                })};
            </div>
        </div>
    );
};
export default ItemList;