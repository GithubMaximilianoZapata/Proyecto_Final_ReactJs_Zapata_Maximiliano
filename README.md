# Mary Delicatessen React App
![Coderhouse](https://www.coderhouse.com/imgs/ch.svg)

Este proyecto fue iniciado con: [Create React App](https://github.com/GithubMaximilianoZapata/Proyecto_Final_ReactJs_Zapata_Maximiliano).


El directorio del proyecto se ejecuta con:

### `npm start`

Corre la App en modo desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

Se trata de una App proyecto de mi estudio de React JS en    donde desarrollo un mini E-COMMERCE de Delicatessen caseras realizada por un persona para vender online. No es una tienda existente, por lo que el Footer no tiene redes sociales reales, se colocan para poder linkear en caso real de que existiesen. En la parte superior vemos un menu desplegable con su "Inicio" donde vemos el catalogo completo de productos (Tambien presionando el logo de la tienda, logo copiado como ejemplo) y sus distintas categorias. A la derecha vemos el carrito de compras que nos muestra nuestras selecciones de productos a comprar. Cada producto muestra su detalle con el boton "Mas Informacion" y tambien con un click en la imagen del producto (hice una mini prueba de usuario y la mayoria clckiaba la imagen antes que el boton por eso el Link en ambos eventos). En el detalle podemos ver todo acerca del producto seleccionar cantidades del mismo (control de stock codeado en "agregarProducto" en el contexto) y nos permite agregarlo al carrito e ir hacia el o seguir comprando. En el carrito podemos ver lo seleccionado con su subtotal en caso de que haya mas de un producto los muestra por separado para luego mostrar el Total General de la compra al final. Se puede eliminar el prodcuto que se desee en forma individual o se puede limpiar el carrito completo, nos permite seguir comprando o ir a Terminar la Compra. Cuando se decide terminar la compra se debe completar un formulario (de manera obligatoria) para enviar nuestra orden de compra al Firestore el cual devuelve un numero de ID de compra creando una coleccion "ordes" con toda la informacion solicitada.
En cuanto a la logica de armado hay dos carpetas princiaples "components" y "context", en la primera estan todos los componentes con su desarrollo y estilos de cada parte de la app y en la segunda el desarrollo del contexto para el carrito y los datos necesarios para el flujo de la app:

|Nombre del Componente| Breve Descripcion                                           |
|---------------------|-------------------------------------------------------------|
| ItemListContainer   | LLamado de productos a FireBase, enrrutado y categorias     |
| ItemList            | Mapea prop del Container para mostrar los items             |
| Item                | Genera la card de cada producto con informacion de ItemList |
| ItemDetailContainer | Busca en FireBase el producto sleccionado para el ItemDetail|
| ItemDetail          | Muestra el detalle del producto seleccionado y su Counter   | 
| Counter             | Logica para el manejo de las cantidades de producto         |
| Cart                | Toda logica de carrito,su montaje y sus detalles, contexto  |
| CartWidget          | Imagen de carrito para clickear y ver carrito, contexto     |
| context/CartContext | Logica completa del contexto para uso de datos en la app    |
| Loading             | Imagen para demoras de carga en la informacion              |
| NavBar              | Categorias,catalogo,logo,widget, rutas, guia de la app      |
| Footer              | Contacto para poder linkear redes solciales                 |
| CheckOut            | Formulario final para envio orden de compra FireStore       |
| App.js              | Enrrutado general y montajes de componentes y toda la app   |

Se aplico JavaScript objetos y sus metodos, array y sus metodos, condicionales, algo de sugar sintax como operadores ternarios, spread operator y desestructuracion. Componentes separados con estilos separados, imagenes en la carpeta Public para un uso sencillo sin url. Promesas y el uso de las funciones de FireBase para los pedidos a la base de datos, se construyo la Base de Datos en FireBase manualmente item por item para su posterior pedido. Se usaron algunas estructuras y estilos de Bootstrap 5 y FireBase para uso del Backend.
Con la ayuda del profesor Felix Blanco, Pablo Kreick y los tutores del CoderAsk pude desarrollar esta mini app y pude aprender muchas cosas!! MUCHAS GRACIAS!!

