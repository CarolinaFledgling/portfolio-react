const isValidEmail = (email) => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase());
};

export default isValidEmail;
