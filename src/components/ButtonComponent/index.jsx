import "./styles.css";

export const ButtonComponent = ({ text, isActive }) => {
  return (
    <>
      <button style={{ backgroundColor: isActive ? 'green' : 'red' }}>
        {text}
      </button>
    </>
  );
};
