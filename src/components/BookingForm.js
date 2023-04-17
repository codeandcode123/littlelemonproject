import { useState, useRef } from "react";
import { useNavigate, Routes, Route, Router } from "react-router-dom";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const [errorDate, setErrorDate] = useState("");

  const availableTimes = props.availableTimes;
  //console.log("BookingForm availableTimes:", availableTimes);

  const dispatch = props.dispatchFunction;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setErrorDate("");
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

    let errorFound = false; // use this boolean because the state vars are not updated while this function is executing.

    // Date
    let todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    let bookDate = new Date(date);
    bookDate.setHours(0, 0, 0, 0);
    bookDate.setDate(bookDate.getDate() + 1);

    if (bookDate.getTime() < todayDate.getTime()) {
      errorFound = true;
      setErrorDate("The date can't be in the past");
    }

    // Time

    /*
    console.log(
      `errorDate.length: ${
        errorDate.length
      } errorDate: ${errorDate} today: ${todayDate.getTime()}, date: ${bookDate.getTime()} or ${date}`
      // `errorDate.length: ${errorDate.length} errorDate: ${errorDate} today: ${todayDate}, date: ${bookDate} or ${date}`
    );
*/
    if (errorFound) return;

    console.log(
      `Reservation made for ${date} at ${time}. n guests: ${guests}; occasion: ${occasion}`
    );

    navigate("/book-confirmed");
  };

  return (
    <>
      <div>
        <h2>Book Now!</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>

          <div>
            <input
              className={
                errorDate.length > 0
                  ? "date-input date-error"
                  : "date-input date-correct"
              }
              type="date"
              id="res-date"
              onChange={handleDateChange}
              required
            />
            <div className="error-text">{errorDate}</div>
          </div>

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            onChange={handleTimeChange}
            required
            className="time-input"
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            className="n-of-guests-input"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={handleGuestsChange}
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" onChange={handleOccasionChange} required>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <div></div>
          <input
            type="submit"
            value="Make Your reservation"
            aria-label="submit"
          />
        </form>
      </div>
    </>
  );
}

export default BookingForm;
