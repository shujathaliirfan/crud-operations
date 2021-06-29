import React from "react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/trello-logo-blue.svg";
import atlassian from "../assets/atlassian.svg";

import "./styles.css";

function Signup(props) {

  let history = useHistory();
  // console.log(props.match.state);
  // console.log(props.match.isExact);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));

    let { username, password } = data;

    setUser(username);
    setPassword(password);

    let response = JSON.stringify(data);

    localStorage.setItem("token", response);
    history.push("/login");
  }; // your form submit function which will invoke after successful validation

  //   console.log(watch());
  return (
    
    <div>
      
      {/* <p>{user}</p> */}

      <div class="wrapper">
        <img class="logo" src={logo} alt="logo" />
        <div class="parent">
          <h1 class="heading">Signup in to Trello</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>username</label>
            <input
              placeholder=" Enter Username"
              {...register("username", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.username?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors?.username?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.username?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
            <label>password</label>
            <input
              placeholder=" Enter Password"
              {...register("password", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.password?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}

            <input type="submit" />
          </form>

          <p class="separator">OR</p>

          <ul class="sociall">
            <li>
              <a href="#">Continue with Google</a>
            </li>
            <li>
              <a href="#">Continue with Microsoft</a>
            </li>
            <li>
              <a href="#">Continue with Apple</a>
            </li>
            <li>
              <a href="#">Continue with Slack</a>
            </li>
          </ul>
          <p class="separator blue">Log in with SSO</p>
          <hr />

          <ul class="signup privacy">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div class="footer-section">
        <img src={atlassian} alt="footer-logo" />
        <ul class="footer">
          <li>Templates</li>
          <li>Pricing</li>
          <li>Apps</li>
          <li>Jobs</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>About</li>
          <li>Help</li>
          <li>Cookie</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Signup;
