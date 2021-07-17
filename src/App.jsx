import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { NavBarContainer } from "./containers/NavBarContainer/NavBarContainer";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetailContainer";
import { ItemCheckoutContainer } from "./containers/ItemCheckoutContainer/ItemCheckoutContainer";
import { FooterContainer } from "./containers/FooterContainer/FooterContainer";
import { CartProvider } from "./context/CartContext/CartContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SHOW_TOAST } from "./utils/const";
library.add(fab, fas);

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <header style={{ marginBottom: "5rem" }}>
            <NavBarContainer />
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route exact path="/category/:id" component={ItemListContainer} />
              <Route exact path="/item/:id" component={ItemDetailContainer} />
              <Route exact path="/cart" component={ItemCheckoutContainer} />
            </Switch>
          </div>
          <footer className="footer">
            <FooterContainer />
          </footer>
        </BrowserRouter>
      </CartProvider>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={SHOW_TOAST}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
