import { useState } from "react";

const useInput = (validateFn) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const changeValueHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
    setIsValid(validateFn(value));
  };

  const resetHandler = () => {
    setIsTouched(false);
    setIsValid(false);
    setValue("");
  };

  return {
    value,
    isValid,
    isTouched,
    onChange: changeValueHandler,
    onBlur: blurHandler,
    reset: resetHandler,
  };
};

export default useInput;
