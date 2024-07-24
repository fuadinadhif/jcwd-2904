import "./Button.css";

function Button() {
  const list = ["GitHub", "Twitter", "LinkedIn", "Facebook", "Plurk"];

  return (
    <div className="button-container">
      {list.map((item) => (
        <button>{item}</button>
      ))}
    </div>
  );
}

export default Button;
