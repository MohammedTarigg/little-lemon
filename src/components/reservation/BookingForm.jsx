import { useEffect, useState } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

function BookingForm({
  availableTimes,
  dispatch,
  submitForm,
  confirmed,
  setConfirmed,
}) {
  const initialValues = {
    firstName: { value: "", isTouched: false },
    lastName: { value: "", isTouched: false },
    contactNumber: { value: "", isTouched: false },
    date: { value: "", isTouched: false },
    time: { value: "Time", isTouched: false },
    noOfGuests: { value: "", isTouched: false },
    occasion: { value: "Occasion", isTouched: false },
  };
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    firstName: "First name is required",
    lastName: "Last name is required",
    contactNumber: "Number name is required",
    date: "Date is required",
    time: "Time is required",
    occasion: "Occasion is required",
  });
  const allTouched = {
    firstName: { ...formData.firstName, isTouched: true },
    lastName: { ...formData.lastName, isTouched: true },
    contactNumber: { ...formData.contactNumber, isTouched: true },
    date: { ...formData.date, isTouched: true },
    time: { ...formData.time, isTouched: true },
    noOfGuests: { ...formData.noOfGuests, isTouched: true },
    occasion: { ...formData.occasion, isTouched: true },
  };

  useEffect(() => {
    let errors = {};
    if (!formData.firstName.value) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.value) {
      errors.lastName = "Last name is required";
    }
    if (!formData.contactNumber.value) {
      errors.contactNumber = "Number name is required";
    }
    if (!formData.date.value) {
      errors.date = "Date is required";
    }
    if (formData.time.value === "Time") {
      errors.time = "Time is required";
    }
    if (formData.occasion.value === "Occasion") {
      errors.occasion = "Occasion is required";
    }
    setFormErrors(errors);
  }, [formData]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { value: value, isTouched: true },
    }));
  };

  const handleFormBlur = async (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { value: value, isTouched: true },
    }));
  };

  const handleDateChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { value: value, isTouched: true },
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(allTouched);
    if (Object.keys(formErrors).length <= 0) {
      submitForm(formData);
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const timeOptions = [
    <option hidden disabled key={"Time"}>
      Time
    </option>,
    availableTimes.map((time) => <option key={time}>{time}</option>),
  ];
  return (
    <>
      <ConfirmedBooking confirmed={confirmed} setConfirmed={setConfirmed} />
      <section className="form-cont">
        <div className="highlight-overlay"></div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input-container">
              <label htmlFor="first-name">First Name</label>
              <input
                placeholder=" "
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName.value}
                onChange={handleFormChange}
                onBlur={handleFormBlur}
              />
              {!formData.firstName.value && formData.firstName.isTouched && (
                <p className="form-error">{formErrors.firstName}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="last-name">Last Name</label>
              <input
                placeholder=" "
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName.value}
                onChange={handleFormChange}
                onBlur={handleFormBlur}
              />
              {formData.lastName.value === "" &&
                formData.lastName.isTouched && (
                  <p className="form-error">{formErrors.lastName}</p>
                )}
            </div>
          </div>
          <div>
            <div className="input-container">
              <label htmlFor="contact-number">Contact Number</label>
              <input
                type="number"
                id="contact-number"
                name="contactNumber"
                placeholder=" "
                value={formData.contactNumber.value}
                onChange={handleFormChange}
                onBlur={handleFormBlur}
              />
              {formData.contactNumber.value === "" &&
                formData.contactNumber.isTouched && (
                  <p className="form-error">{formErrors.contactNumber}</p>
                )}
            </div>
            <div className="input-container">
              <label htmlFor="guests">Number of Diners</label>
              <input
                type="number"
                placeholder=" "
                min="1"
                max="10"
                id="guests"
                name="noOfGuests"
                value={formData.noOfGuests.value}
                onChange={handleFormChange}
                onBlur={handleFormBlur}
              />
            </div>
          </div>
          <div>
            <div className="input-container">
              <label htmlFor="res-date">Choose date</label>
              <input
                placeholder=" "
                type="date"
                id="res-date"
                name="date"
                value={formData.date.value}
                onChange={handleDateChange}
                onBlur={handleFormBlur}
                min={currentDate}
              />
              {!formData.date.value && formData.date.isTouched && (
                <p className="form-error">{formErrors.date}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                name="time"
                value={formData.time.value}
                onChange={handleFormChange}
                onBlur={handleFormBlur}>
                {timeOptions}
              </select>
              {formData.time.value === "Time" && formData.time.isTouched && (
                <p className="form-error">{formErrors.time}</p>
              )}
            </div>
          </div>
          <div>
            <div className="input-container">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion.value}
                onChange={handleFormChange}
                onBlur={handleFormBlur}>
                <option hidden disabled>
                  Occasion
                </option>
                <option>Casual</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              {formData.occasion.value === "Occasion" &&
                formData.occasion.isTouched && (
                  <p className="form-error">{formErrors.occasion}</p>
                )}
            </div>
          </div>
          <input
            className="button-primary"
            type="submit"
            value="Reserve"
            // disabled={Object.keys(formErrors) < 1 ? false : true}
            aria-label="submit button"
          />
        </form>
      </section>
    </>
  );
}

export default BookingForm;
