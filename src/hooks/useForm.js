import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const useForm = (validate, submitAction, api) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const showHidePassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  useEffect(() => {
    const { email, password } = values;
    const makeApiCall = async () => {
      const indexOfAt = email.search("@");
      const name = email.slice(0, indexOfAt);
      const uppercasedName = name.charAt(0).toUpperCase() + name.slice(1);
      const response = await api.post("/login", [
        {
          name: uppercasedName,
          email,
          password,
        },
      ]);
      return response?.data?.message;
    };
    const asyncApiCall = async () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        const response = await makeApiCall();
        setApiResponse(response);
        if (response === "Login Successful") {
          localStorage.setItem("userEmail", email);
          dispatch(submitAction());
        }
      }
    };
    asyncApiCall();
  }, [errors, api, dispatch, isSubmitting, submitAction]);

  return {
    values,
    errors,
    showHidePassword,
    isPasswordHidden,
    handleChange,
    handleSubmit,
    apiResponse,
  };
};

export default useForm;
