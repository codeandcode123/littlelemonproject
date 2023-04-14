import "../App.css";
import Hero from "./Hero.js";
import Specials from "./Specials";
import BookingPage from "./BookingPage";
import React, { useState, useRef, useReducer } from "react";
import { fetchAPI, submitAPI } from "./apifunctions";
import { useNavigate, Routes, Route, Router } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
import BookingForm from "./BookingForm";
import HomePage from "../HomePage";

function updateTimes(state, action) {
  console.log(
    "updateTimes: type=" + action.type + " | payload=",
    action.payload
  );

  if (action.type === "DATE_CHANGE") return fetchAPI(new Date(action.payload));

  return ["01:00"];
}

function initializeTimes() {
  const todayDate = new Date();
  //return fetchAPI(todayDate);
  //console.log("fetchAPI: ", fetchAPI(todayDate), todayDate);
  return ["17:02", "18:00", "19:00", "20:00"];
}

function Main(props) {
  /*
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]);
*/
  const navigate = useNavigate();

  /*
  function submitForm(formData) {
    if (submitAPI(formData)) navigate("/booked");
  }
*/
  function testNavigate() {
    navigate("/booked");
  }
  //const initialTimes = ["17:11", "18:00", "19:00", "20:00"];

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    {},
    initializeTimes
  );
  //const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

  React.useEffect(() => {
    console.log("availableTimes:", availableTimes);
  }, [availableTimes]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booktable"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchFunction={dispatch}
            />
          }
        />
        <Route path="/book-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );

  /*
  return (
    <>
      <button data-testid="add-one" onClick={testNavigate}>
          Add one 
      </button>

      <Routes>
        <Route exact path="/">
          <BookingPage
            availableTimes={availableTimes}
            dispatchFunction={dispatch}
          />
        </Route>
        <Route path="/booked">
          <ConfirmedBooking />
        </Route>
      </Routes>
    </>
  );
  */
}

/*
home page:
<Hero />
<Specials />
*/

export default Main;
