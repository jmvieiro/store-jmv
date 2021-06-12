import Button from "react-bootstrap/Button";

export const ButtonComponent = ({ text, id, variant, icon }) => {
  return (
    <>
      <Button type="button" id={id} variant={variant}>
        {text} {icon}
      </Button>
    </>
  );
};
