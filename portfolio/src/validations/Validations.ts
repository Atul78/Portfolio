import * as yup from "yup";

const phoneValidation = (value:any) => {
  if (!value) return true;

  if (value.startsWith("+91")) {
    return /^[6-9][0-9]{9}$/.test(value.slice(3));
  }
  return /^[6-9][0-9]{9}$/.test(value);
};

export const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required").email("Invalid email address"),
  phone: yup.string().test("is-valid-phone", "Invalid phone number", phoneValidation),
  message: yup.string().required("Message is required"),
});
