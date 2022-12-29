import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import styles from "./CreateAccountModal.module.css";

function CreateAccountModal(props) {
  return (
    <Modal onExit={props.onExit}>
      <Card className={styles["create-account"]}>
        <CreateAccountForm onExit={props.onExit} />
      </Card>
    </Modal>
  );
}

function CreateAccountForm(props) {
  const emailInput = useInput((val) => val.includes("@"));
  const passwordInput = useInput((val) => val.length >= 8);
  const confirmPasswordInput = useInput((val) => val === passwordInput.value);
  const [showInvalidFormMessage, setShowInvalidFormMessage] = useState(false);

  const { fetchData, isLoading, error } = useHttp();
  const sendRequest = () => {
    fetchData(
      {
        url: "https://authfuncsapi.azurewebsites.net/api/auth/register",
        method: "POST",
        headers: { "Content-Type": "text/json" },
        body: {
          login: emailInput.value,
          password: passwordInput.value,
          confirmPassword: confirmPasswordInput.value,
        },
      },
      (val) => console.log(val)
    );
  };

  const isFormValid =
    emailInput.isValid && passwordInput.isValid && confirmPasswordInput.isValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      sendRequest();

      if (!isLoading && !error) {
        emailInput.reset();
        props.onExit();
      }
    } else {
      setShowInvalidFormMessage(true);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {showInvalidFormMessage && (
          <p className={styles["invalid-message"]}>
            Please correct invalid fields.
          </p>
        )}
      </div>
      <div className={styles.control}>
        <Input
          className={styles.input}
          type="text"
          input={emailInput}
          errorText="Login is not valid email address."
        >
          Login
        </Input>
        <Input
          className={styles.input}
          type="password"
          input={passwordInput}
          errorText="Password must be at least 8 characters long."
        >
          Password
        </Input>
        <Input
          className={styles.input}
          type="password"
          input={confirmPasswordInput}
          errorText="Confirm password is different than password."
        >
          Confirm password
        </Input>
      </div>
      <div className={styles.action}>
        <button className={styles.cancel} onClick={props.onExit}>
          Cancel
        </button>
        <button className={styles.submit} type={"submit"}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateAccountModal;
