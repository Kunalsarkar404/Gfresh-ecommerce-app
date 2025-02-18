import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const OrderHistoryDetails = () => {
    const [showtax, setshowtax] = useState(false)

    return (
        <>

            <Header />
      

            {/*section start*/}
            <section className="section-big-py-space b-g-light  marginfromtop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">

                            <div className="table-responsive hist" style={{ borderRadius: "6px" }}>
                                <h5 style={{ padding: '9px 9px', fontWeight: 400, fontSize: 14, paddingBottom: '20px' }}><img src="/images/Arrow 1.png" alt /> Back to Shop</h5>
                                <div className=""><h4 className="Orderstatus addmedia" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0px 9px', fontWeight: 700, fontSize: "13px", paddingBottom: '20px',paddingTop: '10px'}}>Order Id: 8149161425458J<span style={{display: 'block', color: 'black'}}>Order Status: <img src="./images/icon/success.png" alt="404" /> Delivered On Sep 19</span></h4></div>

                                <table className="table">
                                    <thead className="two ">
                                        <tr className="three">
                                            <th className="family px-3" style={{ fontWeight: 600, fontSize: "14px" }}>Image</th>
                                            <th className="family px-3" style={{ fontWeight: 600, fontSize: "14px" }}>Product Name</th>
                                            <th className="family px-3" style={{ fontWeight: 600, fontSize: "14px" }}>Price</th>
                                            <th className="family px-3" style={{ fontWeight: 600, fontSize: "14px" }}>Quantity</th>
                                            <th className="family px-3" style={{ fontWeight: 600, fontSize: "14px" }}>Total</th>
                                            <th className="family px-3" style={{ fontWeight: 600, fontSize: "14px" }} ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-3"><img src="/images/layout-3/product/1.jpg" width="80px" alt="cart" className="" /></td>
                                            <td className="pnwidth px-3"><span style={{ color: 'black', fontSize: "14px", lineHeight: "63px" }}>Cotton shirt</span></td>
                                            <td><h6 className="td-color px-2" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px" }}>₹63.00</h6></td>

                                       
                                                {/* <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>-</button> */}
                                                <td className=" px-3" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px", }}> <span>2</span></td>
                                                {/* <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>+</button> */}
                                        

                                            <td><h6 className="td-color px-2" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px", color: '#230BB3' }}>₹1000.00</h6></td>
                                            {/* <td> */}
                                            {/* <a href="javascript:void(0)" class="icon" style="color:#777777;padding: 0px 3px; line-height: 63px;"> <img src="/images/edit.png" alt="404"> </a> */}
                                            {/* <a href="javascript:void(0)" className="icon" style={{color: '#777777', padding: '0px 3px', lineHeight: "63px"}}><img src="/images/delete.png" alt={404} /></a></td> */}
                                        </tr>
                                        <tr>
                                            <td className="px-3"><img src="/images/layout-3/product/4.jpg" width="80px" alt="cart" className=" " /></td>
                                            <td className="pnwidth px-3"><span style={{ color: 'black', fontSize: "14px", lineHeight: "63px" }}>Cotton Shirt</span></td>
                                            <td><h6 className="td-color px-2" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px" }}>₹63.00</h6></td>
                                       
                                                {/* <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>-</button> */}
                                                <td className="td-color px-3" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px", }}> <span>1</span> </td>
                                                {/* <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>+</button> */}
                                     
                                            <td><h6 className="td-color px-2" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px", color: '#230BB3' }}>₹1000.00</h6></td>
                                            {/* <td>  */}
                                            {/* <a href="javascript:void(0)" class="icon" style="color:#777777;padding: 0px 3px; line-height: 63px;"> <img src="/images/edit.png" alt="404"> </a> */}
                                            {/* <a href="javascript:void(0)" className="icon" style={{color: '#777777', padding: '0px 3px', lineHeight: "63px"}}><img src="/images/delete.png" alt={404} /></a></td> */}
                                        </tr>
                                        <tr>
                                            <td className="px-3"><img src="/images/layout-3/product/3.jpg" width="80px" alt="cart" className=" " /></td>
                                            <td className="pnwidth px-3"><span style={{ color: 'black', fontSize: "14px", lineHeight: "63px" }}>Cotton Shirt</span></td>
                                            <td><h6 className="td-color px-2" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px" }}>₹63.00</h6></td>
                                            {/* <div className="num" > */}
                                                {/* <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>-</button> */}
                                                <td className=" px-3" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px" }}> <span>1</span></td>
                                                {/* <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>+</button> */}
                                            {/* </div> */}
                                            <td><h6 className="td-color px-2" style={{ fontWeight: 400, lineHeight: "63px", fontSize: "14px", color: '#230BB3' }}>₹63.00</h6></td>
                                            {/* <td>  */}
                                            {/* <a href="javascript:void(0)" class="icon" style="color:#777777;padding: 0px 3px; line-height: 63px;"> <img src="/images/edit.png" alt="404"> </a> */}
                                            {/* <a href="javascript:void(0)" className="icon" style={{color: '#777777', padding: '0px 3px', lineHeight: "63px"}}><img src="/images/delete.png" alt={404} /></a></td> */}
                                        </tr>
                                    </tbody>
                                </table>

            

                                
                                <br />
                                <h5 style={{ padding: '9px 9px', fontWeight: 400, fontSize: 14, paddingBottom: '20px' }}><img src="/images/Arrow 1.png" alt /> Back to Shop</h5>
                            </div>
                        </div>
                        <div className="col-md-4 mt-lg-0 mt-md-0 mt-sm-3 mt-xs-3">
                            <div className="py-2 px-2" style={{ background: '#ffff', borderRadius: 6 }}>

                                <div className=""><h4 style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0px 9px', fontWeight: 700, fontSize: "14px", paddingBottom: '20px',paddingTop: '10px'}}>Payment Details <span style={{display: 'block', color: '#8f9091'}}>Sep 19 2023</span></h4></div>

                                <div className="firstrow px-3 d-flex justify-content-between" style={{ padding: "5px 0px" }}>
                                    <span className="family" style={{ fontWeight: 600, fontSize: "12px" }}>3 Items</span>
                                    <span className="family" style={{ fontWeight: 500, color: '#230BB3', fontSize: '12px' }}>₹3000.00</span>
                                </div>
                                <div className="firstrow px-3 d-flex justify-content-between" style={{ padding: "5px 0px" }}>
                                    <span className="family" style={{ fontWeight: 600, fontSize: "12px" }}>Discount</span>
                                    <span className="family" style={{ fontWeight: 500, color: '#230BB3', fontSize: '12px' }}>- ₹100.00</span>
                                </div>
                                <div className="firstrow px-3 d-flex justify-content-between" style={{ padding: "5px 0px" }}>
                                    <span className="family" style={{ fontWeight: 600, fontSize: "12px" }}>Shipping</span>
                                    <span className="family" style={{ fontWeight: 500, color: '#230BB3', fontSize: '12px' }}>₹500.00</span>
                                </div>

                                {/* <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span className="family" style={{fontWeight: 600, fontSize: "12px"}}>Payment Mode</span>
            <span className="family" style={{fontWeight: 500, color: '#8F9091',fontSize:'12px'}}>COD</span>
          </div>  */}






                                <div className="firstrow px-3 d-flex justify-content-between" style={{ padding: "5px 0px" }}>
                                    <span className="family" style={{ fontWeight: 600, fontSize: "12px" }}>Voucher Applied</span>
                                    <span className="family" style={{ fontWeight: 500, color: '#230BB3', fontSize: '12px' }}>- ₹500.00</span>
                                </div>
                                <div className="firstrow px-4 mx-2 py-1 d-flex justify-content-between mt-1 align-items-center">
                                    <div className="firstcontianer d-flex align-items-start" style={{ gap: 4 }}>
                                        <div className="containerimg">
                                            <img src="/images/carticon.png" alt={404} />
                                        </div>
                                        <div>
                                            <p className="m-0" style={{ fontWeight: 400, fontSize: "12px" }}>CGSTAXGGH applied</p>
                                            <p className="m-0" style={{ color: '#8F9091', fontSize: "10px" }}>- ₹250.00 (10% off)</p>
                                        </div>
                                    </div>
                                    {/* <div className="remove">
              <span style={{color: '#D83043', fontWeight: 500,fontSize:"10px"}}>Remove</span>
            </div> */}
                                </div>
                                <div className="firstrow px-4 mx-2 py-1 d-flex justify-content-between mt-1 align-items-center">
                                    <div className="firstcontianer d-flex align-items-start" style={{ gap: 4 }}>
                                        <div className="containerimg">
                                            <img src="/images/carticon.png" alt={404} />
                                        </div>
                                        <div>
                                            <p className="m-0" style={{ fontWeight: 400, fontSize: "12px" }}>CGSTAXGGH applied</p>
                                            <p className="m-0" style={{ color: '#8F9091', fontSize: "10px" }}>- ₹250.00 (10% off)</p>
                                        </div>
                                    </div>
                                    {/* <div className="remove">
              <span style={{color: '#D83043', fontWeight: 500,fontSize:"10px"}}>Remove</span>
            </div> */}
                                </div>
                                <div className="firstrow px-3 d-flex justify-content-between" style={{ padding: "5px 0px" }}>
                                    <span style={{ fontWeight: 600, fontSize: "12px" }}>Credit Applied</span>
                                    <span style={{ fontWeight: 500, color: '#230BB3', fontSize: "12px", }}>₹500.00   <hr color="red" style={{  width: '100%', marginLeft: '3px', margin: 0, position: 'relative', top: 15, opacity: 1, color: '#2B2A29', background: '#2B2A29', }} />
                                    </span>
                                </div>


                                <br />
                                <div className="firstrow px-3 pt-1 d-flex justify-content-between">

                                    <span style={{ fontWeight: 600, fontSize: "12px", }}>Order Total <span style={{ fontSize: 10, color: '#8F9091', cursor: 'pointer' }} onClick={() => { setshowtax(!showtax) }} >(incl. taxes) + </span>
                                        <br />
                                        {showtax == true ? <span style={{ fontSize: 10, color: '#8F9091', }} className="Gst"
                                            id="span2">&nbsp;  GST on ₹1982.00</span> : <span></span>}
                                        
                                    </span>


                                    <span style={{ fontWeight: 500, color: '#230BB3', fontSize: "12px" }}>₹2000.00</span>
                                </div>
                               <br />
                                <hr />

                                <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span className="family" style={{fontWeight: 600, fontSize: "12px"}}>Payment Mode</span>
            <span className="family" style={{fontWeight: 500, color: '#8F9091',fontSize:'12px'}}>Cash On Delivery</span>
          </div> 
                                <div className="firstrow px-2 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            {/* <NavLink to="/checkout" style={{width:"100%"}}>
            <button style={{border: 'none', outline: 'none', backgroundColor: '#2B2A29', padding: '7px 0px', color: 'white', width: '100%', fontWeight: 600}}>CHECKOUT</button>
            </NavLink> */}
          </div>
                            </div>
                            <div className="py-3" style={{background: '#ffff', borderRadius: 6, marginTop: 10, paddingLeft: '20px'}}>
          <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            {/* <span style={{fontWeight: 600, fontSize: 12}}>Apply Voucher code</span> */}
            {/* <div style={{display: 'flex', gap: 4}}>
              <span style={{fontWeight: 700, color: '#230BB3'}}><input type="text" className="form-control applypay" placeholder="Enter your code" /></span>
              <button className="btn" style={{fontWeight: 500, backgroundColor: '#230BB3', color: 'white', fontSize: 12, height: 'fit-content', padding: '7px 8px'}}>Apply</button>
            </div> */}
          </div>
          {/* <div className="firstrow px-3 pb-2 d-flex justify-content-between">
            <span style={{fontWeight: 600, fontSize: "17px"}} />
            <span style={{fontWeight: 500, color: '#230BB3', fontSize: 11}}>+ Add multiple voucher code</span>
          </div> */}
          <div className="" style={{}}>

            <h5>Delivery Address</h5>
                <p style={{color: '#2B2A29', fontSize: '13px'}}>John Clark</p>
              <p> 85-B, UAE Road, DubaiSaudi Arabia, 201001
                3839483843</p>
            
            {/* <span style={{fontWeight: 600, fontSize: 12}}>Apply Credits</span>
            <div style={{display: 'flex', gap: 4}}>
              <span style={{fontWeight: 700, color: '#230BB3'}}><input type="text" className="form-control applypay" placeholder="Enter your credit" /></span>
              <button className="btn" style={{fontWeight: 500, backgroundColor: '#230BB3', color: 'white', fontSize: 12, height: 'fit-content', padding: '7px 8px'}}>Apply</button>
            </div> */}
          </div>
          {/* <div className="firstrow px-3 pb-2 d-flex justify-content-between">
            <span style={{fontWeight: 600, fontSize: "17px"}} />
            <span style={{fontWeight: 500, fontSize: 11}}>Available Credit - ₹5000</span>
          </div> */}
        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*section end*/}






            {/* <Footer /> */}


        </>
    );
};
export default OrderHistoryDetails;