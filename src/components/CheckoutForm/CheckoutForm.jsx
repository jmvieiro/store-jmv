import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { CartContext } from "../../context/CartContext/CartContext";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { toast } from "react-toastify";
import { useEffect } from "react";
import "./styles.scss";

export const CheckoutForm = () => {
  const { createOrder } = useContext(CartContext);
  const [form, setForm] = useState({ email: "", name: "", phone: "" });
  useEffect(() => {
    document.getElementById("checkoutForm.name").focus();
  }, []);
  const confirmarCarrito = () => {
    if (!form.name) {
      toast.error("😓 Ingresá tu nombre para completar el checkout.");
      document.getElementById("checkoutForm.name").focus();
      return;
    }
    if (!form.email.includes("@")) {
      toast.error("😓 Ingresá un email válido para completar el checkout.");
      document.getElementById("checkoutForm.email").focus();
      return;
    }
    if (!form.phone) {
      toast.error("😓 Ingresá un teléfono para completar el checkout. ");
      document.getElementById("checkoutForm.phone").focus();
      return;
    }
    createOrder(form.email, form.name, form.phone);
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="checkoutForm.name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            onInput={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="checkoutForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="nombre@ejemplo.com"
            onInput={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="checkoutForm.phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="1112345678"
            onInput={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="checkoutForm.confirmar">
          <ButtonComponent
            text="Confirmar"
            style={{ height: "100%" }}
            variant="success"
            icon={
              <FontAwesomeIcon icon={"cart-plus"} title="Confirmar carrito" />
            }
            onClick={confirmarCarrito}
            block={true}
          ></ButtonComponent>
        </Form.Group>
      </Form>
    </>
  );
};
