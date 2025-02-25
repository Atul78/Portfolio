import Icons from "../../icons/Icons";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-main">
        <div className="contact-parent">
          <div className="contact-info">
            <h2>
              Contact <span className="me">Me</span>
            </h2>
            <p>
              Let’s Build Something Amazing Together! 🚀 Got a cool idea? Need a
              developer? Or just want to chat about tech? Drop me a message!
            </p>
            <p>
              <span>{Icons.Phone("#ffe120", 24)}</span> +918901720459
            </p>
            <p>
              <span>{Icons.Email("#ffa080", 24)}</span>
              ritiksharma678678@gmail.com
            </p>
            <p>
              <span>{Icons.House("#ea4e4e")}</span>122004, Village Khedki Daula,
              Gurugram, Haryana
            </p>
          </div>
          <div className="contact-form">
            <form action="">
              <div className="contact-form-parent">
                <div className="contact-name">
                  <div className="contact-first-name">
                    <p className="common-p">
                      <label htmlFor="first-name">First Name</label>
                    </p>
                    <input
                      className="common-input"
                      id="first-name"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                  <div className="contact-last-name">
                    <p className="common-p">
                      <label className="last-name">Last Name</label>
                    </p>
                    <input
                      className="common-input"
                      type="text"
                      id="last-name"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div className="contact-name">
                  <div className="email-input">
                    <p className="common-p">
                      <label htmlFor="email">Email</label>
                    </p>
                    <input
                      type="text"
                      id="email"
                      className="email-input common-input"
                      placeholder="email"
                    />
                  </div>
                  <div className="phone-input">
                    <p className="common-p">
                      <label htmlFor="phone">Phone (optional)</label>
                    </p>
                    <input
                      type="text"
                      id="phone"
                      className="phone-input common-input"
                      placeholder="phone"
                    />
                  </div>
                </div>
                <div className="message-input">
                  <p className="common-p">
                    <label htmlFor="message">Message</label>
                  </p>
                  <textarea id="message" placeholder="type your message here..." className="common-input message-text-area" />
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
