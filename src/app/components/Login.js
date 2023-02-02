import axios from "axios";
import React,{useState} from "react";
import { Navbar } from "react-bootstrap";
import { NavLink ,useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSign=(e)=>{
    e.preventDefault();
    console.log("Do login now",email,password)

    axios.post(
      "https://phpwebdevelopmentservices.com/project-react-backend/api/login",
      {
        params: {
          email,
          password
        },
      }
    ).then((res)=>{
      if((res.data?.result?.token ?? "").length > 0){
        console.log("sucessfully logged in",res)

  
        const token = res.data.result.token
        localStorage.setItem("token",token)

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;


        navigate({pathname: "/search"})

      }


    }).catch((err)=>{
      console.log("error",err)
    });

  }


  return (
    <>
      <div className="search_main_section">
        <div className="container">
          <form onSubmit={handleSign}>
            <div className="row res_padd">
              <div className="bread_crumb comm_btomm">
                <a href="#">Home</a>
                <span>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <a href="#">Enquiry</a>
              </div>

              <div className="main-center-div">
                <div className="top-border-div">
                  <div className="login-from-area">
                    <h2>Sign In</h2>
                    <div>
                      <input
                        type="email"
                        className="login-type"
                        placeholder="Email or mobile number"
                        name=""
                        fdprocessedid="jkmcjk"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        fdprocessedid="8sa6sj"
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="clearfix"></div>
                      <span
                        toggle="#password-field"
                        className="field-icon fa fa-fw fa-eye toggle-password"
                      ></span>
                    </div>
                    <div className="remmber-area">
                      <label className="list_checkBox">
                        Remember me
                        <input type="checkbox" name="text" />
                        <span className="list_checkmark"></span>
                      </label>
                      <a className="forgot-passwords" href="#">
                        Forgot Password?
                      </a>
                    </div>
                    <p>
                      By clicking Sign In or continue with Facebook or Google,
                      you agree to all <a href=""> Terms of Service</a> and{" "}
                      <a href="#"> Privacy Policy</a>
                    </p>
                    <button 
                      type="submit"
                      className="login-submit"
                      fdprocessedid="0solr8"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="or-area">
                    <span>Or Continue with</span>
                  </div>
                  <div className="login-socials-area">
                    <div className="socials-btns">
                      <a href="#" className="common-btns facebook-btn">
                        <img src="./images/login-facebook.png" alt="" />{" "}
                        Facebook
                      </a>
                      <a href="#" className="common-btns google-btn">
                        <img src="./images/login-google.png" alt="" /> Google
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bottom-account-div">
                  <p>
                    Don't have an account?{" "}
                    <NavLink to={{ pathname: "/signup" }}>Sign Up</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Login;
