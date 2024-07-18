import styles from "./Register.module.css";
import { useState } from "react";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import React from "react";
import Alert from "@mui/material/Alert";
import registerPic from "../image/registerPage.png";
import Headbar from "../components/Headbar";

function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });

  const [pwUnmatch, setPwUnmatch] = useState(false);

  function handleNameChange(ev) {
    setInput((prevState) => {
      return { ...prevState, name: ev.target.value };
    });
  }

  function handleEmailChange(ev) {
    setInput((prevState) => {
      return { ...prevState, email: ev.target.value };
    });
  }

  function handleTelChange(ev) {
    setInput((prevState) => {
      return { ...prevState, tel: ev.target.value };
    });
  }

  function handlePwChange(ev) {
    setInput((prevState) => {
      return { ...prevState, password: ev.target.value };
    });
  }

  function handleConfirmPwChange(ev) {
    setInput((prevState) => {
      return { ...prevState, confirmPassword: ev.target.value };
    });
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (input["password"] === input["confirmPassword"]) {
      setPwUnmatch(false);
      let result = await fetch("http://localhost:3001/", {
        method: "post",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json;
      localStorage.setItem("members", JSON.stringify(result));
      setInput({
        name: "",
        email: "",
        tel: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setPwUnmatch(true);
      setInput((prevState) => {
        return { ...prevState, password: "", confirmPassword: "" };
      });
    }
  }

  return (
    <div><Headbar/>
    <div className={styles.container}>
      <div className={styles.regBox}>
        <h1>
          Become a Member
          <RememberMeIcon fontSize="large" />
        </h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              style={{ display: "flex" }}
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={input["name"]}
              onChange={handleNameChange}
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="mb-5">
            <label
              style={{ display: "flex" }}
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={input["email"]}
              onChange={handleEmailChange}
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="mb-5">
            <label
              style={{ display: "flex" }}
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telephone
            </label>
            <input
              value={input["tel"]}
              onChange={handleTelChange}
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="mb-5">
            <label
              style={{ display: "flex" }}
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              value={input["password"]}
              onChange={handlePwChange}
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              style={{ display: "flex" }}
              for="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              value={input["confirmPassword"]}
              onChange={handleConfirmPwChange}
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-gray-600 hover:underline dark:text-gray-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Register new account
          </button>
        </form>
        {pwUnmatch ? (
          <Alert severity="error">Password mismatch, please re-enter.</Alert>
        ) : null}
      </div>
      <img src={registerPic}></img>
    </div>
    </div>
  );
}

export default Register;
