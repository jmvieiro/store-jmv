import { ButtonComponent } from "../ButtonComponent";

import "./styles.css";

export const CardComponent = ({ data, title, children }) => {
  // function saludar() {
  //   alert("hola");
  // }
  return (
    <div className="card">
      <h2>{children}</h2>
      <h1>{data.name}</h1>
      <strong>{data.price}</strong>
      <strong>{title}</strong>
      <ButtonComponent text={'Agregar al carrito'} isActive={true}/>
    </div>
  );
};
