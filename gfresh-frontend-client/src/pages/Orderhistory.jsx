import React, { useEffect, useState } from "react";
// import React from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { TfiAlignJustify } from "react-icons/tfi";
import { useLocation } from "react-router-dom";
export const Orderhistory = () => {
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
                <li><a href="javascript:void(0)">Order History</a></li>
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
              <div className="row profile">
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
                  <div className="row mt-5">
                    {/* profile page start here  */}
                    <div id="tab-1" style={{display:owl == 'tab-1' ? 'block':'none'}} className={owl == 'tab-1' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                    <div className="row">
                    <div className="col-md-4 d-flex  align-items-center" style={{flexDirection:'column'}}>
                      <div style={{width:'80%',display:'flex',justifyContent:'center'}}>
                      <img
                        src="./images/avtar/1.jpg"
                        alt="product"
                        className="UserImg  "
                        // style={{ justifyContent: "center" }}
                      />
                      </div>
                      <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                        <h4 className="">Hello,Muskan Khan</h4>
                      </div>
                      <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                      <p className="">name@example.com</p>
                      </div>
                      <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                      <p className="">United Kingdom</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-12">
                        <h5 className="mb-3">Personal-Information</h5>
                        </div>
                            <div className="col-lg-6 ">
                      <div className="profile-head">
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
                    <div className="col-lg-6 ">
                      <div className="profile-head">

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
                        <div className="herobtn" style={{marginBottom:'20px'}}>
                          <input
                          style={{outline:'none',padding:"5px 9px"}}
                            type="Submit"
                            className="profile-edit-btn"
                            name="btnAddMore"
                            value="Edit Profile"
                          />
                        </div>
                      </div>
                    </div>
                      </div>
                      </div>
                      </div>
                      </div>
                    {/* profile page start end  */}

                      <div id="tab-2" style={{display:owl == 'tab-2' ? 'block':'none'}} className={owl == 'tab-2' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                      <div className="row">
                    <div className={currentwdith < 730 ?filter == true ? "col-5 d-flex px-0 align-items-center" : "col-5 d-none px-0 align-items-center" : "col-3 px-xl-5 px-lg-3  align-items-center"} style={{flexDirection:'column',zIndex: 1,left:"-15px",display: filter == true ? "block" : "none"}}>
                     
















                    {/* <div className="col-sm-2 collection-filter category-page-side" style={{zIndex: 1,left:"-15px",display:"block"}}> */}
            {/* side-bar colleps block stat */}
            <div className="collection-filter-block creative-card creative-inner category-side" style={{padding:'0px 14px'}}>
              {/* brand filter start */}
              {/* <div className="collection-mobile-back">
                <span  className="filter-back"><i className="fa fa-angle-left" aria-hidden="true" /> back</span>
                </div> */}
                <div className="collection-collapse-block open">
                <h3 className="collapse-block-title" style={{marginTop:"0px"}} onClick={()=>{setcolor(!color)}}>Order Status</h3>
                <div className="collection-collapse-block-content" style={{display:color == true ? "block" : "none"}}>
                  <div className="size-selector">
                    <div className="collection-brand-filter">
                      <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                        <input type="checkbox" className="custom-control-input form-check-input" id="small" />
                        <label className="custom-control-label form-check-label" htmlFor="small">On the way</label>
                      </div>
                      <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                        <input type="checkbox" className="custom-control-input form-check-input" id="mediam" />
                        <label className="custom-control-label form-check-label" htmlFor="mediam">Delivered</label>
                      </div>
                      <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                        <input type="checkbox" className="custom-control-input form-check-input" id="large" />
                        <label className="custom-control-label form-check-label" htmlFor="large">Cancelled</label>
                      </div>
                      <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                        <input type="checkbox" className="custom-control-input form-check-input" id="extralarge" />
                        <label className="custom-control-label form-check-label" htmlFor="extralarge">Returned</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* size filter start here */}
              <div className="collection-collapse-block open">
                <h3 className="collapse-block-title" onClick={()=>{setsize(!size)}}>Order Time</h3>
                <div className="collection-collapse-block-content" style={{display:size == true ? "block" : "none"}}>
                  <div className="size-selector">
                    <div className="collection-brand-filter">
                      <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                        <input type="checkbox" className="custom-control-input form-check-input" id="small" />
                        <label className="custom-control-label form-check-label" htmlFor="small">Last 30 Days</label>
                      </div>
                      <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                        <input type="checkbox" className="custom-control-input form-check-input" id="mediam" />
                        <label className="custom-control-label form-check-label" htmlFor="mediam">Last 6 months</label>
                      </div>
                      <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                        <input type="checkbox" className="custom-control-input form-check-input" id="extralarge" />
                        <label className="custom-control-label form-check-label" htmlFor="extralarge">Last one year</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
            </div>
            
          {/* </div> */}














                    </div>
                    <div className={currentwdith < 730 ? filter == false ? "col-12" : "col-7" : "col-9"}>
                  
                          <div className="filter-main-btn" style={{display :currentwdith < 730 ? "block" : "none"}} onClick={()=>{setfilter(!filter)}}><span className="filter-btn  "><i className="fa fa-filter" aria-hidden="true" /> Filter</span></div>
                    
                   <div className="table-responsive">
  <table className="table">
    <thead className="table-light">
      <tr>
        <th>Order Id</th>
        <th>Order Date</th>
        <th>Total Quantity</th>
        <th>Amount</th>
        <th>Order Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>XFYA1458</td>
        <td>May 04, 2022</td>
        <td>Apparels : 1 Item</td>
        <td>₹70</td>
        <td>
          <p style={{width:"118px"}}> <span><img src="./images/icon/success.png" alt="404" /></span> &nbsp; Delivered </p>
          {/* <p style={{color:"#8F9091"}}>on May 04, 2022</p> */}
        </td>
      </tr>
      <tr>
     
      <td>XFYA1459</td>
        <td>May 04, 2023</td>
        <td>Apparels : 2 Item</td>
        <td>₹80</td>
           <td>
          <p style={{width:"118px"}}> <span><img src="./images/icon/danger.png" alt="404" /></span> &nbsp; Cancelled </p>
          {/* <p style={{color:"#8F9091"}}>on May 23, 2022</p> */}
        </td>
      </tr>
      <tr>
      {/* <td><img src="./images/mega-store/product/13.png" alt="404" /></td> */}
      <td>XFYA1410</td>
        <td>May 04, 2022</td>
        <td>Apparels : 3 Item</td>
        <td>₹50</td>
           <td>
          <p style={{width:"118px"}}> <span><img src="./images/icon/onway.png" alt="404" /></span> &nbsp; On the way </p>
          {/* <p style={{color:"#8F9091"}}>on june 04, 2023</p> */}
        </td>
      </tr>
      <tr>
      <td>XFYA1418</td>
        <td>May 10, 2023</td>
        <td>Apparels : 4 Item</td>
        <td>₹90</td>
      
           <td>
          <p style={{width:"118px"}}> <span><img src="./images/icon/delete.png" alt="404" /></span> &nbsp; Returned  </p>
          {/* <p style={{color:"#8F9091"}}>on May 06, 2023</p> */}
        </td>
      </tr>
      {/* <tr>
        <td>Novermber 8, 2021</td>
        <td>
          <div className="badge rounded-pill bg-success w-100">Completed</div>
        </td>
        <td>$224.00 for 2 item</td>
        <td>
          <div className="d-flex gap-2"> <a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-eye" /></a>
          </div>
        </td>
      </tr>
      <tr>
        <td>Novermber 8, 2021</td>
        <td>
          <div className="badge rounded-pill bg-success w-100">Completed</div>
        </td>
        <td>$126.00 for 3 item</td>
        <td>
          <div className="d-flex gap-2"> <a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-eye" /></a>
          </div>
        </td>
      </tr>
      <tr>
        <td>Novermber 4, 2021</td>
        <td>
          <div className="badge rounded-pill bg-danger w-100">Failed</div>
        </td>
        <td>$200.00 for 2 item</td>
        <td>
          <div className="d-flex gap-2"> <a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-eye" /></a>
            <a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-trash" /></a>
          </div>
        </td>
      </tr> */}
    </tbody>
  </table>
</div>

                      </div>
                      </div>
                      </div>

                      <div id="tab-3" style={{display:owl == 'tab-3' ? 'block':'none'}} className={owl == 'tab-3' ? "tab-content active default product-block3" : "tab-content product-block3"}>
          <div className="col-lg-12">
            <div className="container-fluid emp-order">
                <div className="row order">
                  <div className="">
                    <h4 className="Manage">
                      Manage Addresses <span>+ Add A New Address</span>
                    </h4>

                    <div className="">
                      <div class="row details">
                        <div class="col-lg-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title" style={{fontSize:"15px"}}>
                                Andrew Clark{" "}
                                <span className="hello">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </span>
                              </h5>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  checked
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  <h5 className="number">
                                    Mobile:{" "}
                                    <span className="number2">
                                      +99-3839483943
                                    </span>
                                  </h5>
                                </label>
                              </div>
                              <p className="small-text">
                                85-B, UAE Road, DubaiSaudi Arabia, 201001
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6 py-4">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title" style={{fontSize:"15px"}}>
                                Johan Clark{" "}
                                <span className="hello">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </span>
                              </h5>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  <h5 className="number">
                                    Mobile:{" "}
                                    <span className="number2">
                                      +99-3839483943
                                    </span>
                                  </h5>
                                </label>
                              </div>
                              <p className="small-text">
                                85-B, UAE Road, DubaiSaudi Arabia, 201001
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="row details3  mt-3 mb-5">
                        <div class="col-lg-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title" style={{fontSize:"15px"}}>
                                Johan Clark{" "}
                                <span className="hello">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </span>
                              </h5>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  <h5 className="number">
                                    Mobile:{" "}
                                    <span className="number2">
                                      +99-3839483943
                                    </span>
                                  </h5>
                                </label>
                              </div>
                              <p className="small-text">
                                85-B, UAE Road, DubaiSaudi Arabia, 201001
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
   
                      </div>

                      <div id="tab-4" style={{display:owl == 'tab-4' ? 'block':'none'}} className={owl == 'tab-4' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                      <div className="row">


{/* <div className='row Voucher'> */}
<div class="table-responsive">
  <table class="table">
    <thead className='firstrow'>
      <tr>
        <th scope="col">Voucher No.</th>
        <th scope="col">Customer</th>
        <th scope="col">Value</th>
        <th scope="col">Created Date</th>
        <th scope="col">Expired Date</th>
        <th scope="col">Gst Type</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className='secondrow'>
        <th scope="row">#800</th>
        <td>Ajay Singh</td>
        <td>100.00</td>
        <td>15 November 2023</td>
        <td>30 November 2023</td>
        <td>CGST</td>
        <td><img src="./images/icon/Frame 42.png" alt="404" /> </td>
      </tr>

      <tr className='thirdrow'>
        <th scope="row">#800</th>
        <td>Ajay Singh</td>
        <td>100.00</td>
        <td>15 November 2023</td>
        <td>30 November 2023</td>
        <td>CGST</td>
        <td><img src="./images/icon/Frame 43.png" alt="404" /> </td>
      </tr>

      <tr className='fourthrow'>
        <th scope="row">#800</th>
        <td>Ajay Singh</td>
        <td>100.00</td>
        <td>15 November 2023</td>
        <td>30 November 2023</td>
        <td>CGST</td>
        <td><img src="./images/icon/Frame 44.png" alt="404" /> </td>
      </tr>

      <tr className='fifthrow'>
        <th scope="row">#800</th>
        <td>Ajay Singh</td>
        <td>100.00</td>
        <td>15 November 2023</td>
        <td>30 November 2023</td>
        <td>CGST</td>
        <td><img src="./images/icon/Frame 46.png" alt="404" /> </td>
      </tr>



    </tbody>
  </table>
   </div>






{/* </div> */}






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
export default Orderhistory;
