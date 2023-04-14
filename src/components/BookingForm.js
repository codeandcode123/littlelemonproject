import { useState, useRef } from "react";
import { useNavigate, Routes, Route, Router } from "react-router-dom";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const availableTimes = props.availableTimes;
  //console.log("BookingForm availableTimes:", availableTimes);

  const dispatch = props.dispatchFunction;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "DATE_CHANGE", payload: newDate });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      `Reservation made for ${date} at ${time}. n guests: ${guests}; occasion: ${occasion}`
    );

    navigate("/book-confirmed");
  };

  return (
    <form className="booking-form redborder" onSubmit={handleSubmit}>
      <h2>Book Now!</h2>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " onChange={handleTimeChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={handleGuestsChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
