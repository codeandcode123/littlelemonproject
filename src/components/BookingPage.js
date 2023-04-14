import "../App.css";
import BookingForm from "./BookingForm";

function BookingPage(props) {
  return (
    <div className="booking-page">
      <div></div>
      <BookingForm
        availableTimes={props.availableTimes}
        dispatchFunction={props.dispatchFunction}
      />
      <div></div>
    </div>
  );
}

export default BookingPage;
