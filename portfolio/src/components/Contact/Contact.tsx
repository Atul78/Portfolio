import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-main">
        <div className="contact-parent">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              Let’s Build Something Amazing Together! 🚀 Got a cool idea? Need a
              developer? Or just want to chat about tech? Drop me a message!
            </p>
            <p>+918901720459</p>
            <p>ritiksharma678678@gmail.com</p>
            <p>122004, Village Khedki Daula, Gurugram, Haryana</p>
          </div>
          <div className="contact-form">
            <form action="">
              <div className="contact-form">
                <div className="contact-name">
                  <div className="contact-first-name">
                    <label>First Name</label>
                    <input type="text" placeholder="first name" />
                  </div>
                  <div className="contact-last-name">
                    <label>Last Name</label>
                    <input type="text" placeholder="last name" />
                  </div>
                </div>
                <div className="email-input">
                  <label id="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="email-input"
                    placeholder="email"
                  />
                </div>
                <div className="phone-input">
                  <label id="phone">Phone (optional)</label>
                  <input
                    type="text"
                    name="phone"
                    className="phone-input"
                    placeholder="phone"
                  />
                </div>
                <div className="message-input">
                  <textarea placeholder="type your message here..." />
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
