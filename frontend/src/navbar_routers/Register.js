import styles from "./Register.module.css";
import { useState } from "react";

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs); // test
  };

  return (
    <div className={styles.bg_container}>
      <form className={styles.regForm} onSubmit={handleSubmit}>
        <div className={styles.div_text}>Join Member</div>
        <div>
          <label className={styles.lbl_title}>UserID:</label>
          <input
            type="text"
            name="userID"
            value={inputs.userID || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.lbl_title}>Password:</label>
          <input
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.lbl_title}>Confirm Password:</label>
          <input
            type="text"
            name="confirmPassword"
            value={inputs.confirmPassword || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.lbl_title}>Name:</label>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.lbl_title}>Telephote:</label>
          <input
            type="text"
            name="telephote"
            value={inputs.telephote || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.lbl_title}>Email:</label>
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default Register;
