import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
const onChange = () => {};

const Search = () => {
  const [keyword, setKeyWord] = useState("");
  const [selCategoryIndex, setSelCategoryIndex] = useState(0);
  const [subcat, setSubCat] = useState("");
  // const [price, setPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [categories, setCategories] = useState([]);

  const [results,setResults] = useState([])

  useEffect(() => {
    axios
      .post(
        "https://phpwebdevelopmentservices.com/project-react-backend/api/common-data"
      )
      .then((res) => {
        console.log(res, " start");
        const cats = res.data?.result?.categories ?? [];
        setCategories(cats);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  }, []);

  useEffect(() => {
    loadResults()
  }, [sortBy]);

  const loadResults = (e) => {
    if(e) e.preventDefault();
    console.log("Submit payload is::", {
      keyword,
      category: categories[selCategoryIndex]?.id ?? 0,
      subcat,
      sortBy,
    });
    const payload = {
      params: {
        sort_by: sortBy,
        category_id: categories[selCategoryIndex]?.id ?? 0,
        sub_category_id: [subcat],
        keyword,
      },
    };
    axios
      .post(
        "https://phpwebdevelopmentservices.com/project-react-backend/api/search-data",
        payload
      )
      .then((res) => {
        console.log(res, "data comes");
        const data = res.data?.result?.products ?? [];
        setResults(data)   

      })
      .catch((err) => {
        console.log(err, " data error");
      });
  };

  return (
    <div className="search_main_section">
      <div className="container">
        <div className="row res_padd">
          <div className="bread_crumb">
            <a href="#">Home</a>
            <span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <a href="#">Vegetables</a>
          </div>

          <div className="mobile_filter">
            {" "}
            <i className="fa fa-filter" aria-hidden="true"></i>
            <p>Show Filter</p>
          </div>

          <div className="laft_search_panel">
            <form onSubmit={loadResults}>
              <h3>Filter Options</h3>

              <div className="form_group position-relative">
                <input
                  type="text"
                  placeholder="Keyword"
                  className="search-input"
                  fdprocessedid="5tihw"
                  value={keyword}
                  onChange={(e) => setKeyWord(e.target.value)}
                />
                <img src="images/icon36.png" className="search_icon" />
              </div>

              <div className="form_group">
                <label className="search_label">Category</label>
                <select
                  className="slectt"
                  fdprocessedid="3gkfsm"
                  value={selCategoryIndex}
                  onChange={(e) => setSelCategoryIndex(e.target.value)}
                >
                  {categories.map((catg, i) => (
                    <option key={catg.id} value={i}>
                      {catg.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form_group">
                <label className="search_label">Sub Category</label>
                <ul className="c_ul">
                  {(categories[selCategoryIndex]?.sub_categories ?? []).map(
                    (sCat) => {
                      return (
                        <li key={sCat.id}>
                          <label className="contect_container_checkBox">
                            {sCat.name}
                            <input
                              type="radio"
                              name="subCategory"
                              onChange={() => setSubCat(sCat.id)}
                              value={sCat.id}
                              checked={subcat === sCat.id}
                            ></input>
                            {/* <span className="contect_checkmark"></span> */}
                            <span className="contect_checkmark"></span>
                          </label>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>

              {/* <div className="form_group">
              <label className="search_label">Price Range</label>
              <div className="slider_rnge">
                <div
                  id="slider-range"
                  className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                >
                  <div
                    className="ui-slider-range ui-widget-header ui-corner-all w-100"
                    style={{ left: "0%", width: "100%" }}
                  ></div>
                  <span
                    tabnidex="0"
                    className="ui-slider-handle ui-state-default ui-corner-all w-100"
                    style={{ left: "1%" }}
                  ></span>
                  <span
                    tabIndex="0"
                    className="ui-slider-handle ui-state-default ui-corner-all w-100"
                    style={{ left: "50%" }}
                  ></span>
                  <div
                    className="ui-slider-range ui-corner-all ui-widget-header"
                    style={{ left: "1%" }}
                  ></div>
                </div>
                <span className="range-text">
                  <input
                    type="text"
                    className="price_numb"
                    readOnly=""
                    id="amount"
                    fdprocessedid="db0lua"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </span>
              </div>
            </div> */}

              <button
                type="submit"
                className="search-submit1"
                fdprocessedid="chxwea"
              >
                Filter
              </button>
            </form>
          </div>
          {/* <!----> */}

          {/* <!--right--> */}
          <div className="right_search_panel">
            <div className="evnt_shot_by_main">
              <label className="event-sort">
                Showing 1-20 out of 100 product for Vegetable
              </label>
              <div className="sort-filter">
                <p>Sort by :</p>
                <select
                  className="sort-select"
                  fdprocessedid="gqb348"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Select</option>
                  <option value={1}>Price - Low to High</option>
                  <option value={0}>Price - High to Low </option>
                </select>
              </div>
            </div>

            {results.map((product) => {
              return (
                <div className="search_proo" key={product.id}>
                  <div className="srch_pic_box">
                    <img src={`images/${product.default_image.image}`} alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">{product.title}</a>
                    <p>Rs.{product.price ?? "0.00"}</p>
                  </div>
                </div>
              );
            })}

            <div className="w-100"></div>

            <div className="pagination_area">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li className="active">
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#">25</a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
