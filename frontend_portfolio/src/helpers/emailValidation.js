import isValidEmail from "./isValidEmail";

const emailValidation = (value) => {
  if (value.trim() === "") {
    return `Email is required`;
  }

  if (!isValidEmail(value)) {
    return `Email need to be valid format`;
  }

  return null;
};

export default emailValidation;
