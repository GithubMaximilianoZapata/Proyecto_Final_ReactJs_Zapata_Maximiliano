import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const limpiarCarrito = () => setCarrito([]);

    const removerProducto = (id) => setCarrito(carrito.filter((prod) => prod.id !== id));

    const agregarProducto = (item, cantidad) => {
        let newCarrito;
        let producto = carrito.find((prod) => prod.id === item.id);
        if (producto) {
            producto.cantidad += cantidad
            newCarrito = [...carrito];
        } else {
            producto = { ...item, cantidad }
            newCarrito = [...carrito, producto]
        };
        setCarrito(newCarrito);
    };

    const totalCompra = () => { return (carrito.reduce((acc, el) => acc + el.cantidad * el.precio, 0)); };

    const cantidadProductos = () => { return (carrito.reduce((acc, el) => acc + el.cantidad, 0)); };

    return (
        <CartContext.Provider value={{
            limpiarCarrito,
            removerProducto,
            agregarProducto,
            totalCompra,
            cantidadProductos,
            carrito
        }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;