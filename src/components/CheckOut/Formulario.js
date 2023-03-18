import React, { useState } from 'react';
import "./formulario.css"
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useCartContext } from "../../context/CartContext"


const formBase = {
  nombre: '',
  email: '',
  telefono: ''};

const Formulario = () => {
  const [form, setForm] = useState(formBase);

  const [id, setId] = useState();

  const {carrito, totalCompra} = useCartContext();     

  const submitForm = (ev) => { 
    const orden = { 
      comprador: form,          
      items : carrito.map(prod => ({Id: prod.id, Nombre: prod.nombre, Cantidad: prod.cantidad, Precio: prod.precio})),
      total: totalCompra(),
      fecha: serverTimestamp()
  };  
    ev.preventDefault();
    const bd = getFirestore();
    const OrdersCollection = collection(bd, 'orders');
    addDoc(OrdersCollection, orden).then((data) => {       
      setForm(formBase);
      setId(data.id);
    });
  };

  const inputData = (ev) => {  
    const { name, value } = ev.target;    
    setForm({ ...form, [name]: value});
  };

  return (
    <div className="contenedor"> 
      {typeof id !== "undefined" ? (
        <p className="ordenId"><b>Su orden de compra ha sido procesada con el ID: {id}</b></p>
      ) : ("")}
      <form onSubmit={submitForm}>
        <div className="itemForm">
          <label htmlFor="nombre"><b>Nombre Completo :</b>  </label>
          <input
            name="nombre"
            id="nombre"
            value={form.nombre}
            onChange={inputData}            
            className="input1"
            required
          />
        </div>
        <div className="itemForm">
          <label htmlFor="email"><b>Email :</b>  </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputData}            
            className="input2"
            required
          />
        </div>
        <div className="itemForm">
        <label htmlFor="telefono"><b>Telefono :</b>  </label>
          <input            
            name="telefono"
            id="telefono"
            value={form.telefono}
            onChange={inputData}            
            className="input3"
            required
          />
        </div>
        <button className="btn btn-dark compra">COMPRAR</button>
      </form>
    </div>
  );
};
export default Formulario;
