import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MobileSubcategory from "../components/Header/MobileSubcategory ";
import ReactPaginate from "react-paginate";
import Loader from "../components/Loader";
import { useGetItemByBrandQuery } from "../store/api/brandapi";
const Categoryforbrand = () => {
  const { name } = useParams();
  const nvg = useNavigate();
  const [brand, setbrand] = useState(true);
  const [categoriesbtn, setcategoriesbtn] = useState(true)
  const [filter, setfilter] = useState(false);
  const [currentwdith, setcurrentwdith] = useState(window.innerWidth);
  const [showsidebar, setshowsidebar] = useState(false);
  const [sortby, setsortby] = useState(false);
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [data4, setData4] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setpageSize] = useState(12);

  const transfer = (productid,pname) => {
    nvg("/productdetails", {
      state: {
        id: productid,
        pname: pname,
      },
    });
    window.location.reload();
  };



  const {data:itembybrand,isLoading:brandloading} = useGetItemByBrandQuery(name)
  console.log("kd brand of brnad",itembybrand)
  const [categories, setCategories] = useState([]);
  const [totalrecords, settotalrecords] = useState(0);

  const filterdata = async (pagenumber) => {
    console.log("page numer is here",pagenumber);
      setloading(true);
      let urlapi = `${process.env.REACT_APP_API_URL}homepageapi/shop_by_brand/${name}/?offset=${pagenumber}`;
      const response = await axios.get(urlapi);

settotalrecords(response.data.count);
setData(response.data.results.results);
setData4(response.data.results.categories)
setloading(false)
  }


  const pageCount = Math.ceil(totalrecords / 12);

  return (
    brandloading == true ? <></> : <>
      <Header />

      <div className="category-header7" style={{ zIndex: 9991 }}>
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

      {/* breadcrumb start */}
      <div className="breadcrumb-main marginfromtop breadcrumbpadding">
        <div className="container m-0">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-contain">
                <div>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">home</a>
                    </li>
                    {/* <li style={{fontSize:"12px"}}>&gt;</li>
                <li><a href="javascript:void(0)">Category</a></li> */}
                    <li style={{ fontSize: "12px" }}>&gt;</li>
                    <li>
                      <a href="javascript:void(0)">
                        Brand
                        {/* {location.state?.pagename} */}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb End */}
      {/* section start */}
      <section
        className="section-big-pt-space ratio_asos b-g-light"
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
                      console.log("click me");
                    }}
                  >
                    <span className="filter-back">
                      <i className="fa fa-angle-left" aria-hidden="true" /> back 
                    </span>
                  </div>
                  {/* <div className="collection-collapse-block open">
                          <h4>
                          CATEGORIES
                            </h4>
                            <h6 style={{color:categorytwo == null ? `black` : `#878787`,padding: `10px 0px 10px 8px`}}>{` ${categroyone}`}</h6>
                            <h6 style={{color:`#black`,position:'relative',left:'10px',display:categorytwo == null ? 'none' : 'block',padding: `0 0 10px 8px`}}>{`${categorytwo}`}</h6>
                            </div> */}

                        <div className="collection-collapse-block open">
                          <h3
                            className={"collapse-block-title dynamic-after2"}
                            // className={
                            //   item.name.length > 6
                            //     ? "collapse-block-title dynamic-after2"
                            //     : "collapse-block-title dynamic-after"
                            // }
                            onClick={() => {
                              categoriesbtn == false
                                ? setcategoriesbtn(true)
                                : setcategoriesbtn(false);
                            }}
                         
                          >
                           CATEGORIES
                            {
                              // item.name.length > 7 ?
                              <style>
                                {`.dynamic-after::after {
            left:51px;
          }  .dynamic-after2::after {
            left:110px;
          }`}
                              </style>
                              //  : <style>
                              //   {`
                              //   .dynamic-after::after {
                              //     left:50px;
                              //   }
                              // `}
                              // </style>
                            }
                          </h3>
                          <div
                            className="collection-collapse-block-content"
                            style={{
                              display:
                              categoriesbtn == true ? "block" : "none",
                            }}
                          >
                            <div className="collection-brand-filter">
                            {data4.map((item2, index2)=>(

                                <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">                                  
                          
                                    <input
                                      type="checkbox"
                                      className="custom-control-input form-check-input"
                                      id="item2"
                                      onClick={()=>{nvg(`/category/${item2[0]}/${item2[1]}/&attr_name_Brand=Brand&attr_value_Brand=${name}`)}}
                                    />
                                 
                                  <label
                                    className="custom-control-label form-check-label"
                                    htmlFor="item2"
                                  >
                                    {item2[1]}
                                  </label>
                                </div>
                            ))}
                           
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
                                    Showing Products{" "}
                                    {(currentPage == 0 ? currentPage : currentPage - 1) * pageSize }-
                                    {Math.min(
                                      (currentPage == 0 ? currentPage + 1 : currentPage ) * 12,
                                      totalrecords
                                    )}{" "}
                                    of {totalrecords} Result
                                  </h5>
                                </div>
                                <div
                                  className="collection-view"
                                  style={{
                                    width: "100%",
                                    paddingBottom: "0px",
                                  }}
                                >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrapper-grid product">
                          <div className="row removepadding additionalgap">
                            {" "}
                            { itembybrand.data[0] ? (
                              itembybrand.data.map((item, index) => (
                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                  <div
                                    className="bg-white catbox"
                                    style={{ margin: "3px 4px" }}
                                  >
                                    <div className="product-imgbox">
                                      <div className="product-front">
                                        <button
                                          type="button"
                                          className="btn fixedhight"
                                          style={{ width: "100%" }}
                                          onClick={() => {
                                            transfer(item.id,item.title);
                                          }}
                                        >
                                          {" "}
                                          <img
                                            src={`${process.env.REACT_APP_API_URL}media/${item?.image}`}
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
                                                transfer(item.id,item.title);
                                              }}
                                            >
                                              <h6
                                                className="price-title catbox2"
                                                style={{
                                                  fontSize: "12px",
                                                  fontWeight: "600",
                                                  display: "-webkit-box",
                                                  WebkitLineClamp: "1",
                                                  WebkitBoxOrient: "vertical",
                                                  overflow: "hidden",
                                                }}
                                              >
                                                {item?.title}
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
                                                fontWeight:'500'
                                              }}
                                            >
                                              {" "}
                                              ₹{item?.stockrecords__price}{" "} {item.stock_record?.discount == 0 ? '' : <span style={{fontSize: '10px',color: '#c1c1c1',lineHeight: '20px',textDecoration: 'line-through',paddingLeft:'3px',fontWeight:'400'}}>₹{item.stock_record?.mrp}</span>}{item.stock_record?.discount == 0 ? '' : <span style={{fontSize: '10px',color: '#230bb3',lineHeight: '20px',paddingLeft:'3px',fontWeight:'400'}}>{item.stock_record?.discount_type == "amount" ? `(₹${item.stock_record?.discount} off)` : `(${item.stock_record?.discount} %off)`}</span>}
                                            </div>
                                            {/* <div className="price text-align-center" style={{display:'flex',justifyContent:'center'}}>  ₹{item.price} </div> */}
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
                        {/* {loading == true ? "" : data[0] ? ( */}
                      {
                        data[0] ? 
                       <div className="product-pagination">
                          <div className="theme-paggination-block">
                            <div className="row mobilemargin">
                              <div className="col-xl-12 col-md-12 col-sm-12">
                                <ReactPaginate
                                  pageCount={pageCount}
                                  pageRangeDisplayed={5}
                                  marginPagesDisplayed={2}
                                  onPageChange={(e) => {
                                    setCurrentPage(e.selected + 1);
                                    filterdata(e.selected * 12);
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
                        </div> : ''}
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
                                        console.log("click me");
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

export default Categoryforbrand;
