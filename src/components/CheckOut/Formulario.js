import React, { useState } from 'react';
import "./formulario.css"
import { getFirestore, collection, addDoc } from 'firebase/firestore';
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
      dia: Date.now()
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
    <div>
      {typeof id !== "undefined" ? (
        <p>Su orden de compra ha sido procesada con el ID: {id}</p>
      ) : ("")}
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="nombre">Nombre Completo: </label>
          <input
            name="nombre"
            id="nombre"
            value={form.nombre}
            onChange={inputData}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputData}
          />
        </div>
        <div>
        <label htmlFor="telefono">Telefono: </label>
          <input            
            name="telefono"
            id="telefono"
            value={form.telefono}
            onChange={inputData}
          />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default Formulario;
