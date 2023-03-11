import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import "./itemDetailContainer.css"

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [prod, setProd] = useState();
  useEffect(() => {
    const bd = getFirestore();
    const itemDoc = doc(bd, "items", itemId);
    getDoc(itemDoc)      
      .then((res) => setProd({id : res.id, ...res.data()}))
      .catch((error) => console.log(error));
  }, [itemId]);
  return (
    <>
      {typeof prod === "undefined" ? <div className="cargador"><Loading /></div> : <ItemDetail prod={prod} />}
    </>);
};
export default ItemDetailContainer;