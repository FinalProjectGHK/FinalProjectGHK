import styles from "./Account.module.css";
<<<<<<< HEAD
import { useState } from "react";
import Headbar from "../components/Headbar";
=======
import React, { useState } from "react";
import Headbar from "../components/Headbar";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import accountPic from "../image/accountPage.png";
>>>>>>> 16febad (account page)

function Account() {
  const [canEdit, setCanEdit] = useState(false);
  return (
    <div>
      <div>
        <Headbar />
      </div>
      <div className={styles.container}>
        <div className={styles.accountBox}>
          <form>
            <h1 style={{ marginBottom: "15px" }}>
              Customer Profile <AccountBoxIcon />
            </h1>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500"
                  placeholder="John"
                  required
                />
              </div>

<<<<<<< HEAD
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);// test
    }

    return (
        <div>
            <div><Headbar /></div>
            <div className={styles.bg_container}>
                {/* <form className={styles.regForm} onSubmit={handleSubmit}>
                <div className={styles.div_text}>Join Member</div>
                <div >
                    <label className={styles.lbl_title}>UserID:</label>
                    <input type="text" name="userID" value={inputs.userID || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label className={styles.lbl_title}>Password:</label>
                    <input type="text" name="password" value={inputs.password || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label className={styles.lbl_title}>Confirm Password:</label>
                    <input type="text" name="confirmPassword" value={inputs.confirmPassword || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label className={styles.lbl_title}>Name:</label>
                    <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label className={styles.lbl_title}>Telephote:</label>
                    <input type="text" name="telephote" value={inputs.telephote || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label className={styles.lbl_title}>Email:</label>
                    <input type="text" name="email" value={inputs.email || ""} onChange={handleChange}/>
                </div>
                <div>
                    <input type="submit" value="Sign Up"/>
                </div>
            </form> */}
            </div>
=======
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-grey-500 dark:focus:border-grey-500"
                placeholder="•••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-grey-700 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-grey-800"
            >
              Submit
            </button>
          </form>
>>>>>>> 16febad (account page)
        </div>
        <img src={accountPic}></img>
      </div>
    </div>
  );
}

export default Account;
