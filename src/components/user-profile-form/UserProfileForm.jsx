import React from "react";
import "./styles.scss";
import FormInput from "../form-input/FormInput";
import { useState } from "react";

function UserProfileForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email address",
      label: "Email",
      errorMessage: "Please provide a valid email address.",
      required: true,
      pattern: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Set a password",
      label: "Password",
      errorMessage:
        "Password must be at least 6 characters in length and contain at least one upper case letter, one lower case letter and one digit.",
      required: true,
      pattern:
        "(?=[-_a-zA-Z0-9]*?[A-Z])(?=[-_a-zA-Z0-9]*?[a-z])(?=[-_a-zA-Z0-9]*?[0-9])[-_a-zA-Z0-9]{6,}",
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      label: "Confirm password",
      errorMessage: "Passwords must match.",
      required: true,
      pattern: values.password,
    },
    {
      id: 4,
      name: "birthDabirthdayte",
      type: "date",
      placeholder: "",
      label: "Birthday",
      errorMessage: "Please provide your date of birth.",
      required: true,
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="formContainer">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        {inputs.map((i) => (
          <FormInput key={i.id} {...i} value={values[i.name]} onChange={onChange}></FormInput>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserProfileForm;
