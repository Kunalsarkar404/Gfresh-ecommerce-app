import React, { useState } from 'react'
// import React from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { TfiAlignJustify } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus,AiOutlineCheck } from "react-icons/ai";
export const OrderHistorytwo = () => {

  const nvg = useNavigate()
  const [filter1, setfilter1] = useState(false)
  const [filter2, setfilter2] = useState(false)
  const [filter3, setfilter3] = useState(false)
  const [filter4, setfilter4] = useState(false)
  const [filter5, setfilter5] = useState(false)
  const [filter6, setfilter6] = useState(false)
  const [filter7, setfilter7] = useState(false)
  const [color, setcolor] = useState(true)
  const [size, setsize] = useState(true)
  const [owl, setowl] = useState('tab-1')
  const [filter,setfilter] = useState(true)
  const currentwdith = window.innerWidth;

  const clearfilter = () =>{
    setfilter1(false)
    setfilter2(false)
    setfilter3(false)
    setfilter4(false)
    setfilter5(false)
    setfilter6(false)
    setfilter7(false)
  }
  return (
    <div>
      <Header />

      <div>
          {/* breadcrumb start */}
  <div className="breadcrumb-main marginfromtop" style={{background:"#f9f9f9"}}>
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
      <div>
        <section className="section-big-pt-space py-1 " style={{background:"#f9f9f9"}}>
          <div className="col-lg-12 col-sm-12 col-xs-12 mt-lg-4 mt-xs-4 mb-5">
          
            <div className="container-fuild emp-profile">
              <div className="row pro">

              {/* <div id="tab-2" style={{ display: owl == 'tab-2' ? 'block' : 'none' }} className={owl == 'tab-2' ? "tab-content active default product-block3" : "tab-content product-block3"}> */}
                      <div className="row py-xl-4 py-3">
                      <div className={currentwdith < 730 ?filter == true ? "col-5 d-none px-0 align-items-center" : "col-3 d-none px-0 align-items-center" : "col-3 "}  style={{flexDirection:'column',zIndex: 1,left:"-15px",display: filter == true ? "block" : "none"}}  >
    <div class="card" style={{width:"92%"}}>
      <div class="card-body">
      <div className="collection-filter-block creative-card creative-inner category-side" style={{ padding: '0px 5px' }}>
                            {/* brand filter start */}
                            {/* <div className="collection-mobile-back">
                              <span className="filter-back"><i className="fa fa-angle-left" aria-hidden="true" /> back</span></div> */}
                            <div className="collection-collapse-block open">
                              <h3 className="collapse-block-title" style={{ marginTop: "0px",fontSize:"12px" }} onClick={() => { setcolor(!color) }}>Order Status</h3>
                              <div className="collection-collapse-block-content" style={{ display: color == true ? "block" : "none" }}>
                                <div className="size-selector">
                                  <div className="collection-brand-filter">
                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                      <input type="checkbox" className="custom-control-input form-check-input" id="small" />
                                      <label className="custom-control-label form-check-label" style={{fontSize:"11px"}} htmlFor="small">On the way</label>
                                    </div>
                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                      <input type="checkbox" className="custom-control-input form-check-input" id="mediam" />
                                      <label className="custom-control-label form-check-label" style={{fontSize:"11px"}} htmlFor="mediam">Delivered</label>
                                    </div>
                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                      <input type="checkbox" className="custom-control-input form-check-input" id="large" />
                                      <label className="custom-control-label form-check-label" style={{fontSize:"11px"}} htmlFor="large">Cancelled</label>
                                    </div>
                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                      <input type="checkbox" className="custom-control-input form-check-input" id="extralarge" />
                                      <label className="custom-control-label form-check-label" style={{fontSize:"11px"}} htmlFor="extralarge">Returned</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* size filter start here */}
                            <div className="collection-collapse-block open">
                              <h3 className="collapse-block-title" style={{fontSize:"12px"}} onClick={() => { setsize(!size) }}>Order Time</h3>
                              <div className="collection-collapse-block-content" style={{ display: size == true ? "block" : "none" }}>
                                <div className="size-selector">
                                  <div className="collection-brand-filter">
                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                      <input type="checkbox" className="custom-control-input form-check-input" id="small" />
                                      <label className="custom-control-label form-check-label" style={{fontSize:"11px"}} htmlFor="small">Last 30 Days</label>
                                    </div>
                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                      <input type="checkbox" className="custom-control-input form-check-input" id="mediam" />
                                      <label className="custom-control-label form-check-label" style={{fontSize:"11px"}} htmlFor="mediam">Last 6 months</label>
                                    </div>
                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                      <input type="checkbox" className="custom-control-input form-check-input" id="extralarge" />
                                      <label className="custom-control-label form-check-label" style={{fontSize:"11px"}} htmlFor="extralarge">Last one year</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
      </div>
    </div>
  </div>

  

                        <div className={currentwdith < 730 ? filter == false ? "col-12 Ohistory" : "col-12 Ohistory" : "col-9 Ohistory"} style={{padding:"0px 4px"}} >
                        {/* <div className="input-group mb-3 " style={{gap: '10px'}}>
  <input type="text" style={{borderRadius:"0px"}} class="form-control newsizeinput" placeholder="Search your orders here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className='Sbtn' style={{background: '#230bb3', color: 'white',borderRadius:'0px',fontSize:"13px"}} class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search "></i>&nbsp; Search</button>
</div> */}

{/* <div className="filter-main-btn m-0" style={{display :currentwdith < 730 ? "block" : "none"}} onClick={()=>{setfilter(!filter)}}><span className="filter-btn  "><i className="fa fa-filter" aria-hidden="true" /> Filter</span></div> */}
<div className="filter-main-btn m-0" style={{display :currentwdith < 730 ? "block" : "none"}} >          <button
                        type="button"
                        className="hidecontent my-2"
                        style={{
                          border: "none",
                          outline: "none",
                          backgroundColor: "white",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalfour"
                      > <span className="filter-btn  "><i className="fa fa-filter" aria-hidden="true" /> Filter</span></button></div>

                          <div className="table-responsive" >
                            <table className="table  orstatus" >

                            {/* <table className="table"> */}
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Order Dtae</th>
      <th scope="col">Total Quantity</th>
      <th scope="col">Amount</th>
      <th scope="col">Order Status</th>
    </tr>
  </thead>
{/* </table> */}



                              <thead className="table-light" style={{paddingTop:'20px'}}>
                                <tr>
        
                                </tr>
                              </thead>
                              <tbody >
                                <tr onClick={()=>{nvg('/order-history-detail')}}>
                                  
                                  <td style={{ color: '#230BB3', paddingTop:'20px' }}>
                                    
                                      <h5 style={{fontSize:"13px",lineHeight:"22px"}}>XFYA1458</h5>
                                      {/* <p style={{ color: '#8F9091' }}>May 04, 2022</p>
                                      <p style={{ color: "#2B2A29" }}>Apparels : 1 Item</p> */}
                                    
                                  </td>
                                  <td style={{ paddingTop:'20px' }}>May 04,2022</td>
                                
                                  <td style={{  paddingTop:'20px' }}>Apparels: 1 Items</td>
                                  <td style={{  paddingTop:'20px' }}>₹70</td>
                                  <td>
                                    <p  style={{ paddingTop:'15px',width:"115px" }}> <span ><img src="./images/icon/success.png" alt="404" /></span> &nbsp; Delivered </p>
                                    {/* <p style={{color:"#8F9091"}}>on May 04, 2022</p> */}
                                  </td>
                                  {/* <td>
          <div className="d-flex gap-2">	<a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-eye" /></a>
          </div>
        </td> */}
                                </tr>
                                <tr onClick={()=>{nvg('/order-history-detail')}}>
                                 
                                  <td>
                                    <div>
                                      <h5 style={{fontSize:"13px",lineHeight:"22px"}}>XFYA1458</h5>
                                      
                                    </div>
                                  </td>
                                  <td>May 04,2022</td>
                                
                                  <td>Apparels: 1 Items</td>
                                  <td>₹70</td>
                                
                                  
        
                                  <td>
                                    <p style={{width:"115px"}}> <span><img src="./images/icon/danger.png" alt="404" /></span> &nbsp; Cancelled </p>
                                    {/* <p style={{color:"#8F9091"}}>on May 23, 2022</p> */}
                                  </td>
                                </tr>
                                <tr onClick={()=>{nvg('/order-history-detail')}}>
                                  {/* <td><img src="./images/mega-store/product/13.png" alt="404" /></td> */}
                                  <td>
                                    <div className="">
                                      <h5 style={{fontSize:"13px",lineHeight:"22px"}}>XFYA1458</h5>
                                      {/* <p style={{ color: '#8F9091' }}>May 04, 2022</p>
                                      <p style={{ color: "#2B2A29" }}>Apparels : 1 Item</p> */}
                                    </div>
                                  </td>
                                  <td>May 04,2022</td>
                                
                                <td>Apparels: 1 Items</td>
                                <td>₹70</td>
                                  {/* <td>
          <div className="d-flex gap-2"> <a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-eye" /></a>
            <a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-trash" /></a>
          </div>
        </td> */}
                                  <td>
                                    <p style={{width:"115px"}}> <span><img src="./images/icon/onway.png" alt="404" /></span> &nbsp; On the way </p>
                                    {/* <p style={{color:"#8F9091"}}>on june 04, 2023</p> */}
                                  </td>
                                </tr>
                                <tr onClick={()=>{nvg('/order-history-detail')}}>
                                  {/* <td><img src="./images/mega-store/product/14.png" alt="404" /></td> */}
                                  <td>
                                    <div className="">
                                      <h5 style={{fontSize:"13px",lineHeight:"22px"}}>XFYA1458</h5>
                                      {/* <p style={{ color: '#8F9091' }}>May 04, 2022</p>
                                      <p style={{ color: "#2B2A29" }}>Apparels : 1 Item</p> */}
                                    </div>
                                  </td>
                                  <td>May 04,2022</td>
                                
                                <td>Apparels: 1 Items</td>
                                <td>₹70</td>
                                  {/* <td>
          <div className="d-flex gap-2"> <a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-eye" /></a>
          </div>
        </td> */}
                                  <td>
                                    <p style={{width:"115px"}}> <span><img src="./images/icon/delete.png" alt="404" /></span> &nbsp; Returned  </p>
                                    {/* <p style={{color:"#8F9091"}}>on May 06, 2023</p> */}
                                  </td>
                                </tr>
                                <tr onClick={()=>{nvg('/order-history-detail')}}>
                                  
                                  <td style={{ color: '#230BB3' }}>
                                    
                                      <h5 style={{fontSize:"13px",lineHeight:"22px"}}>XFYA1458</h5>
                                      {/* <p style={{ color: '#8F9091' }}>May 04, 2022</p>
                                      <p style={{ color: "#2B2A29" }}>Apparels : 1 Item</p> */}
                                    
                                  </td>
                                  <td >May 04,2022</td>
                                
                                  <td >Apparels: 1 Items</td>
                                  <td >₹70</td>
                                  <td>
                                    <p style={{width:"115px"}} > <span ><img src="./images/icon/success.png" alt="404" /></span> &nbsp; Delivered </p>
                                    {/* <p style={{color:"#8F9091"}}>on May 04, 2022</p> */}
                                  </td>
                                  {/* <td>
          <div className="d-flex gap-2">	<a href="javascript:;" className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-eye" /></a>
          </div>
        </td> */}
                                </tr>


                             
                              </tbody>
                            </table>
                          </div>

                        </div>
                        
                      </div>
                    




              
              </div>
            </div>
          </div>
        </section>

      </div>


      <div
        className="modal fade"
        id="exampleModalfour"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ zIndex: 9383838 }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl" style={{position:'relative',bottom:'0px',margin:"0px",alignItems:'flex-end',height:'100vh'}}>
          <div className="modal-content" style={{flexDirection:'column-reverse'}}>
            <div className="modal-header mod-line">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{backgroundImage:"none",margin:'0px',width:'44%',opacity:1,height:"auto",border:"1px solid #b5b5b5"}}
              >Cancel</button>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{backgroundImage:"none",margin:'0px',width:'44%',backgroundColor:"#4150b5",opacity:1,height:"auto",color:"white"}}
              >Apply</button>
            </div>
            <div className="modal-body">
              <div className="filterheader d-flex justify-content-between">
                <h5>Filters</h5>
                <h5 style={{color:"#acacac"}} onClick={()=>{clearfilter()}}>Clear Filters</h5>
              </div>
              <div className="orderstatus py-3">
                <h6 className='py-2'>Order Status</h6>
                <div className="odr-btn d-flex" style={{flexWrap:'wrap',gap:"12px"}}>
<span onClick={()=>{setfilter1(!filter1)}} style={{border: "1px solid #b5b5b5",padding:'3px 9px',borderRadius:'20px',backgroundColor:filter1 ? "#4150b5" : "white",color:filter1 ? "#fff" : "black"}}>Delivered {filter1 ? <AiOutlineCheck/> : <AiOutlinePlus/> }</span>
<span onClick={()=>{setfilter2(!filter2)}} style={{border: "1px solid #b5b5b5",padding:'3px 9px',borderRadius:'20px',backgroundColor:filter2 ? "#4150b5" : "white",color:filter2 ? "#fff" : "black"}}>On the Way {filter2 ? <AiOutlineCheck/> : <AiOutlinePlus/> }</span>
<span onClick={()=>{setfilter3(!filter3)}} style={{border: "1px solid #b5b5b5",padding:'3px 9px',borderRadius:'20px',backgroundColor:filter3 ? "#4150b5" : "white",color:filter3 ? "#fff" : "black"}}>Cancelled {filter3 ? <AiOutlineCheck/> : <AiOutlinePlus/> }</span>
<span onClick={()=>{setfilter4(!filter4)}} style={{border: "1px solid #b5b5b5",padding:'3px 9px',borderRadius:'20px',backgroundColor:filter4 ? "#4150b5" : "white",color:filter4 ? "#fff" : "black"}}>Returned {filter4 ? <AiOutlineCheck/> : <AiOutlinePlus/> }</span>
                </div>
              </div>
              <div className="orderstatus py-3">
                <h6 className='py-2'>Order Time</h6>
                <div className="odr-btn d-flex" style={{flexWrap:'wrap',gap:"12px"}}>
<span onClick={()=>{setfilter5(!filter5)}} style={{border: "1px solid #b5b5b5",padding:'3px 9px',borderRadius:'20px',backgroundColor:filter5 ? "#4150b5" : "white",color:filter5 ? "#fff" : "black"}}>Lart 30 Days {filter5 ? <AiOutlineCheck/> : <AiOutlinePlus/> }</span>
<span onClick={()=>{setfilter6(!filter6)}} style={{border: "1px solid #b5b5b5",padding:'3px 9px',borderRadius:'20px',backgroundColor:filter6 ? "#4150b5" : "white",color:filter6 ? "#fff" : "black"}}>Last 6 Months {filter6 ? <AiOutlineCheck/> : <AiOutlinePlus/> }</span>
<span onClick={()=>{setfilter7(!filter7)}} style={{border: "1px solid #b5b5b5",padding:'3px 9px',borderRadius:'20px',backgroundColor:filter7 ? "#4150b5" : "white",color:filter7 ? "#fff" : "black"}}>Last 1 Year {filter7 ? <AiOutlineCheck/> : <AiOutlinePlus/> }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <Footer />
</div>


    </div>
  )
}
export default OrderHistorytwo;
