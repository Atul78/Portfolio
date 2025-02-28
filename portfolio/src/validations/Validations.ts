import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required").email("Invalid email address"),
  phone: yup.string().test("is-valid-phone", "phone number must be 10 digits", (value) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value || "");
  }),
  message: yup.string().required("Message is required"),
});
