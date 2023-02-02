import axios from "axios";
import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
 const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirm,setConfirm ] = useState("");
  const [file, setFile] = useState("");




  




  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("phone", phone );
    formdata.append("email", email);
    formdata.append("date_of_birth", birth);
    formdata.append("password", password);
    formdata.append("new_password", password1);
    formdata.append("confirm_password", confirm);
    formdata.append("image", file);



     axios({
      method: "post",
      url: "https://phpwebdevelopmentservices.com/project-react-backend/api/edit-profile",
      data: formdata,
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    }).then(res => {
        console.log("edit profile success::",res)
    }).catch(err => {
        console.log("edit profile failed::",err)
    });


  };
  return (
    <div>
      <div className="wrapper">
        <header>
          <div className="two_in_one">
            <div className="top_head">
              <div className="container">
                <div className="row ">
                  <div className="head_contact">
                    <ul>
                      <li>
                        <img src="images/icon04.png" alt="" /> Sarkar shoss
                        exclusive Natun Bazar turminal complex, PO : Maynaguri,
                        Dist : Jalpaiguri, Pin : 753224.
                      </li>
                    </ul>
                  </div>
                  <div className="head_log_area ml-auto">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="images/icon03.png" alt="" />
                          dhrubadjs.mng@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:7797813261">
                          <img src="images/icon02.jpg" alt="" /> +91 7797813261
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="middle_head">
              <div className="container">
                <div className="row res_padd">
                  <span className="logo">
                    <a href="index.html">
                      <img src="images/logo.png" alt="" />
                    </a>
                  </span>
                  <div className="right_search ml-auto">
                    <div className="left_search">
                      <form>
                        <input
                          type="text"
                          className="search_type mobill010"
                          placeholder="Search for Products"
                        />
                        <button
                          type="submit"
                          value=""
                          className="search_submit"
                        ></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="for_all_cat_sub_cat">
              <div className="menu_area">
                <div className="container">
                  <div className="row res_padd relet">
                    {/* <!--CATEGORY MENU-->                 */}
                    <div className="adjust_rm01">
                      <div className="off_canvas_animate slide off_canvas_container left_menu_1">
                        <div className="off_canvas_animate slide off_canvas_top_menu">
                          <div className="off_canvas_toggles">
                            <span className="nav_prev_btn">
                              <i className="icon-left"></i>Back
                            </span>
                            <span className="nav_close_btn">
                              <i className="icon-cancel"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="content_animate slide content">
                        <div className="content_animate slide">
                          <span className="nav_toggle">
                            <i className="icon-menu"></i>
                          </span>
                          <nav className="dropdown">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="adjust_rm02"
                                >
                                  All Categories{" "}
                                  <i
                                    className="fa fa-caret-down"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <ul>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Vegetable{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Fruits
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Dairy products{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Organic Products{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Grocery Items{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* <!--CATEGORY MENU END-->  */}

                    <nav className="navbar navbar-expand-md navbar-light">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item dropdown ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Fruits
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" href="fruits.html">
                                Foodgrains
                              </a>
                              <a
                                className="dropdown-item"
                                href="vagetables.html"
                              >
                                {" "}
                                Oil
                              </a>
                              <a className="dropdown-item" href="leaves.html">
                                Masala
                              </a>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              About Bazar Maynaguri
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              B2B Information
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              FAQ
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Contact Us
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Enquiry Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!----> */}
        <section className="mainDasbordsec">
          <div className="container">
            <div className="mainDasbordInr">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 pl-0">
                  <div className="dasbordLeftsec">
                    <a
                      href="#url"
                      className="showmeu"
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      <i className="fa fa-bars"></i>Show Menus
                    </a>

                    <div className="dasbordLeft ">
                      <div className="profibx">
                        <em>
                          <img src="images/dachprofi.jpg" alt="" />
                        </em>
                        <strong>Rabin Mnna</strong>
                        <ul>
                          <li>
                            <a href="#">
                              <img src="images/star1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/star1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/star1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/star1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/star2.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <span>(410)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="dasbordLeftlink">
                        <ul>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico1.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="#" className="activ">
                              <span>
                                <img
                                  src="images/dashico2.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              Edit Profile
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico3.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              My Order
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico10.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              My Favorite
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico4.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              Reviews
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico7.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              Messages<em>10</em>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="images/dashico8.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              Notifications
                              <em>14</em>
                            </a>
                          </li>
                          <li>
                            <a href="login.html">
                              <span>
                                <img
                                  src="images/dashico9.png"
                                  alt=""
                                  className="dashico1"
                                />
                              </span>
                              Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 pr-0">
                  <div className="dasbordRightlink">
                    <h1>Edit Profile</h1>
                    <div className="dasbordRightBody">
                      <div className="editProformBx">
                        <form onSubmit={handleSubmit}>
                          <div className="editProformir">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>Name</label>
                                  <input
                                    type="text"
                                    placeholder="Enter here"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    placeholder="Enter here"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>Phone</label>
                                  <input
                                    type="text"
                                    placeholder="Enter here"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="iputBx">
                                  <label>About me</label>
                                  <textarea placeholder="Enter your description here..."></textarea>
                                </div>
                              </div>

                              <div className="col-md-5 col-sm-6">
                                <div className="iputBx">
                                  <label>Date of Birth</label>
                                  <input
                                    type="text"
                                    className="datepicker"
                                    placeholder="Enter here"
                                    value={birth}
                                    onChange={(e) => setBirth(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-md-4 col-sm-6">
                                <div className="genfil">
                                  <span>Gender</span>
                                  <ul>
                                    <li>
                                      <input
                                        type="radio"
                                        id="radio1"
                                        name="radios"
                                        value="all"
                                        checked
                                      />
                                      <label for="radio1">Male</label>
                                    </li>
                                    <li>
                                      <input
                                        type="radio"
                                        id="radio2"
                                        name="radios"
                                        value="all"
                                      />
                                      <label for="radio2">Female</label>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-sm-12">
                                <div className="form_group edt_checkk">
                                  <label className="search_label">Travel</label>
                                  <ul className="c_ul">
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Bus
                                        <input
                                          type="checkbox"
                                          checked=""
                                          name="text"
                                        />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Car
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Track
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Walk
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                    <li>
                                      <label className="contect_container_checkBox">
                                        Scooter
                                        <input type="checkbox" name="text" />
                                        <span className="contect_checkmark"></span>
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-sm-12">
                                <div className="form_fild_area_m frm_grp arro">
                                  <label>Language </label>
                                  <select
                                    data-placeholder="Select"
                                    className="chosen-select"
                                    multiple
                                    tabindex="4"
                                  >
                                    <option value=""></option>
                                    <option value="">
                                      Htmuyyiyyuyu uyytuyl
                                    </option>
                                    <option value="">
                                      Htmuyyiyyuyu uyytuyl
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-sm-12">
                                <div className="uplodimg">
                                  <span>Profile Image</span>
                                  <div className="uplodimgfil">
                                    <input
                                      type="file"
                                      name="file-1[]"
                                      id="file-1"
                                      className="inputfile inputfile-1"
                                      data-multiple-caption="{count} files selected"
                                      multiple
                                      value={file}
                                      onChange={(e) => setFile(e.target.value)}
                                    />
                                    <label for="file-1">
                                      Click here to Upload Profile Image
                                      <img src="images/clickhe.png" alt="" />
                                    </label>
                                  </div>
                                  <div className="uplodimgfilimg">
                                    <em>
                                      <img src="images/uplodimg.jpg" alt="" />
                                    </em>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="locatioSec">
                              <h3>Location</h3>
                              <div className="row">
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>Country</label>
                                    <select>
                                      <option>Select</option>
                                      <option>Select1</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>State</label>
                                    <input
                                      type="text"
                                      placeholder="Enter here"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                  <div className="iputBx">
                                    <label>City</label>
                                    <input
                                      type="text"
                                      placeholder="Enter your full address"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="locatioSec">
                              <h3>Change password</h3>
                              <div className="row">
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>Current password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                      value={password}
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                  <div className="iputBx">
                                    <label>New password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                      value={password1}
                                      onChange={(e) =>
                                        setPassword1(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                  <div className="iputBx">
                                    <label>Confirm password</label>
                                    <input
                                      type="password"
                                      placeholder="Enter here"
                                      value={confirm}
                                      onChange={(e) =>
                                        setConfirm(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="footdashSec">
                              <input
                                type="submit"
                                value="Save all changes"
                                className="subbtn"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!----> */}
      </div>
    </div>
  );
};
<Navbar />;
export default Profile;
