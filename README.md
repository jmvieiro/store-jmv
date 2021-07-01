# JMV Store academic project for ReactJS

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the project

[ES]
Este proyecto está siendo llevado a cabo con fines académicos, tratando de respetar las mejores prácticas obtenidas en clase, en el marco del curso de ReactJS brindado por CoderHouse.
Para la realización del proyecto, se instalaron las siguientes dependencias:
- framework de Bootstrap, optimizado para React (https://react-bootstrap.github.io/), para la utilización de componentes pre-armados, con estilos pre-definidos, los cuales fueron adaptados para su mejor uso.
- librería de íconos FontAwesome, optimizada para React (https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): shopping-cart (cart widget), cart-plus (agregar al carrito) y dollar-sign (ir a pasarela de pagos).
- extensión de estilos CSS, SASS (https://create-react-app.dev/docs/adding-a-sass-stylesheet/).
- package de "accounting" para dar formato a los precios (https://www.npmjs.com/package/accounting).
- ruteo para otorgar navegabilidad al proyecto, implementando React Router DOM (https://reactrouter.com/web/guides/quick-start).

{2021-07-01} 
El proyecto consiste en la realización de un e-commerce, denominado JMV Store, a través del cual se podrán probar las principales funcionalidades aprendidas.
Tanto los productos como las categorías son obtenidas utilizando el método "fetch" simulando un request al servidor, incorporando un setTimeout.
Se definieron 3 grandes contenedores, invocados desde App.jsx:
- NavBarContainer: incluido en toda la navegación de la tienda, incorpora el logo de la tienda, las categorías (public/assets/categories.json) y el carrito de compras. Los componentes que lo conforman son: "NavBar" y "CartWidget".
- ItemListContianer: incluido en la ruta "/" y en "/category/:id", para mostrar todos los productos disponibles (public/assets/products.json), y navegar su agrupación por categoría. Los componentes que lo conforman son: "ItemList" que recibe los productos obtenidos del container e itera por cada uno de ellos, invocando los "Item" -card del producto propiamente dicha-.
- ItemDetailContainer: incluido en la ruta "/item/:id" donde se podrá ver el detalle del producto seleccionado. Los componentes que lo conforman son: "ItemDetail", que muestra  título, descripción, precio, stock, imagen, y, el "ItemCounter" que en caso de haber stock disponible, permite incluir la cantidad deseada del producto en el carrito de compras del "NavBar" (en caso de no haber stock disponible, informa dicha situación) y finalmente, visualizar el botón de "Terminar mi compra".
Adicionalmente, se crearon dos componentes como "helpers": "ButtonComponent" para darle personalización al Button nativo de React Bootstrap, y "TextOnlyXs", que se utiliza como propiedad para definir que el texto allí contenido se visualice solo en resoluciones "xs".

[EN]
This project is being carried out for academic purposes, trying to respect the best practices obtained in class, within the framework of the ReactJS course provided by CoderHouse.
To carry out the project, the following dependencies were installed:
- Bootstrap framework, optimized for React (https://react-bootstrap.github.io/), for the use of pre-built components, with pre-defined styles, which were adapted for better use.
- FontAwesome icon library, optimized for React (https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): shopping-cart (cart widget), cart-plus (add to cart) and dollar-sign (go to payment gateway).
- CSS styles extension, SASS (https://create-react-app.dev/docs/adding-a-sass-stylesheet/).
- "accounting" package to format prices (https://www.npmjs.com/package/accounting).
- routing to grant navigability to the project, implementing React Router DOM (https://reactrouter.com/web/guides/quick-start).

{2021-07-01}
The project consists of the realization of an e-commerce, called JMV Store, through which the main functionalities learned can be tested.
Both products and categories are obtained using the "fetch" method, simulating a request to the server, incorporating a setTimeout.
3 large containers were defined, invoked from App.jsx:
- NavBarContainer: included in all the navigation of the store, it incorporates the logo of the store, the categories (publi /assets/categories.json) and the shopping cart. The components that make it up are: "NavBar" and "CartWidget".
- ItemListContianer: included in the "/" path and in "/category/:id", to show all the available products (public/assets/products.json), and navigate their grouping by category. The components that make it up are: "ItemList" that receives the products obtained from the container and iterates through each one of them, invoking the "Item" -card of the product itself.
- ItemDetailContainer: included in the path "/item/:id" where you can see the detail of the selected product. The components that make it up are: "ItemDetail", which shows the title, description, price, stock, image, and the "ItemCounter" that, if there is stock available, allows the desired quantity of the product to be included in the shopping cart of the "NavBar" (if there is no stock available, it reports this situation) and finally, view the "Terminar mi compra" button.
Additionally, two components were created as "helpers": "ButtonComponent" to give customization to the native React Bootstrap Button, and "TextOnlyXs", which is used as a property to define that the text contained therein is displayed only in "xs" resolutions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
