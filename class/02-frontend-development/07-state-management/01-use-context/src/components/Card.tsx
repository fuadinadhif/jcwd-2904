import Button from "./Button";
import "./Card.css";
import Profile from "./Profile";

function Card() {
  return (
    <div className="card-container">
      <Profile />
      <Button />
    </div>
  );
}

export default Card;
