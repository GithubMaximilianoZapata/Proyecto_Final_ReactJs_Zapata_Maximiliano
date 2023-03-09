import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProd] = useState();
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((res) => setProd(res.find(e => e.id === parseInt(itemId))))
      .catch((error) => console.log(error))
  }, [itemId]);
  return (
    <>
      {typeof producto === "undefined" ? <Loading /> : <ItemDetail prod={producto} />}
    </>);
};
export default ItemDetailContainer;