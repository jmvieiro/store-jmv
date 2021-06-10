import { NAME_APP } from "../../utils/const";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidgetComponent } from "../CartWidgetComponent";
import logo from "./logo.png"; // with import

export const NavBarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <img
            src={logo}
            alt={NAME_APP}
            title={NAME_APP}
            style={{ maxWidth: 150 }}
            className="d-inline-block align-top"
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#musica">Música</Nav.Link>
              <Nav.Link href="#moda">Moda</Nav.Link>
              <Nav.Link href="#libreria">Librería</Nav.Link>
              <NavDropdown title="Indumentaria" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Femenina</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Masculina
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Unisex</NavDropdown.Item>
                {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#accesorios">Accesorios</Nav.Link>
              <Nav.Link href="#cart">
                <CartWidgetComponent />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
