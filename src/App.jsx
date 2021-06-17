import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function App() {
   return (
    <>
      <header>
        <NavBar />
      </header>
      <section className="container" style={{ marginTop: "4rem" }}>
        <ItemListContainer greeting={"Bienvenidos"} />
      </section>
      <footer></footer>
    </>
  );
}

export default App;
