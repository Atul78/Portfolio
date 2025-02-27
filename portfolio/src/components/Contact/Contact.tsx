import { useFormik } from "formik";
import Icons from "../../icons/Icons";
import { validationSchema } from "../../validations/Validations";
import "./Contact.css";

const ContactForm = ({ formik }: any) => {
  return (
    <form onSubmit={formik.handleSubmit} className="contact-form-parent">
      <div className="contact-name">
        <InputField
          id="first-name"
          label="First Name"
          name="firstName"
          formik={formik}
        />
        <InputField
          id="last-name"
          label="Last Name"
          name="lastName"
          formik={formik}
        />
      </div>

      <div className="contact-name">
        <InputField id="email" label="Email" name="email" formik={formik} />
        <InputField
          id="phone"
          label="Phone (optional)"
          name="phone"
          type="text"
          formik={formik}
        />
      </div>

      <div className="message-input">
        <label htmlFor="message" className="common-p">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="common-input message-text-area"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="error-msg">{formik.errors.message}</p>
        )}
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

const InputField = ({ id, label, name, type = "text", formik }: any) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="common-p">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={label.toUpperCase()}
        className="common-input"
      />
        <p className="error-msg">{formik.errors[name]}</p>
    </div>
  );
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <div className="contact-main" id="contact">
      <div className="contact-parent">
        <ContactInfo />
        <div className="contact-form">
          <ContactForm formik={formik} />
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>
        Contact <span className="me">Me</span>
      </h2>
      <p>
        Let’s Build Something Amazing Together! 🚀 Got a cool idea? Need a
        developer? Or just want to chat about tech? Drop me a message!
      </p>
      <ContactDetail icon={Icons.Phone("#ffe120", 24)} text="+918901720459" />
      <ContactDetail
        icon={Icons.Email("#ffa080", 24)}
        text="ritiksharma678678@gmail.com"
      />
      <ContactDetail
        icon={Icons.House("#ea4e4e")}
        text="122004, Village Khedki Daula, Gurugram, Haryana"
      />
    </div>
  );
};

const ContactDetail = ({ icon, text }: any) => (
  <p>
    <span>{icon}</span> {text}
  </p>
);

export default Contact;
