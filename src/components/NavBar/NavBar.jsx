import { NAME_APP } from "../../utils/const";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./logo.png"; // with import
import "./styles.scss";
import { MenuItems } from "./MenuItems";

export const NavBar = () => {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg">
      <div className="container">
        <img
          src={logo}
          alt={NAME_APP}
          title={NAME_APP}
          style={{ maxWidth: 160 }}
          className="d-inline-block align-top"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {MenuItems.map((item) => {
              return (
                <Nav.Link key={item.href} href={item.href}>
                  {item.name}
                </Nav.Link>
              );
            })}
            <Nav.Link href="#cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
