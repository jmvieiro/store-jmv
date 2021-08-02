import { Button, Spinner } from "react-bootstrap";
import { TextOnlyXs } from "../TextOnlyXs/TextOnlyXs";

export const ButtonComponent = ({
  className,
  text,
  id,
  variant,
  icon,
  onClick,
  disabled,
  block,
  style,
  loading = false,
  textOnlyXs = false,
}) => {
  let _text = text && icon ? `${text}  ` : text;
  return (
    <>
      <Button
        type="button"
        className={className}
        id={id}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        block={block}
        style={style}
      >
        {loading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="mr-2"
          />
        )}
        {textOnlyXs ? <TextOnlyXs text={_text} /> : _text}
        {icon}
      </Button>
    </>
  );
};
