import React, { useState } from "react";
import styles from "./Login.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import loginPic from "../image/loginPage.png";
import { Link } from "react-router-dom";
import Headbar from "../components/Headbar";

function Login() {
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleTelChange(ev) {
    setTel(ev.target.value);
  }

  function handlePwChange(ev) {
    setPassword(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  function togglePwVis() {
    setShowPassword((prevState) => {
      return !prevState;
    });
  }

  return (
    <div>
      <div>
        <Headbar />
      </div>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <form onSubmit={handleSubmit} class="space-y-6" action="#">
            <h1>
              Welcome Back
              <DinnerDiningIcon
                style={{ marginLeft: "5px" }}
                fontSize="large"
              />
            </h1>
            <div>
              <label
                style={{ display: "flex" }}
                for="tel"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Telephone
              </label>
              <input
                style={{ width: "250px" }}
                onChange={handleTelChange}
                type="text"
                name="tel"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                style={{ display: "flex" }}
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Password
              </label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  style={{ width: "250px" }}
                  onChange={handlePwChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                <div onClick={togglePwVis} style={{ marginLeft: "10px" }}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                class="ms-auto text-sm text-gray-700 hover:underline dark:text-gray-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/register"
                className="text-gray-700 hover:underline dark:text-gray-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
        <img src={loginPic}></img>
      </div>
    </div>
  );
}

export default Login;
