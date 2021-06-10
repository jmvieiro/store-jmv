import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent";
import { ItemListContainer } from "./containers/ItemListContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  return (
    <>
      <NavBarComponent />
      <ItemListContainer greeting={"Bienvenidos"} />
    </>
  );
}

export default App;
