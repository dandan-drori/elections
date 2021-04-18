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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    setErrors(validate(values));
    setIsSubmitting(true);

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
    console.log(response);
  };

  const showHidePassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(submitAction);
    }
  }, [errors]);

  return {
    values,
    errors,
    showHidePassword,
    isPasswordHidden,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
