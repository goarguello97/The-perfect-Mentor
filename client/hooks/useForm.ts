import { useEffect, useState } from "react";
import { useAppDispatch } from "./useTypedSelector";
import { ErrorRegister } from "../interfaces/error.interface";

const useForm = (initialValues: any, submit: any, validations: any) => {
  const dispatch = useAppDispatch();
  const [radio, setRadio] = useState({ name: "Mentee", value: true });
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ErrorRegister | {}>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        dispatch(submit(values));
      }
      setSubmitting(false);
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  }, [errors]);

  const handleChange = (e: any) => {
    if (e.target.type === "radio") {
      setRadio({ name: e.target.value, value: !radio.value });
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validations) {
      setErrors(validations(values));
    } else {
      setErrors({});
    }
    setSubmitting(true);
  };

  return { handleChange, handleSubmit, values, radio, setValues, errors };
};

export default useForm;
