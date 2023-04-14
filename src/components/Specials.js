import "../App.css";
import SpecialCard from "./SpecialCard";

function Specials(props) {
  return (
    <>
      <div className="specials-title">
        <div></div>
        <div>
          <h2>This week's specials!</h2>
        </div>
        <button>Online Menu</button>
        <div></div>
      </div>

      <div className="specials-list">
        <div></div>
        <div>
          <SpecialCard
            name="Greek Salad"
            price="12.99"
            image="greek_salad.jpg"
          ></SpecialCard>
        </div>
        <div>
          <SpecialCard name="Bruchetta" price="5.99" image="bruchetta.svg" />
        </div>
        <div>
          <SpecialCard
            name="Lemon Dessert"
            price="4.99"
            image="lemon_dessert.jpg"
          />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Specials;
