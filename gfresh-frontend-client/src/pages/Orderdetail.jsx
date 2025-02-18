import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Orderdetail = () => {
const [showtax,setshowtax] = useState(false)

    return (
        <>

<Header />
  {/* breadcrumb start */}
  <div className="breadcrumb-main marginfromtop">
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              <ul>
                <li><a href="/">home</a></li>
                <li><i className="fa fa-angle-double-right" /></li>
                <li><a href="javascript:void(0)">cart</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb End */}
         


{/*section start*/}
<section className="section-big-py-space b-g-light">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
      
        <div className="table-responsive" style={{ borderRadius:"6px"}}>
          <h3 style={{padding: '5px 9px', fontWeight: 700, fontSize: "18px"}}>Shopping Cart</h3>
          <table className="table">
            <thead>
              <tr>
                <th className="family" style={{fontWeight: 600, fontSize: "14px"}}>Image</th>
                <th className="family" style={{fontWeight: 600, fontSize: "14px"}}>Product Name</th>
                <th className="family" style={{fontWeight: 600, fontSize: "14px"}}>Price</th>
                <th className="family" style={{fontWeight: 600, fontSize: "14px"}}>Quantity</th>
                <th className="family" style={{fontWeight: 600, fontSize: "14px"}}>Total</th>
                <th className="family" style={{fontWeight: 600, fontSize: "14px"}} ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/images/layout-3/product/1.jpg" width="80px" alt="cart" className=" " /></td>
                <td className="pnwidth"><span style={{color: 'black', fontSize: "14px", lineHeight: "63px"}}>shirt</span></td>
                <td><h6 className="td-color" style={{fontWeight: 400, lineHeight: "63px",fontSize:"14px"}}>₹63.00</h6></td>
                <td>  <div className="qty-box" style={{padding: '10px 0px'}}>
                    <div className="input-group qtywidth">
                      <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>-</button>
                      <input type="number" name="quantity" style={{width:"40px"}} className="form-control qty input-number" defaultValue={1} />
                      <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>+</button>
                    </div>
                  </div></td>
                <td><h6 className="td-color" style={{fontWeight: 400, lineHeight: "63px",fontSize:"14px", color: '#230BB3'}}>₹539.00</h6></td>
                <td>
                  {/* <a href="javascript:void(0)" class="icon" style="color:#777777;padding: 0px 3px; line-height: 63px;"> <img src="/images/edit.png" alt="404"> </a> */}
                  <a href="javascript:void(0)" className="icon" style={{color: '#777777', padding: '0px 3px', lineHeight: "63px"}}><img src="/images/delete.png" alt={404} /></a></td>
              </tr>
              <tr>
                <td><img src="/images/layout-3/product/4.jpg" width="80px" alt="cart" className=" " /></td>
                <td className="pnwidth"><span style={{color: 'black', fontSize: "14px", lineHeight: "63px"}}>Laptop</span></td>
                <td><h6 className="td-color" style={{fontWeight: 400, lineHeight: "63px",fontSize:"14px"}}>₹243.00</h6></td>
                <td>  <div className="qty-box" style={{padding: '10px 0px'}}>
                    <div className="input-group qtywidth">
                      <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>-</button>
                      <input type="number" name="quantity" style={{width:"40px"}} className="form-control qty input-number" defaultValue={1} />
                      <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>+</button>
                    </div>
                  </div></td>
                <td><h6 className="td-color" style={{fontWeight: 400, lineHeight: "63px",fontSize:"14px", color: '#230BB3'}}>₹6539.00</h6></td>
                <td> 
                  {/* <a href="javascript:void(0)" class="icon" style="color:#777777;padding: 0px 3px; line-height: 63px;"> <img src="/images/edit.png" alt="404"> </a> */}
                  <a href="javascript:void(0)" className="icon" style={{color: '#777777', padding: '0px 3px', lineHeight: "63px"}}><img src="/images/delete.png" alt={404} /></a></td>
              </tr>
              <tr>
                <td><img src="/images/layout-3/product/3.jpg" width="80px" alt="cart" className=" " /></td>
                <td className="pnwidth"><span style={{color: 'black', fontSize: "14px", lineHeight: "63px"}}>CCTV</span></td>
                <td><h6 className="td-color" style={{fontWeight: 400, lineHeight: "63px",fontSize:"14px"}}>₹93.00</h6></td>
                <td>  <div className="qty-box" style={{padding: '10px 0px'}}>
                    <div className="input-group qtywidth">
                      <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>-</button>
                      <input type="number" name="quantity" style={{width:"40px"}} className="form-control qty input-number" defaultValue={1} />
                      <button style={{border: 'none', outline: 'none', backgroundColor: 'white', color: '#230BB3', fontSize: "17px", fontWeight: 700}}>+</button>
                    </div>
                  </div></td>
                <td><h6 className="td-color" style={{fontWeight: 400, lineHeight: "63px",fontSize:"14px", color: '#230BB3'}}>₹1539.00</h6></td>
                <td> 
                  {/* <a href="javascript:void(0)" class="icon" style="color:#777777;padding: 0px 3px; line-height: 63px;"> <img src="/images/edit.png" alt="404"> </a> */}
                  <a href="javascript:void(0)" className="icon" style={{color: '#777777', padding: '0px 3px', lineHeight: "63px"}}><img src="/images/delete.png" alt={404} /></a></td>
              </tr>
            </tbody>
          </table>
          <h5 style={{padding: '9px 9px', fontWeight: 400, fontSize: 14}}><img src="/images/Arrow 1.png" alt /> Back to Shop</h5>
        </div>
      </div>
      <div className="col-md-4 mt-lg-0 mt-md-0 mt-sm-3 mt-xs-3">
        <div className="py-2 px-2" style={{background: '#ffff', borderRadius: 6}}>
          <h4 style={{padding: '0px 9px', fontWeight: 700, fontSize: "18px"}}>Summary</h4>
          <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span className="family" style={{fontWeight: 600, fontSize: "12px"}}>3 Items</span>
            <span className="family" style={{fontWeight: 500, color: '#230BB3',fontSize:'12px'}}>₹3000.00</span>
          </div>
          <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span className="family" style={{fontWeight: 600, fontSize: "12px"}}>Discount</span>
            <span className="family" style={{fontWeight: 500, color: '#230BB3',fontSize:'12px'}}>- ₹100.00</span>
          </div>
          <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span className="family" style={{fontWeight: 600, fontSize: "12px"}}>Shipping</span>
            <span className="family" style={{fontWeight: 500, color: '#230BB3',fontSize:'12px'}}>₹500.00</span>
          </div>
          <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span className="family" style={{fontWeight: 600, fontSize: "12px"}}>Voucher Applied</span>
          </div>
          <div className="firstrow px-2 mx-2 py-1 d-flex justify-content-between mt-1 align-items-center">
            <div className="firstcontianer d-flex align-items-start" style={{gap: 4}}>
              <div className="containerimg">
                <img src="/images/carticon.png" alt={404} />
              </div>
              <div>
                <p className="m-0" style={{fontWeight: 400,fontSize:"12px"}}>CGSTAXGGH applied</p>
                <p className="m-0" style={{color: '#8F9091',fontSize:"10px"}}>- ₹250.00 (10% off)</p>
              </div>
            </div>
            <div className="remove">
              <span style={{color: '#D83043', fontWeight: 500,fontSize:"10px"}}>Remove</span>
            </div>
          </div>
          <div className="firstrow px-2 mx-2 py-1 d-flex justify-content-between mt-1 align-items-center">
            <div className="firstcontianer d-flex align-items-start" style={{gap: 4}}>
              <div className="containerimg">
                <img src="/images/carticon.png" alt={404} />
              </div>
              <div>
                <p className="m-0" style={{fontWeight: 400,fontSize:"12px"}}>CGSTAXGGH applied</p>
                <p className="m-0" style={{color: '#8F9091',fontSize:"10px"}}>- ₹250.00 (10% off)</p>
              </div>
            </div>
            <div className="remove">
              <span style={{color: '#D83043', fontWeight: 500,fontSize:"10px"}}>Remove</span>
            </div>
          </div>
          <div className="firstrow px-2 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span style={{fontWeight: 600, fontSize: "12px"}}>Credit Applied</span>
            <span style={{fontWeight: 500, color: '#230BB3',fontSize:"12px"}}>₹500.00   <hr color="red" style={{margin: 0, position: 'relative', top: 4, opacity: 1, color: '#2B2A29', background: '#2B2A29'}} />
</span>
          </div>
          <div className="firstrow px-2 pt-1 d-flex justify-content-between">
            <span style={{fontWeight: 600, fontSize: "12px"}}>Order Total <span  style={{fontSize: 10, color: '#8F9091',cursor:'pointer'}} onClick={()=>{setshowtax(!showtax)}} >(incl. taxes) + <br /> <span style={{fontSize: 10, color: '#8F9091', display: showtax == true ? "block" : 'none'}} id="span2">% GST on ₹1982.00</span></span>
</span>
            <span style={{fontWeight: 500, color: '#230BB3',fontSize:"12px"}}>₹2000.00</span>
          </div>
          <div className="firstrow px-2 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <NavLink to="/checkout" style={{width:"100%"}}>
            <button style={{border: 'none', outline: 'none', backgroundColor: '#2B2A29', padding: '7px 0px', color: 'white', width: '100%', fontWeight: 600}}>CHECKOUT</button>
            </NavLink>
          </div>
        </div>
        <div className="py-2" style={{background: '#ffff', borderRadius: 6, marginTop: 10}}>
          <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span style={{fontWeight: 600, fontSize: 12}}>Apply Voucher code</span>
            <div style={{display: 'flex', gap: 4}}>
              <span style={{fontWeight: 700, color: '#230BB3'}}><input type="text" className="form-control applypay" placeholder="Enter your code" /></span>
              <button className="btn" style={{fontWeight: 500, backgroundColor: '#230BB3', color: 'white', fontSize: 12, height: 'fit-content', padding: '7px 8px'}}>Apply</button>
            </div>
          </div>
          <div className="firstrow px-3 pb-2 d-flex justify-content-between">
            <span style={{fontWeight: 600, fontSize: "17px"}} />
            <span style={{fontWeight: 500, color: '#230BB3', fontSize: 11}}>+ Add multiple voucher code</span>
          </div>
          <div className="firstrow px-3 d-flex justify-content-between" style={{padding:"5px 0px"}}>
            <span style={{fontWeight: 600, fontSize: 12}}>Apply Credits</span>
            <div style={{display: 'flex', gap: 4}}>
              <span style={{fontWeight: 700, color: '#230BB3'}}><input type="text" className="form-control applypay" placeholder="Enter your credit" /></span>
              <button className="btn" style={{fontWeight: 500, backgroundColor: '#230BB3', color: 'white', fontSize: 12, height: 'fit-content', padding: '7px 8px'}}>Apply</button>
            </div>
          </div>
          <div className="firstrow px-3 pb-2 d-flex justify-content-between">
            <span style={{fontWeight: 600, fontSize: "17px"}} />
            <span style={{fontWeight: 500, fontSize: 11}}>Available Credit - ₹5000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*section end*/}






<Footer />


        </>
    );
};
export default Orderdetail;