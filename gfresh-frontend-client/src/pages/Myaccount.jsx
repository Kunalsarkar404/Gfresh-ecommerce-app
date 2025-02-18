import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

const Myaccount = () => {
  return (
    <>
    <Header />

<div>
  {/* breadcrumb start */}
  <div className="breadcrumb-main marginfromtop">
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              {/* <h2>cart</h2> */}
              <ul>
                <li><a href="/">home</a></li>
                <li><i className="fa fa-angle-double-right" /></li>
                <li><a href="javascript:void(0)">My Acount</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb End */}
  {/*start product details*/}
  <section className="section-padding" style={{backgroundColor: 'white'}}>
    <div className="container-fluid">
      <div className="d-flex align-items-center px-3 py-2 border mb-4">
        <div className="text-start">
          <h4 className="mb-0 fw-bold maketitlesmall">Account - Profile</h4>
        </div>
      </div>
      <div className="btn btn-dark btn-ecomm d-none position-fixed top-50 start-0 translate-middle-y" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarFilter"><span><i className="bi bi-person me-2" />Account</span></div>
      <div className="row">
        <div className="col-12 col-xl-3 filter-column lapmargin">
          <nav className="navbar navbar-expand-xl flex-wrap p-0">
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbarFilter" aria-labelledby="offcanvasNavbarFilterLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title mb-0 fw-bold text-uppercase" id="offcanvasNavbarFilterLabel">Account</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body account-menu">
                <div className="list-group w-100 rounded-0">
                  {/* <a href="account-dashboard.html" class="list-group-item"><i class="bi bi-house-door me-2"></i>Dashboard</a> */}
                  <a href="account-profile.html" className="list-group-item active"><i className="bi bi-person me-2" />Profile</a>
                  <a href="account-orders.html" className="list-group-item"><i className="bi bi-basket3 me-2" />Orders</a>
                  <a href="wishlist.html" className="list-group-item"><i className="bi bi-suit-heart me-2" />Wishlist</a>
                  <a href="address.html" className="list-group-item"><i className="bi bi-pin-map me-2" />Address</a>
                  <a href="voucher.html" className="list-group-item"><i className="bi bi-pencil me-2" />Voucher</a>
                  <a href="login.html" className="list-group-item"><i className="bi bi-power me-2" />Logout</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-12 col-xl-9">
          <div className="card rounded-0">
            <div className="card-body p-lg-5">
              <h5 className="mb-0 fw-bold">Profile Details</h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td style={{fontWeight: 550}}>Full Name</td>
                      <td>Jhon Deo</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 550}}>Mobile Number</td>
                      <td>+99-85XXXXXXXX</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 550}}>Email ID</td>
                      <td>name@example.com</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 550}}>Gender</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 550}}>DOB</td>
                      <td>10/03/1993</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 550}}>Location</td>
                      <td>United Kingdom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className>
                <button type="button" className="btn btn-outline-dark btn-ecomm px-5"><i className="bi bi-pencil me-2" />Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>{/*end row*/}
    </div>
  </section>
  {/*start product details*/}
</div>

    {/* <Footer /> */}
    </>
  )
}

export default Myaccount