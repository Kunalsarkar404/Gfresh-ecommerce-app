import React, { useEffect, useState } from "react";
// import React from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { TfiAlignJustify } from "react-icons/tfi";
import { useLocation } from "react-router-dom";
export const Credit = () => {
  const [owl, setowl] = useState("tab-2");
  const [color,setcolor] = useState(true)
  const [size,setsize] = useState(true)
  const [filter,setfilter] = useState(true)
  const currentwdith = window.innerWidth;


  useEffect(()=>{
    
if(currentwdith < 730){
  setfilter(false)
}else{
  setfilter(true)
}
  },[])
  return (
    <div>
      <Header />



      <div>
          {/* breadcrumb start */}
  <div className="breadcrumb-main marginfromtop" style={{backgroundColor:"#ececec"}}>
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              <ul>
                <li><a href="/">home</a></li>
                <li><i className="fa fa-angle-double-right" /></li>
                <li><a href="javascript:void(0)">Credit History</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb End */}
        <section className="section-big-pt-space pb-2" style={{backgroundColor:"#ececec"}}>
          <div className="col-lg-12 col-sm-12 col-xs-12 mt-lg-3 mt-xs-4 mb-5">
            <div className="container-fuild emp-profile">
              <div className="row profile2">
                {/* <section className="tab-product-main-tab">
                  <div className="tab2-product d-flex justify-content-center main-tab2 newscroll">
                    <ul className="abc">
                      <li className={owl == "tab-1" ? "current" : ""}>
                        <a
                        className="extradesign"
                          href="javascript:void(0)"
                          onClick={() => setowl("tab-1")}
                        >
                           <img src="./images/icon/11.png" alt="404" /> &nbsp; Profile
                        </a>
                      </li>
                      <li className={owl == "tab-2" ? "current" : ""}>
                        <a
                          href="javascript:void(0)"
                          onClick={() => setowl("tab-2")}
                        >
                       <img src="./images/icon/12.png" alt="404" /> &nbsp;
                          Orders History
                        </a>
                      </li>
                      <li className={owl == "tab-3" ? "current" : ""}>
                        <a
                          href="javascript:void(0)"
                          onClick={() => setowl("tab-3")}
                        >
                          {" "}
                          <img src="./images/icon/14.png" alt="404" /> &nbsp;
                          Addresses List
                        </a>
                      </li>
                      <li className={owl == "tab-4" ? "current" : ""}>
                        <a
                          href="javascript:void(0)"
                          onClick={() => setowl("tab-4")}
                        >
                          <img src="./images/icon/13.png" alt="404" /> &nbsp;
                          Voucher List
                        </a>
                      </li>
                    </ul>
                  </div>
                </section> */}

                <section className="tab-product-main-tab">
                  <div className="row mt-2">
             

                      <div id="tab-2" style={{display:owl == 'tab-2' ? 'block':'none'}} className={owl == 'tab-2' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                      <div className="row">
                        <div className="col-12 py-3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-12 d-flex align-items-center"><p style={{fontWeight:'700',marginBottom:'6px'}}>Available Credit : <span><img src="./images/icon/Rupee.png" alt="" /></span> <span>₹2000</span></p></div>
                                <div className="col-xl-8 col-lg-12">
                                    <div className="row d-flex justify-content-end">
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 " style={{padding:"0px 3px",marginBottom:'6px'}}>
                                        <input type="text" placeholder="Order Id" style={{padding:'4px 10px',borderRadius:'0px'}} className="form-control filtercredit" />

                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6" style={{padding:"0px 3px",marginBottom:'6px'}}>
                                        <input type="text" placeholder="Date" style={{padding:'4px 10px',borderRadius:'0px'}} className="form-control filtercredit" />
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-6 justify-content-xl-start justify-content-end d-flex rightauto" style={{gap:'4px',marginBottom:'6px'}}>
                                        <button className="btn btn-primary" style={{padding:"4px 14px",borderRadius:'0px',fontSize:'14px',backgroundColor:"#F4F4F4",color:"black",borderColor:'#F4F4F4'}}>Clear All</button>
                                        <button className="btn btn-primary" style={{padding:"4px 16px",borderRadius:'0px',fontSize:'14px',backgroundColor:'#230BB3'}}><i className="fa fa-filter" aria-hidden="true" /> Apply</button>
                                    </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    <div className="col-12" >
                  
                          {/* <div className="filter-main-btn" style={{display :currentwdith < 730 ? "block" : "none"}} onClick={()=>{setfilter(!filter)}}><span className="filter-btn  "><i className="fa fa-filter" aria-hidden="true" /> Filter</span></div> */}
                    
                   <div className="table-responsive">
  <table className="table">
    <thead className="table-light">
      <tr>
        <th style={{color:"#230BB3"}}>Id</th>
        <th style={{color:"#230BB3"}}>Order Id</th>
        <th style={{color:"#230BB3"}}>Description</th>
        <th style={{color:"#230BB3"}}>Amount</th>
        <th style={{color:"#230BB3"}}>Order Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01</td>
        <td>XFYA1458</td>
        <td>
          <p> Earn Credit - 151651 </p>
        </td>
        <td style={{color:"#2FC60E"}}>+₹70</td>
        <td>May 04, 2022</td>
      </tr>
      <tr>
     
      <td>02</td>
      <td>XFYA1459</td>
       
           <td>
          <p> Earn Credit - 151651 </p>
        </td>
        <td style={{color:"#2FC60E"}}>+₹80</td>
        <td>May 04, 2023</td>
      </tr>
      <tr>
      {/* <td><img src="./images/mega-store/product/13.png" alt="404" /></td> */}
      <td>03</td>
      <td>XFYA1410</td>
           <td>
          <p > used Against - XFYA145863265 </p>
          {/* <p style={{color:"#8F9091"}}>on june 04, 2023</p> */}
        </td>
        <td style={{color:"#C01808"}}>-₹150</td>
        <td>May 04, 2022</td>
      </tr>
      <tr>
      <td>04</td>
      <td>XFYA1418</td>
      
           <td>
          <p > used Against - XFYA145863265  </p>
          {/* <p style={{color:"#8F9091"}}>on May 06, 2023</p> */}
        </td>
        <td style={{color:"#C01808"}}>-₹90</td>
        <td>May 10, 2023</td>
      </tr>
      <tr>
      <td>05</td>
      <td>XFYA1418</td>
      
           <td>
          <p > used Against - XFYA145863265  </p>
          {/* <p style={{color:"#8F9091"}}>on May 06, 2023</p> */}
        </td>
        <td style={{color:"#2FC60E"}}>-₹100</td>
        <td>May 10, 2023</td>
      </tr>
     
    </tbody>
  </table>
</div>

                      </div>
                      </div>
                      </div>

                  

                    
              
                    {/* <div className="col-lg-3 mb-5">
                      <div className="profile-head">
                        <div>
                          <h5 className="mt-0">Personal-Information</h5>
                        </div>
                        <br />

                        <div className="form-group">
                          <label style={{fontWeight:"500"}} htmlFor="name">First Name</label>
                          <input
                          style={{outline:'none'}}
                            type="text"
                            readOnly
                            className="form-control"
                            id="name"
                            placeholder="Muskan"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label style={{fontWeight:"500"}} htmlFor="review">Mobile Number</label>
                          <input
                          style={{outline:'none'}}
                            type="text"
                            readOnly
                            className="form-control"
                            id="review"
                            placeholder="+99-85XXXXXXXX"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label style={{fontWeight:"500"}} htmlFor="dob">Date of Birth</label>
                          <input
                          style={{outline:'none'}}
                            type="number"
                            readOnly
                            className="form-control"
                            id="review"
                            placeholder="+99-85XXXXXXXX"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 mt-5 mb-5">
                      <div className="profile-head">
                        <br />

                        <div className="form-group">
                          <label style={{fontWeight:"500"}} htmlFor="name">Last Name</label>
                          <input
                          style={{outline:'none'}}
                            type="text"
                            readOnly
                            className="form-control"
                            id="name"
                            placeholder="Khan"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label style={{fontWeight:"500"}} htmlFor="review">Email ID</label>
                          <input
                          style={{outline:'none'}}
                            type="Email"
                            readOnly
                            className="form-control"
                            id="review"
                            placeholder="name@example.com"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label style={{fontWeight:"500"}} htmlFor="dob">Gender</label>
                          <input
                          style={{outline:'none'}}
                            type="text"
                            readOnly
                            className="form-control"
                            id="review"
                            placeholder="Female"
                            required
                          />
                        </div>
                        <div className="herobtn">
                          <input
                          style={{outline:'none'}}
                            type="Submit"
                            className="profile-edit-btn"
                            name="btnAddMore"
                            value="Edit Profile"
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* </div> */}

        {/* <Footer /> */}

        {/* footer start */}
     
      </div>
    </div>
  );
};
export default Credit;
