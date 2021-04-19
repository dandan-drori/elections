export const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/[A-Z0-9._%+-]+@[A-Z0-9._%-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 characters or more";
  } else if (!/[A-Z]+/i.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[0-9]+/i.test(values.password)) {
    errors.password = "Password must contain at least one number";
  }

  return errors;
};

export const handleSignout = async (api, dispatch, signoutAction, email) => {
  const response = await api.delete("./login", { data: { email: email } });
  localStorage.removeItem("userEmail");
  dispatch(signoutAction());
  console.log(response?.data?.message);
};
