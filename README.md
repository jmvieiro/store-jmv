# JMV Store proyecto académico sobre ReactJS

## Comenzando con Create React App

Este proyecto fue inicializado con [Create React App] (https://github.com/facebook/create-react-app).

## Sobre el proyecto

Este proyecto fue llevado a cabo con fines académicos, tratando de respetar las mejores prácticas obtenidas en clase, en el marco del curso de ReactJS brindado por CoderHouse.

El proyecto consiste en la realización de un e-commerce, denominado JMV Store, a través del cual se podrán probar las principales funcionalidades aprendidas.

Para la realización del proyecto, se instalaron las siguientes dependencias:

- framework de Bootstrap, optimizado para React (https://react-bootstrap.github.io/), para la utilización de componentes pre-armados, con estilos pre-definidos, los cuales fueron adaptados para su mejor uso.
- librería de íconos FontAwesome, optimizada para React (https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): shopping-cart (cart widget), cart-plus (agregar al carrito), trash-alt (eliminar del carrito) y dollar-sign (ir a confirmación de carrito).
- extensión de estilos CSS, SASS (https://create-react-app.dev/docs/adding-a-sass-stylesheet/).
- package de "accounting" para dar formato a los precios (https://www.npmjs.com/package/accounting).
- ruteo para otorgar navegabilidad al proyecto, implementando React Router DOM (https://reactrouter.com/web/guides/quick-start).
- "Swal" para mensajería al usuario (https://sweetalert2.github.io/).

### Containers y Components principales

Se definieron 4 (cuatro) grandes contenedores, invocados desde App.jsx:

#### - NavBarContainer

Incluido en toda la navegación de la tienda, incorpora el logo de la tienda, las categorías (public/assets/categories.json) y el carrito de compras. Los componentes que lo conforman son: "NavBar" y "CartWidget".

#### - ItemListContianer

Incluido en la ruta "/" y en "/category/:id", para mostrar todos los productos disponibles (public/assets/products.json), y navegar su agrupación por categoría. Los componentes que lo conforman son: "ItemList" que recibe los productos obtenidos del container e itera por cada uno de ellos, invocando los "Item" -card del producto propiamente dicha-.

#### - ItemDetailContainer

Incluido en la ruta "/item/:id" donde se podrá ver el detalle del producto seleccionado. Los componentes que lo conforman son: "ItemDetail", que muestra título, descripción, precio, stock, imagen, y, el "ItemCounter" que en caso de haber stock disponible, permite incluir la cantidad deseada del producto en el carrito de compras del "NavBar" (en caso de no haber stock disponible, informa dicha situación) y finalmente, visualizar el botón de "Terminar mi compra" para acceder al detalle de los productos incluidos en el carrito de compras.

#### - ItemCheckoutContainer

Incluido en la ruta "/cart" donde se podrá ver el detalle de los productos incluidos en el carrito y el total a abonar. Por el momento, no está desarrollada en su totalidad el funcionamiento de este contenedor. Los componentes que lo conforman son: "ItemListCheckout" que recibe los productos incluidos en el carrito e itera por cada uno de ellos, invocando los "ItemCheckout" que muestran cada producto incluido en el carrito, junto con el total a abonar y el botón de confirmar carrito.

### Helpers Components

Adicionalmente, se crearon 3 (tres) componentes como "helpers":

#### - ButtonComponent

Otorga personalización al "Button" nativo de React Bootstrap.

#### - TextOnlyXs

Define que el texto allí contenido se visualice solo en resoluciones "xs".

#### - CheckoutForm

Para completar los datos del comprador (nombre, teléfono y correo electrónico), y tiene el botón para finalizar la compra. El botón para finalizar la compra, envía el carrito y los datos del comprador. De cada producto incluido en el carrito se valida la existencia del mismo (si no existe, se indica que hay que eliminar el producto del carrito) y si existe, se valida que haya stock disponible. Si no hay stock disponible se indica que debe ser modificado del carrito, y si hay stock disponible, se actualiza el stock del producto en la base de datos y se genera la orden, entregando al comprador el ID de la transacción.

### Firebase

Se generó un repositorio en Firebase para alojar los productos del Store.
Dentro de "/src/firebase" se incluye el archivo "client.js" donde se configura la conexión y se resuelven todas las consultas de la aplicación:

#### - getCategories

Obtiene las categorías del Store.

#### - getProducts

Obtiene todos los productos del Store con stock mayor a 0.

#### - getCategoryById (id)

Obtiene una categoría por Id.

#### - getProductById (id)

Obtiene un producto por Id.

#### - getProductsByCategory (id)

Obtiene los productos que se corresponde con un Id de categoría.

#### - updateStock (newOrder)

Verifica la existencia de cada producto incluido en el carrito y verifica que haya stock de cada producto.
Si no encuentra algún producto, alerta de esta situación al usuario y no genera la orden.
Si no hay stock disponible de algún producto, alerta de esta situación al usuario y no genera la orden.
Si ambas validaciones son superadas, se actualiza el stock de cada producto y se invoca al "generateOrder".

#### - generateOrder (newOrder)

Genera la orden, persistiendo la misma en la base de datos y otorga al usuario el Id de la transacción generado.
