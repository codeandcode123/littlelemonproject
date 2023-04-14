import "../App.css";
import { useNavigate, Routes, Route, Router } from "react-router-dom";

function Nav(props) {
  const links = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];

  const navigate = useNavigate();

  function goHome(event) {
    navigate("/");
  }

  return (
    <nav className="nav">
      <div className="nav-item"></div>
      <div className="nav-item"></div>
      <img
        src="images/Logo.svg"
        alt="logo"
        className="nav-item"
        onClick={goHome}
        aria-label="Home Page"
      />
      {links.map((link) => {
        return (
          <div className="nav-item">
            <a href="#">{link}</a>
          </div>
        );
      })}
      <div className="nav-item"></div>
      <div className="nav-item"></div>
    </nav>
  );
}

export default Nav;
