import React, { useEffect, useState } from "react";
// Icon
import emailIcon from "../img/email.svg";
import passwordIcon from "../img/password.svg";
// Validate
import { validate } from "./validate";
// Styles
import styles from "./SignUp.module.css";
import "react-toastify/dist/ReactToastify.css";
// Toast
import { ToastContainer, toast } from "react-toastify";
// Link
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    IsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Check if there are any errors before displaying success or error message
    const isValid =
      Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

    if (isValid) {
      toast.success("Signup successful! Please Login");
      // Optionally reset the form or redirect the user
      setData({
        email: "",
        password: "",
        confirmPassword: "",
        IsAccepted: false,
      });
      setTouched({});

      // Redirect to /login after 1 second
      setTimeout(() => {
        navigate("/login");
      }, 3000); // 1000 milliseconds = 1 second
    } else {
      toast.error("Please check all fields.");
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.formLogin}
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <h2>Sign Up</h2>

        <div>
          <div
            className={
              errors.email && touched.email
                ? styles.unCompleted
                : !errors.email && touched.email
                ? styles.completed
                : undefined
            }
          >
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="E-mail"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <img src={emailIcon} alt="" />
          </div>
          {errors.email && touched.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>

        <div>
          <div
            className={
              errors.password && touched.password
                ? styles.unCompleted
                : !errors.password && touched.password
                ? styles.completed
                : undefined
            }
          >
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <img src={passwordIcon} alt="" />
          </div>
          {errors.password && touched.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>

        <div>
          <div
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.unCompleted
                : !errors.confirmPassword && touched.confirmPassword
                ? styles.completed
                : undefined
            }
          >
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              placeholder="Confirm Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <img src={passwordIcon} alt="" />
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
        </div>

        <div>
          <div className={styles.terms}>
            <input
              type="checkbox"
              name="IsAccepted"
              checked={data.IsAccepted}
              id="accept"
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <label htmlFor="accept">I accept terms of privacy policy</label>
          </div>
          {errors.IsAccepted && touched.IsAccepted && (
            <span className={styles.error}>{errors.IsAccepted}</span>
          )}
        </div>

        <div>
          <button type="submit">Create Account</button>
          <span
            style={{
              color: "#a29494",
              textAlign: "center",
              display: "inline-block",
              width: "100%",
            }}
          >
            Already have an account? <Link to="/login">Sign In</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
