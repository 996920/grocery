import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");



  
  


  const handleSubmit = (e) => {
    e.preventDefault();   
    console.log("Do submit now",{name,email,mobile,password});
    axios.post(
      "https://phpwebdevelopmentservices.com/project-react-backend/api/register",
      {
        params: {
          name,
          email,
          phone: mobile,
          password,
          password_confirmation: password2,
        },
      }
    ).then(res => {
      console.log("Register API call successful:::",res)
      navigate({pathname: "/login"})
    }).catch(err => {
      console.log("Register API call failed:::", err);

    });
  };
  return (
    <div className="search_main_section">
      <div className="container">
        <div className="row res_padd">
          <div className="bread_crumb comm_btomm">
            <a href="#">Home</a>
            <span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <a href="#">Enquiry</a>
          </div>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="main-center-div">
              <div className="top-border-div">
                <div className="login-from-area">
                  <h2>Create Account</h2>
                  <div>
                    <input
                      type="text"
                      className="login-type"
                      placeholder="Full name"
                      name=""
                      fdprocessedid="djaest"
                      required={true}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div>
                    <input
                      type="email"
                      className="login-type"
                      placeholder="Email"
                      name=""
                      fdprocessedid="japhhn"
                      required={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      className="login-type"
                      placeholder="Mobile number"
                      name=""
                      fdprocessedid="ig85ki"
                      required={true}
                      minLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div className="password-in">
                    <input
                      id="password-field"
                      type="password"
                      className="login-type"
                      name="password"
                      placeholder="password"
                      fdprocessedid="0hzxvs"
                      required={true}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength="8"
                    />
                    <div className="clearfix"></div>
                    <span
                      toggle="#password-field"
                      className="field-icon fa fa-fw fa-eye toggle-password"
                    ></span>
                  </div>
                  <div className="password-in">
                    <input
                      id="password-field"
                      type="password"
                      className="login-type"
                      name="password"
                      placeholder="Confirm password"
                      fdprocessedid="i8o6cq"
                      required={true}
                      value={password2}
                      minLength="8"
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                    <div className="clearfix"></div>
                    <span
                      toggle="#password-field"
                      className="field-icon fa fa-fw fa-eye toggle-password"
                    ></span>
                  </div>
                  <p>
                    By clicking Sign In or continue with Facebook or Google, you
                    agree to all <a href=""> Terms of Service</a> and{" "}
                    <a href="#"> Privacy Policy</a>
                  </p>
                  <button
                    type="submit"
                    className="login-submit"
                    fdprocessedid="hri8jf"
                  >
                    Sign up
                  </button>
                </div>
                <div className="or-area">
                  <span>Or Continue with</span>
                </div>
                <div className="login-socials-area">
                  <div className="socials-btns">
                    <a href="#" className="common-btns facebook-btn">
                      <img src="./images/login-facebook.png" alt="" /> Facebook
                    </a>
                    <a href="#" className="common-btns google-btn">
                      <img src="./images/login-google.png" alt="" /> Google
                    </a>
                  </div>
                </div>
              </div>
              <div className="bottom-account-div">
                <p>
                  Already have an account?{" "}
                  <NavLink to={{ pathname: "/login" }}>Login</NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
