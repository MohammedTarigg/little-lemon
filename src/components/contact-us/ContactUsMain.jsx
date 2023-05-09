import React from "react";
// import GoogleMapReact from "google-map-react";

function ContactUsMain() {
  // const defaultProps = {
  //   center: {
  //     lat: 25.325984,
  //     lng: 51.350201,
  //   },
  //   zoom: 16,
  // };

  return (
    <section className="contact">
      <div className="contact-header">
        <h1>contact us</h1>
        <p>
          For any inquiries, please do not hesitate to contact us either by
          email or through a telephone call.
        </p>
      </div>
      <div className="form-cont contact-form">
        <form>
          <div className="input-container">
            <label htmlFor="email">Your email</label>
            <input placeholder=" " type="email" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="name">Your name</label>
            <input placeholder=" " type="text" id="name" />
          </div>
          <div className="input-container">
            <label htmlFor="subject">Subject</label>
            <input placeholder=" " type="text" id="subject" />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea placeholder=" " id="message"></textarea>
          </div>
          <button type="button" className="button-primary">
            Send
          </button>
        </form>
      </div>
      <article className="details">
        <div className="details-container">
          <div className="info">
            <h5>working hours</h5>
            <p>EVERYDAY, FROM 1PM to 12AM</p>
            <hr />
            <h5>address</h5>
            <p>
              Zone 30، Street 400, Building 200. Mall of Qatar, Doha, Qatar.
            </p>
            <hr />
            <h5>contact</h5>
            <a href="tel: +97455428912" className="link">
              <i className="fa fa-phone" aria-hidden="true"></i> (00974)
              55428912
            </a>
            <br />
            <a href="mailto:m7md.tarigg@gmail.com" className="link">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              INFO@LITTLELEMON.QA
            </a>
            <hr />
            <h5>social media</h5>
            <p>Follow us on</p>
            <div className="social-icons-container">
              <a href="#1" className="scoial-icon">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#1" className="scoial-icon">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#1" className="scoial-icon">
                <i className="fa fa-google" aria-hidden="true"></i>
              </a>
              <a href="#1" className="scoial-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="google-map">
            {/* <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}></GoogleMapReact> */}
            <iframe
              title="Little lemon location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14425.347193280377!2d51.33931320215531!3d25.326477008995006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45df7f8ce0c187%3A0xd3461579d4e5a79f!2sMall%20of%20Qatar!5e0!3m2!1sen!2sqa!4v1683567721392!5m2!1sen!2sqa"
              width="100%"
              height="620"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ContactUsMain;
