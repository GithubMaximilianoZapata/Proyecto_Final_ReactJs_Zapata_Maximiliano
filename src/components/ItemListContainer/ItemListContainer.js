import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";


const ItemListContainer = () => {
  const [prod, setProd] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const bd = getFirestore();
    const itemCollection = collection(bd, "items");    
      if (categoryId) { 
        const  queryCategoria = query(itemCollection, where("categoria", "==", categoryId));
        getDocs(queryCategoria)      
       .then((res) => setProd(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
       .catch((error) => console.log(error));
      }
       else{ 
      getDocs(itemCollection)      
      .then((res) => setProd(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
      .catch((error) => console.log(error));
    };
  }, [categoryId]);
  return <ItemList prod={prod} />;
};
export default ItemListContainer;