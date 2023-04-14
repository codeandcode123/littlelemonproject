import "../App.css";

function SpecialCard(props) {
  const imagePath = "images/" + props.image;

  return (
    <div className="special-card">
      <img src={imagePath} alt="food" />
      <div className="special-card-info">
        <h3>{props.name}</h3>
        <div className="special-card-info-price">${props.price}</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="special-card-delivery">Order a delivery</div>
    </div>
  );
}

export default SpecialCard;
