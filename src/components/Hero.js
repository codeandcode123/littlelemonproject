import "../App.css";
import Nav from "./Nav";
//import { useNavigate } from "react-router";
import { useNavigate, Routes, Route, Router } from "react-router-dom";

function Hero(props) {
  const navigate = useNavigate();

  function handleReserveTableClick(event) {
    navigate("/booktable");
  }

  return (
    <div className="hero">
      <div className="hero-box">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
          <button onClick={handleReserveTableClick}>Reserve a Table</button>
        </div>
        <div></div>
        <img src="images/food.jpg" alt="food" className="nav-item" />
      </div>
    </div>
  );
}

export default Hero;
