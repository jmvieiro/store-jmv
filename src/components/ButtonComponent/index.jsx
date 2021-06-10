import Button from "react-bootstrap/Button";

export const ButtonComponent = ({ text, id }) => {
  return (
    <>
      <Button type="button" variant="primary" >{text}</Button>
    </>
  );
};
