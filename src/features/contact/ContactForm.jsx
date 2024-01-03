function ContactForm() {
  return (
    <>
      <div id="message-contact"></div>
      <form
        method="post"
        action="assets/contact.php"
        id="contactform"
        autoComplete="off"
      >
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            id="name_contact"
            name="name_contact"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            id="email_contact"
            name="email_contact"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            style={{ height: "150px" }}
            placeholder="Message"
            id="message_contact"
            name="message_contact"
          />
        </div>
        <div className="form-group">
          <input
            className="btn_1 gradient full-width"
            type="submit"
            value="Submit"
            id="submit-contact"
          />
        </div>
      </form>
    </>
  );
}

export default ContactForm;
