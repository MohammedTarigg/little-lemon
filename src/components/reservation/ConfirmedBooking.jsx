export default function ConfirmedBooking({ confirmed, setConfirmed }) {
  let rootHeight = document.getElementById("root").clientHeight + "px",
    rootWidth = document.getElementById("root").clientWidth + "px";
  // console.log(rootHeight);
  return (
    <article
      className={
        confirmed
          ? "confirmed-background confirmed-active"
          : "confirmed-background"
      }
      onClick={() => {
        setConfirmed(!confirmed);
      }}
      style={{ height: rootHeight, width: rootWidth }}>
      <div className="confirmed-main">
        <h2 className="title">Booking Confirmed!!!</h2>
        <p className="subtitle">We are excited to serve you</p>
      </div>
    </article>
  );
}
