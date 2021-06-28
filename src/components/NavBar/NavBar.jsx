import { NAME_APP } from "../../utils/const";
import { Navbar, Nav } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./logo.png"; // with import
import "./styles.scss";
import { MenuItems } from "./MenuItems";
import { Auth } from "../Auth/Auth";

export const NavBar = ({ cart }) => {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg">
      <div className="container">
        <img
          src={logo}
          alt={NAME_APP}
          title={NAME_APP}
          style={{ maxWidth: 160 }}
          className="mr-2"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1">
            {MenuItems.map((item) => {
              return (
                <Nav.Link href={item.href} key={item.href}>
                  {item.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav>
            <Nav.Item>
              <Auth />
            </Nav.Item>
            <Nav.Link href="#cart">
              <CartWidget cantidad={cart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
