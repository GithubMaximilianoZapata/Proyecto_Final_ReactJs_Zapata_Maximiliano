import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [prod, setProd] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((res) => {
        categoryId ? setProd(res.filter((prod) => prod.categoria === categoryId)) : setProd(res)
      })
      .catch((error) => console.log(error));
  }, [categoryId]);
  return <ItemList prod={prod} />;
};
export default ItemListContainer;