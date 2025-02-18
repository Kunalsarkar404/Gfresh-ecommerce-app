import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../../store/api/productapi";
import MobileSubcategory from "../../components/Header/MobileSubcategory ";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Loader";
import { useGetAttributeByCategoryQuery } from "../../store/api/categoryapi";
const Category = () => {
  const { id, name, url } = useParams();
  const nvg = useNavigate();
  const [pricevalue, setpricevalue] = useState(14000);
  const [brand, setbrand] = useState(true);
  const [color, setcolor] = useState(true);
  const [size, setsize] = useState(true);
  const [price, setprice] = useState(true);
  const [weight, setweight] = useState(true);
  const [filter, setfilter] = useState(false);
  const [currentwdith, setcurrentwdith] = useState(window.innerWidth);
  const [showsidebar, setshowsidebar] = useState(false);
  const [sortby, setsortby] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setpageSize] = useState(12);


  const transfer = (productid) => {
    nvg(`/productdetails/${productid}`);
    window.location.reload();
  };
  const {
    data: data,
    isLoading,
    refetch,
  } = useGetProductByCategoryQuery({ id, url });
  const { data: data4, isLoading: attributeloading } =
    useGetAttributeByCategoryQuery(id);
  const pagefilter = async (key, newData) => {
    let finalurl;
    let exists = url.includes(`${key}=`);
    if (exists) {
      if (url == `${key}=${newData}`) {
        finalurl = "none";
      } else {
        const sortByRegex = new RegExp(`${key}=[^&]+`);
        finalurl = url.replace(sortByRegex, `${key}=${newData}`);
      }
      nvg(`/category/${id}/${name}/${finalurl}`);
      refetch(id, finalurl);
    } else {
      if (url == "none") {
        finalurl = `&${key}=${newData}`;
      } else {
        finalurl = url + `&${key}=${newData}`;
      }
      nvg(`/category/${id}/${name}/${finalurl}`);
      refetch();
    }
  };

  // double condition function start here
  const doublefilterstep1 = (key, newData, key2, newData2) => {
    let finalurl;
    let exists = url.includes(`${key}=`);
    if (exists) {
      if (url == `${key}=${newData}`) {
        finalurl = "none";
      } else {
        const sortByRegex = new RegExp(`${key}=[^&]+`);
        finalurl = url.replace(sortByRegex, `${key}=${newData}`);
      }
      doublefilterstep2(key2, newData2, finalurl);
    } else {
      if (url == "none") {
        finalurl = `&${key}=${newData}`;
      } else {
        finalurl = url + `&${key}=${newData}`;
      }
      doublefilterstep2(key2, newData2, finalurl);
    }
  };

  const doublefilterstep2 = (key, newData, url) => {
    let finalurl;
    let exists = url.includes(`${key}=`);
    if (exists) {
      if (url == `${key}=${newData}`) {
        finalurl = "none";
      } else {
        const sortByRegex = new RegExp(`${key}=[^&]+`);
        finalurl = url.replace(sortByRegex, `${key}=${newData}`);
      }
      nvg(`/category/${id}/${name}/${finalurl}`);
      window.location.reload();
    } else {
      if (url == "none") {
        finalurl = `&${key}=${newData}`;
      } else {
        finalurl = url + `&${key}=${newData}`;
      }
      nvg(`/category/${id}/${name}/${finalurl}`);
      window.location.reload();
    }
  };
  // double condition function end here

  const updateDataValueforsort = (key, newData) => {
    let finalurl;
    let exists = url.includes(`${key}=`);
    if (exists) {
      if (url == `${key}=${newData}`) {
        finalurl = "none";
      } else {
        const sortByRegex = new RegExp(`${key}=[^&]+`);
        finalurl = url.replace(sortByRegex, `${key}=${newData}`);
      }
      nvg(`/category/${id}/${name}/${finalurl}`);
      window.location.reload();
    } else {
      if (url == "none") {
        finalurl = `&${key}=${newData}`;
      } else {
        finalurl = url + `&${key}=${newData}`;
      }
      nvg(`/category/${id}/${name}/${finalurl}`);
      window.location.reload();
    }
  };
  const updateDataValue = (key, newData) => {
    let finalurl;
    let exists;
    if (
      key == "min_price" ||
      key == "max_price" ||
      key == "sort_by" ||
      key == "offset"
    ) {
      exists = url.includes(`${key}=${newData}`);
      if (exists) {
        if (url == `${key}=${newData}`) {
          finalurl = "none";
        } else {
          finalurl = url.replace(`${key}=${newData}`, "");
        }
        doublefilterstep2("page", 1, finalurl);
      } else {
        if (url == "none") {
          finalurl = `${key}=${newData}`;
        } else {
          finalurl = url + `&${key}=${newData}`;
        }
        doublefilterstep2("page", 1, finalurl);
      }
    } else {
      exists = url.includes(`${key}=${newData}`);
      if (exists) {
        if (url == `&${key}=${newData}`) {
          finalurl = "none";
        } else {
          finalurl = url.replace(`&${key}=${newData}`, "");
        }
        doublefilterstep2("page", 1, finalurl);
      } else {
        if (url == "none") {
          finalurl = `&${key}=${newData}`;
        } else {
          finalurl = url + `&${key}=${newData}`;
        }
        doublefilterstep2("page", 1, finalurl);
      }
    }
  };

  const [categories, setCategories] = useState([]);

useEffect(()=>{
  let regex = /max_price=(\d+)/;
  let hasMaxPrice = regex.test(url);
  if (hasMaxPrice) {
    // Extract max_price value using match
    let match = url.match(regex);
    if (match) {
      setpricevalue(match[1])
    }
  }
},[url])


  return isLoading == true || attributeloading == true ? (
    <></>
  ) : (
    <>
      <Header />

      <div className="category-header7" style={{ zIndex: 9991,marginTop:"16px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="category-contain">
                <div className="category-left showandhide ">
                  <div className="header-category">
                    <a className="category-toggle">
                      <i className="fa fa-bars" />
                      pages
                    </a>
                    <ul
                      id="main-menu"
                      className={
                        showsidebar == true
                          ? "collapse-category show sm pixelstrap sm-horizontal open"
                          : "collapse-category show sm pixelstrap sm-horizontal"
                      }
                    >
                      <li
                        className="back-btn"
                        onClick={() => setshowsidebar(false)}
                      >
                        <i className="fa fa-angle-left" /> back
                      </li>

                      {categories.map((item, index) => (
                        <MobileSubcategory value={item} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchbar-input ajax-search the-basics">
          <div className="input-group">
            <span className="input-group-text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="28.931px"
                height="28.932px"
                viewBox="0 0 28.931 28.932"
                style={{ enableBackground: "new 0 0 28.931 28.932" }}
                xmlSpace="preserve"
              >
                <g>
                  <path d="M28.344,25.518l-6.114-6.115c1.486-2.067,2.303-4.537,2.303-7.137c0-3.275-1.275-6.355-3.594-8.672C18.625,1.278,15.543,0,12.266,0C8.99,0,5.909,1.275,3.593,3.594C1.277,5.909,0.001,8.99,0.001,12.266c0,3.276,1.275,6.356,3.592,8.674c2.316,2.316,5.396,3.594,8.673,3.594c2.599,0,5.067-0.813,7.136-2.303l6.114,6.115c0.392,0.391,0.902,0.586,1.414,0.586c0.513,0,1.024-0.195,1.414-0.586C29.125,27.564,29.125,26.299,28.344,25.518z M6.422,18.111c-1.562-1.562-2.421-3.639-2.421-5.846S4.86,7.983,6.422,6.421c1.561-1.562,3.636-2.422,5.844-2.422s4.284,0.86,5.845,2.422c1.562,1.562,2.422,3.638,2.422,5.845s-0.859,4.283-2.422,5.846c-1.562,1.562-3.636,2.42-5.845,2.42S7.981,19.672,6.422,18.111z"></path>
                </g>
              </svg>
            </span>
            <input
              type="search"
              className="form-control typeahead"
              placeholder="Search a Product"
            />
            <span className="input-group-text close-searchbar">
              <svg
                viewBox="0 0 329.26933 329"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <section
        className="section-big-pt-space ratio_asos b-g-light marginfromtop"
        style={{ padding: "0px" }}
      >
        <div className="collection-wrapper" style={{ background: "#f9f9f9" }}>
          <div className="custom-container">
            <div className="row" style={{ background: "#f9f9f9" }}>
              <div
                className="col-sm-3 collection-filter category-page-side"
                style={{
                  zIndex: currentwdith < 990 ? 9991 : 1,
                  left: "-15px",
                  display:
                    currentwdith < 990
                      ? filter == true
                        ? "block"
                        : "none"
                      : "block",
                  padding: "10px",
                }}
              >
                {/* side-bar colleps block stat */}
                <div className="collection-filter-block creative-card creative-inner category-side">
                  {/* brand filter start */}
                  <div
                    className="collection-mobile-back"
                    onClick={() => {
                      setfilter(!filter);
                    }}
                  >
                    <span className="filter-back">
                      <i className="fa fa-angle-left" aria-hidden="true" /> back
                    </span>
                  </div>
                  <div className="collection-collapse-block open">
                    <h4>CATEGORIES</h4>
                    <h6
                  
                      style={{
                        color: data4.parentcategoryname?.name ? `black` : `#878787`,
                        padding: `10px 0px 10px 8px`,
                      }}
                    >{data4.parentcategoryname?.name ? data4.parentcategoryname?.name : data4.categorydata?.name}</h6>
                    <h6
                      style={{
                        color: `#black`,
                        position: "relative",
                        left: "10px",
                        display: data4.parentcategoryname?.name ? "block" : "none",
                        padding: `0 0 10px 5px`,
                      }}
                    >{data4.parentcategoryname?.name ? data4.categorydata?.name : ''}</h6>
                  </div>
                  {/* brand  filter start here  */}
                  <div className="collection-collapse-block open" style={{display:data4.availableFilters.brand?.[0] ? 'block' : 'none'}}>
                    <h3
                      className={
                        brand == true
                          ? "collapse-block-title dynamic-after2"
                          : "collapse-block-title dynamic-after"
                      }
                      onClick={() => {
                        brand == false ? setbrand(true) : setbrand(false);
                      }}
                    >
                      brand
                    </h3>
                    <div
                      className="collection-collapse-block-content"
                      style={{
                        display: brand == false ? "none" : "block",
                      }}
                    >
                      <div className="collection-brand-filter">
                        {data4.availableFilters.brand.map((item, index) => (
                          <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                            {!url.includes(`brand=${item}`) ? (
                              <input
                                type="checkbox"
                                className="custom-control-input form-check-input"
                                onClick={() => {
                                  setpageSize(0);
                                  updateDataValue("brand", item);
                                }}
                                id="item2"
                              />
                            ) : (
                              <input
                                type="checkbox"
                                onClick={() => {
                                  updateDataValue("brand", item);
                                }}
                                className="custom-control-input form-check-input"
                                id="item2"
                                checked
                              />
                            )}
                            <label
                              className="custom-control-label form-check-label"
                              htmlFor="item2"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* brand  filter end here  */}

                  {/* color  filter start here  */}
                  <div className="collection-collapse-block open" style={{display:data4.availableFilters.color?.[0] ? 'block' : 'none'}}>
                    <h3
                      className={
                        color == true
                          ? "collapse-block-title dynamic-after2"
                          : "collapse-block-title dynamic-after"
                      }
                      onClick={() => {
                        color == false ? setcolor(true) : setcolor(false);
                      }}
                    >
                      Color
                    </h3>
                    <div
                      className="collection-collapse-block-content"
                      style={{
                        display: color == false ? "none" : "block",
                      }}
                    >
                      <div className="collection-brand-filter">
                        {data4.availableFilters.color.map((item, index) => (
                          <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                            {!url.includes(`color=${item}`) ? (
                              <input
                                type="checkbox"
                                className="custom-control-input form-check-input"
                                onClick={() => {
                                  setpageSize(0);
                                  updateDataValue("color", item);
                                }}
                                id="item2"
                              />
                            ) : (
                              <input
                                type="checkbox"
                                onClick={() => {
                                  updateDataValue("color", item);
                                }}
                                className="custom-control-input form-check-input"
                                id="item2"
                                checked
                              />
                            )}
                            <label
                              className="custom-control-label form-check-label"
                              htmlFor="item2"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* color  filter end here  */}

                  {/* size filter start here  */}
                  <div className="collection-collapse-block open" style={{display:data4.availableFilters.size?.[0] ? 'block' : 'none'}}>
                    <h3
                      className={
                        size == true
                          ? "collapse-block-title dynamic-after2"
                          : "collapse-block-title dynamic-after"
                      }
                      onClick={() => {
                        size == false ? setsize(true) : setsize(false);
                      }}
                    >
                      Size
                    </h3>
                    <div
                      className="collection-collapse-block-content"
                      style={{
                        display: size == false ? "none" : "block",
                      }}
                    >
                      <div className="collection-brand-filter">
                        {data4.availableFilters.size.map((item, index) => (
                          <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                            {!url.includes(`size=${item}`) ? (
                              <input
                                type="checkbox"
                                className="custom-control-input form-check-input"
                                onClick={() => {
                                  setpageSize(0);
                                  updateDataValue("size", item);
                                }}
                                id="item2"
                              />
                            ) : (
                              <input
                                type="checkbox"
                                onClick={() => {
                                  updateDataValue("size", item);
                                }}
                                className="custom-control-input form-check-input"
                                id="item2"
                                checked
                              />
                            )}
                            <label
                              className="custom-control-label form-check-label"
                              htmlFor="item2"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* size filter end here  */}

                  {/* size filter start here  */}
                  <div className="collection-collapse-block open" style={{display:data4.availableFilters.weight?.[0] ? 'block' : 'none'}}>
                    <h3
                      className={
                        weight == true
                          ? "collapse-block-title dynamic-after2"
                          : "collapse-block-title dynamic-after"
                      }
                      onClick={() => {
                        weight == false ? setweight(true) : setweight(false);
                      }}
                    >
                      Weight
                    </h3>
                    <div
                      className="collection-collapse-block-content"
                      style={{
                        display: weight == false ? "none" : "block",
                      }}
                    >
                      <div className="collection-brand-filter">
                        {data4.availableFilters.combinedWeight.map(
                          (item, index) => (
                            <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                              {!url.includes(
                                `weight=${item.weight} ${item.weightType}`
                              ) ? (
                                <input
                                  type="checkbox"
                                  className="custom-control-input form-check-input"
                                  onClick={() => {
                                    setpageSize(0);
                                    updateDataValue(
                                      "weight",
                                      `${item.weight} ${item.weightType}`
                                    );
                                  }}
                                  id="item2"
                                />
                              ) : (
                                <input
                                  type="checkbox"
                                  onClick={() => {
                                    updateDataValue(
                                      "weight",
                                      `${item.weight} ${item.weightType}`
                                    );
                                  }}
                                  className="custom-control-input form-check-input"
                                  id="item2"
                                  checked
                                />
                              )}
                              <label
                                className="custom-control-label form-check-label"
                                htmlFor="item2"
                              >
                                {`${item.weight} ${item.weightType}`}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  {/* size filter end here  */}

                  {/* price filter start here */}
                  <div className="collection-collapse-block border-0 open">
                    <h3
                      className="collapse-block-title dynamic-after3"
                      onClick={() => {
                        setprice(!price);
                      }}
                    >
                      price
                    </h3>

                    <p
                      style={{
                        paddingTop: "10px",
                        display: price == true ? "block" : "none",
                      }}
                    >
                      ₹{pricevalue}
                    </p>
                    <div
                      className="collection-collapse-block-content"
                      style={{ display: price == true ? "block" : "none" }}
                    >
                      <div
                        className="filter-slide"
                        style={{ paddingTop: "10px" }}
                      >
                        <input
                          className="js-range-slider"
                          type="range"
                          min={0}
                          max={14000}
                          name="my_range"
                          value={pricevalue}
                          
                          onChange={(e) => {
                            setpricevalue(e.target.value);
                            updateDataValueforsort("max_price", e.target.value);
                          }}
                          data-type="double"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* filter for sort by start here */}

              <div
                className="col-sm-3 collection-filter category-page-side"
                style={{
                  zIndex: currentwdith < 790 ? 9991 : 1,
                  left: "-15px",
                  display:
                    currentwdith < 700
                      ? sortby == true
                        ? "block"
                        : "none"
                      : "none",
                }}
              >
                {/* side-bar colleps block stat */}
                <div className="collection-filter-block creative-card creative-inner category-side">
                  {/* brand filter start */}
                  <div
                    className="collection-mobile-back"
                    onClick={() => {
                      setsortby(!sortby);
                    }}
                  >
                    <span className="filter-back">
                      <i className="fa fa-angle-left" aria-hidden="true" /> back
                    </span>
                  </div>
                  <div className="collection-collapse-block open">
                    <h3
                      className="collapse-block-title newarrow mt-0"
                      onClick={() => {
                        setbrand(!brand);
                      }}
                    >
                      Sort By
                    </h3>
                    <div
                      className="collection-collapse-block-content"
                      style={{ display: brand == true ? "block" : "none" }}
                    >
                      <div className="collection-brand-filter">
                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                          {url.includes(`order=ASE&orderby=selling_price`) ? (
                            <input
                              type="checkbox"
                              className="custom-control-input form-check-input"
                              onClick={() => {
                                doublefilterstep1(
                                  "order",
                                  "ASE",
                                  "orderby",
                                  "selling_price"
                                );
                              }}
                              id="item2"
                              checked
                            />
                          ) : url.includes(`orderdy=`) ? (
                            <input
                              type="checkbox"
                              className="custom-control-input form-check-input"
                              onClick={() => {
                                doublefilterstep1(
                                  "order",
                                  "ASE",
                                  "orderby",
                                  "selling_price"
                                );
                              }}
                              id="item2"
                              checked
                            />
                          ) : (
                            <input
                              type="checkbox"
                              onClick={() => {
                                doublefilterstep1(
                                  "order",
                                  "ASE",
                                  "orderby",
                                  "selling_price"
                                );
                              }}
                              className="custom-control-input form-check-input"
                              id="item2"
                            />
                          )}
                          <label
                            className="custom-control-label form-check-label"
                            htmlFor="zara"
                          >
                            Price-Low to High
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                          {url.includes(`order=DESC&orderby=selling_price`) ? (
                            <input
                              type="checkbox"
                              className="custom-control-input form-check-input"
                              onClick={() => {
                                doublefilterstep1(
                                  "order",
                                  "DESC",
                                  "orderby",
                                  "selling_price"
                                );
                              }}
                              id="item2"
                              checked
                            />
                          ) : (
                            <input
                              type="checkbox"
                              onClick={() => {
                                doublefilterstep1(
                                  "order",
                                  "DESC",
                                  "orderby",
                                  "selling_price"
                                );
                              }}
                              className="custom-control-input form-check-input"
                              id="item2"
                            />
                          )}
                          <label
                            className="custom-control-label form-check-label"
                            htmlFor="vera-moda"
                          >
                            Price-High to Low
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                          {url.includes(`orderby=newarrivedproduct`) ? (
                            <input
                              type="checkbox"
                              className="custom-control-input form-check-input"
                              onClick={() => {
                                updateDataValueforsort(
                                  "orderby",
                                  "newarrivedproduct"
                                );
                              }}
                              id="item2"
                              checked
                            />
                          ) : (
                            <input
                              type="checkbox"
                              onClick={() => {
                                updateDataValueforsort(
                                  "orderby",
                                  "newarrivedproduct"
                                );
                              }}
                              className="custom-control-input form-check-input"
                              id="item2"
                            />
                          )}
                          <label
                            className="custom-control-label form-check-label"
                            htmlFor="forever-21"
                          >
                            Newest First
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                          {url.includes(`orderby=trendingproduct`) ? (
                            <input
                              type="checkbox"
                              className="custom-control-input form-check-input"
                              onClick={() => {
                                updateDataValueforsort(
                                  "orderby",
                                  "trendingproduct"
                                );
                              }}
                              id="item2"
                              checked
                            />
                          ) : (
                            <input
                              type="checkbox"
                              onClick={() => {
                                updateDataValueforsort(
                                  "orderby",
                                  "trendingproduct"
                                );
                              }}
                              className="custom-control-input form-check-input"
                              id="item2"
                            />
                          )}
                          <label
                            className="custom-control-label form-check-label"
                            htmlFor="forever-21"
                          >
                            Populer
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* filter for sort by end here */}
              <div className="collection-content col">
                <div className="page-main-content p-md-0">
                  <div className="row">
                    <div className="col-sm-12">
                      <div
                        className="collection-product-wrapper"
                        style={{ background: "#f9f9f9" }}
                      >
                        <div className="product-top-filter">
                          <div
                            className="row"
                            style={{ background: "#f9f9f9" }}
                          ></div>
                          <div className="row">
                            <div className="col-12">
                              <div className="product-filter-content">
                                <div
                                  className="search-count text-start"
                                  style={{
                                    border: "none",
                                    padding: "20px 0px 7px 0px",
                                  }}
                                >
                                  {/* <h5 style={{fontWeight: 400, fontSize: 13}}>Showing Products 1-24 of 10 Result</h5> */}
                                  <h5
                                    style={{
                                      fontSize: 13,
                                      color: "black",
                                      fontWeight: 100,
                                    }}
                                  >
                                    {/* Showing Products{" "}
                                    {(data?.pageNumber == 0
                                      ? data?.pageNumber
                                      : data?.pageNumber - 1) *
                                      data?.itemsPerPage}
                                    -
                                    {Math.min(
                                      (data?.pageNumber == 0
                                        ? data?.pageNumber + 1
                                        : data?.pageNumber) * 12,
                                      data?.totalItems
                                    )}{" "}
                                    of {data?.totalItems} Result */}

    Showing Products{" "}
    {Math.min((data?.pageNumber - 1) * data?.itemsPerPage + 1, data?.totalItems)}-
    {Math.min(data?.pageNumber * data?.itemsPerPage, data?.totalItems)}{" "}
    of {data?.totalItems} Results

                                  </h5>
                                </div>
                                <div
                                  className="collection-view"
                                  style={{
                                    width: "100%",
                                    paddingBottom: "0px",
                                  }}
                                >
                                  <ul>
                                    <li
                                      style={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        paddingBottom: "4px",
                                      }}
                                    >
                                      Sort By
                                    </li>
                                    <li
                                      style={{
                                        fontSize: 13,
                                        marginRight: 12,
                                        paddingBottom: "4px",
                                        color: url.includes(
                                          `order=ASE&orderby=selling_price`
                                        )
                                          ? "#059fe2"
                                          : url.includes(`order`)
                                          ? ""
                                          : "#059fe2",
                                        fontWeight: url.includes(
                                          `order=ASE&orderby=selling_price`
                                        )
                                          ? "550"
                                          : url.includes(`order`)
                                          ? "400"
                                          : "550",
                                        borderBottom: url.includes(
                                          `order=ASE&orderby=selling_price`
                                        )
                                          ? "2px solid #059fe2"
                                          : url.includes(`order`)
                                          ? ""
                                          : "2px solid #059fe2",
                                      }}
                                      onClick={() => {
                                        doublefilterstep1(
                                          "order",
                                          "ASE",
                                          "orderby",
                                          "selling_price"
                                        );
                                      }}
                                    >
                                      Price - Low to High
                                    </li>
                                    <li
                                      style={{
                                        fontSize: 13,
                                        marginRight: 12,
                                        paddingBottom: "4px",
                                        color: url.includes(
                                          `order=DESC&orderby=selling_price`
                                        )
                                          ? "#059fe2"
                                          : "",
                                        fontWeight: url.includes(
                                          `order=DESC&orderby=selling_price`
                                        )
                                          ? "550"
                                          : "400",
                                        borderBottom: url.includes(
                                          `order=DESC&orderby=selling_price`
                                        )
                                          ? "2px solid #059fe2"
                                          : "",
                                      }}
                                      onClick={() => {
                                        doublefilterstep1(
                                          "order",
                                          "DESC",
                                          "orderby",
                                          "selling_price"
                                        );
                                      }}
                                    >
                                      Price - High to Low
                                    </li>
                                    <li
                                      style={{
                                        fontSize: 13,
                                        marginRight: 12,
                                        paddingBottom: "4px",
                                        color: url.includes(
                                          `orderby=newarrivedproduct`
                                        )
                                          ? "#059fe2"
                                          : "",
                                        fontWeight: url.includes(
                                          `orderby=newarrivedproduct`
                                        )
                                          ? "550"
                                          : "400",
                                        borderBottom: url.includes(
                                          `orderby=newarrivedproduct`
                                        )
                                          ? "2px solid #059fe2"
                                          : "",
                                      }}
                                      onClick={() => {
                                        updateDataValueforsort(
                                          "orderby",
                                          "newarrivedproduct"
                                        );
                                      }}
                                    >
                                      Newest First
                                    </li>
                                    <li
                                      style={{
                                        fontSize: 13,
                                        marginRight: 12,
                                        paddingBottom: "4px",
                                        color: url.includes(
                                          `orderby=trendingproduct`
                                        )
                                          ? "#059fe2"
                                          : "",
                                        fontWeight: url.includes(
                                          `orderby=trendingproduct`
                                        )
                                          ? "550"
                                          : "400",
                                        borderBottom: url.includes(
                                          `orderby=trendingproduct`
                                        )
                                          ? "2px solid #059fe2"
                                          : "",
                                      }}
                                      onClick={() => {
                                        updateDataValueforsort(
                                          "orderby",
                                          "trendingproduct"
                                        );
                                      }}
                                    >
                                      Populer
                                    </li>
                                    {/* <li style={{ fontSize: 13 }}>Discount</li> */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrapper-grid product">
                          <div className="row removepadding additionalgap">
                            {" "}
                            {isLoading == true ? (
                              <h2
                                style={{
                                  textAlign: "center",
                                  paddingTop: "15px",
                                  fontWeight: "600",
                                  fontSize: "20px",
                                }}
                              >
                                <Loader />
                              </h2>
                            ) : data.data?.[0] ? (
                              data.data.map((item, index) => (
                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                  <div
                                    className="bg-white"
                                    style={{ margin: "3px 4px" }}
                                  >
                                    <div className="product-imgbox">
                                      <div className="product-front">
                                        <button
                                          type="button"
                                          className="btn fixedhight"
                                          style={{ width: "100%" }}
                                          onClick={() => {
                                            transfer(item._id);
                                          }}
                                        >
                                          {" "}
                                          <img
                                            src={`http://localhost:8000/uploads/images/${item?.product_image1}`}
                                            className="img-fluid  "
                                            alt="product"
                                          />{" "}
                                        </button>
                                      </div>
                                    </div>
                                    <div className="product-detail detail-center detail-inverse">
                                      <div className="detail-title">
                                        <div className="detail-left">
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "center",
                                            }}
                                          >
                                            {" "}
                                            <button
                                              type="button"
                                              className="btn"
                                              onClick={() => {
                                                transfer(item._id);
                                              }}
                                            >
                                              <h6
                                                className="price-title"
                                                style={{
                                                  fontSize: "12px",
                                                  fontWeight: "600",
                                                }}
                                              >
                                                {item?.product_name}
                                              </h6>{" "}
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          className="detail-right"
                                          style={{ width: "100%" }}
                                        >
                                          <div
                                            className="price"
                                            style={{ width: "100%" }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                color: "#000",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                              }}
                                            >
                                              {" "}
                                              ₹{item?.selling_price}{" "}
                                              {item?.stock_record?.discount ==
                                              0 ? (
                                                ""
                                              ) : (
                                                <span
                                                  style={{
                                                    fontSize: "10px",
                                                    color: "#c1c1c1",
                                                    lineHeight: "20px",
                                                    textDecoration:
                                                      "line-through",
                                                    paddingLeft: "3px",
                                                    fontWeight: "400",
                                                  }}
                                                >
                                                  ₹{item.mrp_price}
                                                </span>
                                              )}
                                              {item?.stock_record?.discount ==
                                              0 ? (
                                                ""
                                              ) : (
                                                <span
                                                  style={{
                                                    fontSize: "10px",
                                                    color: "#059fe2",
                                                    lineHeight: "20px",
                                                    paddingLeft: "3px",
                                                    fontWeight: "400",
                                                  }}
                                                >
                                                  {`(${parseInt(
                                                    ((item.mrp_price -
                                                      item.selling_price) /
                                                      item.mrp_price) *
                                                      100
                                                  )} %off)`}
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <h2
                                style={{
                                  textAlign: "center",
                                  paddingTop: "17px",
                                  fontWeight: "600",
                                  fontSize: "20px",
                                }}
                              >
                                No Result Found !
                              </h2>
                            )}
                          </div>
                        </div>
                        {data.data[0] ? (
                          <div className="product-pagination">
                            <div className="theme-paggination-block">
                              <div className="row mobilemargin">
                                <div className="col-xl-12 col-md-12 col-sm-12">
                                  <ReactPaginate
                                    pageCount={data?.totalPages}
                                    pageRangeDisplayed={5}
                                    marginPagesDisplayed={2}
                                    onPageChange={(e) => {
                                      setCurrentPage(e.selected + 1);
                                      pagefilter("page", e.selected + 1);
                                    }}
                                    containerClassName="pagination"
                                    breakClassName="page-item"
                                    activeClassName="active"
                                    pageClassName="page-item"
                                    previousLabel={
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="javascript:void(0)"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">
                                            <i
                                              className="fa fa-chevron-left"
                                              aria-hidden="true"
                                            />
                                          </span>{" "}
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                    }
                                    nextLabel={
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="javascript:void(0)"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">
                                            <i
                                              className="fa fa-chevron-right"
                                              aria-hidden="true"
                                            />
                                          </span>{" "}
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="header7 bottomdgn">
                <div className="custom-container">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="header-contain"
                        style={{ padding: "8px 0px 0px 0px" }}
                      >
                        <div
                          className="collection-product-wrapper"
                          style={{ width: "100%" }}
                        >
                          <div className="product-top-filter">
                            <div className="row">
                              <div
                                className="col-xl-12"
                                style={{
                                  paddingTop: "10px",
                                  display: "flex",
                                  justifyContent: "space-around",
                                }}
                              >
                                <div
                                  className=""
                                  onClick={() => {
                                    setfilter(!filter);
                                  }}
                                >
                                  <span
                                    className="filter "
                                    style={{ paddingright: "100px" }}
                                  >
                                    <i
                                      className="fa fa-filter"
                                      aria-hidden="true"
                                      style={{
                                        fontSize: "24px",
                                        color: "#4150b5",
                                      }}
                                    />
                                  </span>
                                </div>

                                <div
                                  className="toggle-nav"
                                  style={{ justifyContent: "center" }}
                                  onClick={() => setshowsidebar(!showsidebar)}
                                >
                                  <i className="fa fa-bars sidebar-bar" />
                                </div>

                                <div className="collection-collapse">
                                  <h3
                                    className="collapse-block-title mt-0"
                                    onClick={() => {
                                      setsortby(!sortby);
                                    }}
                                  >
                                    <i
                                      class="fa-solid fa-arrow-down-wide-short"
                                      style={{ color: "#4150b5" }}
                                      onClick={() => {
                                        setsortby(!sortby);
                                      }}
                                    />
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section End */}

      {/* <Footer /> */}
    </>
  );
};

export default Category;
