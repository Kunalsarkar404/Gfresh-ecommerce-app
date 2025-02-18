import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { removeToken } from "../../Localstorage/Store";
import AddressformComp from "./AddressformComp";
import EditressformComp from "./EditressformComp";
import { useGetUserInfoQuery, usePatchUserMutation } from "../../store/api/userapi";
import { useDeleteAddressMutation, useGetUserAddressQuery } from "../../store/api/addressapi";
import { useGetOrderByUserQuery } from "../../store/api/orderapi";
export const Profile = () => {
  const { data: userinfo, isLoading: userloading, refetch: refetchuserinfo } = useGetUserInfoQuery()
  const [patchuser] = usePatchUserMutation()
  const [dltaddress] = useDeleteAddressMutation()

  const [owl, setowl] = useState("tab-1");
  const [addaddress, setaddaddress] = useState(false)
  const [editmode, seteditmode] = useState(false)
  const [filter, setfilter] = useState(true)
  const [loading, setloading] = useState(false)
  const currentwdith = window.innerWidth;
  const nvg = useNavigate()
  const location = useLocation();
  const logoutfunction = () => {
    removeToken();
    nvg('/')
  }

  const [getsingleaddress, setgetsingleaddress] = useState({})
  const [createaddressstatus, setcreateaddressstatus] = useState(false)
  const [createaddressmsg, setcreateaddressmsg] = useState("")
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [email, setemail] = useState("")
  const [mobileno, setmobileno] = useState("")
  const [dob, setdob] = useState("")
  const [delid, setdelid] = useState(0)


  useEffect(() => {
    if (userloading === false) {
      setfname(userinfo.data.first_name)
      setlname(userinfo.data.last_name)
      setemail(userinfo.data.email)
      setmobileno(userinfo.data.mobile)
      const userdob = new Date(userinfo.data.createdAt)
      setdob(userdob.toISOString().split('T')[0])
    }
  }, [userinfo, userloading, currentwdith, location.state._id])

  const opencreateform = () => {
    seteditmode(false);
    setaddaddress(false)
    setTimeout(() => {
      setaddaddress(!addaddress)
    }, 500);
  }
  const closeform = () => {
    seteditmode(false);
    setaddaddress(false)
  }

  const editformopen = (item) => {
    setgetsingleaddress(item)
    seteditmode(false);
    setaddaddress(false);
    setTimeout(() => {
      seteditmode(true);
      setaddaddress(true);
    }, 500);
  }




  const [errortrue, seterrortrue] = useState(false)
  const [fnameerror, setfnameerror] = useState('')
  const [lnameerror, setlnameerror] = useState('')
  const [emailerror, setemailerror] = useState('')
  const [mobileeror, setmobileeror] = useState('')
  //  edit user api start here 
  const edituser = async () => {
    if (fname === "" || email === "" || lname === "" || mobileno === "") {
      seterrortrue(true)
      if (fname === "") {
        setfnameerror('Please Enter First Name')

      }
      if (lname === "") {
        setlnameerror('Please Enter Last Name')
      }

      if (email === "") {
        setemailerror('Please Enter Last Name')
      }

      if (mobileno === "") {
        setmobileeror('Please Enter Last Name')
      }

    } else {
      const formdata = {
        "email": email,
        "first_name": fname,
        "last_name": lname,
        "mobile_no": mobileno,
        "dob": dob
      }

      setloading(true);
      const response = await patchuser(formdata);
      refetchuserinfo()
      setowl("tab-1");


    }
  };

  const { data: orderlist, isLoading: orderlistloading } = useGetOrderByUserQuery()
  console.log("order lst", orderlist)
  const { data: addressdata, isLoading: addressloading, refetch: refetchaddress } = useGetUserAddressQuery()
  const deleteaddress = async () => {
    const res = await dltaddress(delid);
    if (res.data) {
      refetchaddress()
    }
  }
  useEffect(() => {
    if (location.state.id == 1) {
      setowl("tab-1");
    } else {
      if (location.state.id == 2) {
        setowl("tab-2");
      } else {
        if (location.state.id == 3) {
          setowl("tab-3");
        } else {
          setowl("tab-4");
        }
      }
    }

    if (currentwdith < 730) {
      setfilter(false)
    } else {
      setfilter(true)
    }
  }, [])

  if (userloading || orderlistloading || addressloading) {
    return <div>Loading...</div>;
  }

  if (!userinfo || !orderlist || !addressdata) {
    console.error("Error fetching data:", userinfo || orderlist || addressdata);
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div>
      <Header />

      <div>
        {/* breadcrumb start */}
        <div className="breadcrumb-main marginfromtop" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="container m-0">
            <div className="row">
              <div className="col">
                <div className="breadcrumb-contain">
                  <div>
                    <ul>
                      <li><a href="/">home</a></li>
                      <li><i className="fa fa-angle-double-right" /></li>
                      <li><a href="javascript:void(0)">{owl == "tab-1" ? "Profile" : owl == "tab-2" ? "Order History" : owl == "tab-3" ? "Addresses List" : owl == "tab-4" ? "Order List" : owl == "tab-5" ? "Edit Profile" : ""}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb End */}
        <section className="section-big-pt-space pb-2" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="col-lg-12 col-sm-12 col-xs-12 mt-lg-3  mb-5">
            {/* <div className='container-fluid bigdiv'> */}
            <div className="container-fuild emp-profile d-flex justify-content-center">
              <div className="row profile px-4" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <section className="tab-product-main-tab">
                  <div className="tab2-product d-flex justify-content-center main-tab2 newscroll">
                    <ul className="abc justify-content-center">
                      <li className={owl == "tab-1" ? "current" : ""}>
                        <a
                          href="javascript:void(0)"
                          className="size21 extradesign"
                          onClick={() => setowl("tab-1")}
                        >
                          <img src="./images/icon/11.png" className="sizeimg1" alt="404" /> &nbsp; Profile
                        </a>
                      </li>
                      <li className={owl == "tab-3" ? "current" : ""}>
                        <a
                          href="javascript:void(0)"
                          className="size22"
                          onClick={() => setowl("tab-3")}
                        >
                          {" "}
                          <img src="./images/icon/14.png" className="sizeimg2" alt="404" /> &nbsp;
                          Addresses {currentwdith > 400 ? "List" : ''}
                        </a>
                      </li>
                      <li className={owl == "tab-4" ? "current" : ""}>
                        <a
                          href="javascript:void(0)"
                          className="size23"
                          onClick={() => setowl("tab-4")}
                        >
                          <img src="./images/icon/13.png" className="sizeimg3" alt="404" /> &nbsp;
                          Order   {currentwdith > 400 ? "List" : ''}
                        </a>
                      </li>
                      {/* <li className={owl == 'tab-5' ? 'current' : ''} ><a href='javascript:void(0)' onClick={() => setowl('tab-5')}>medicine</a></li> */}
                    </ul>
                  </div>
                </section>

                <section className="tab-product-main-tab">
                  <div className="row mt-5">
                    {/* profile page start here  */}
                    {userloading == true ? '' : <div id="tab-1" style={{ display: owl == 'tab-1' ? 'block' : 'none' }} className={owl == 'tab-1' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                      <div className="row d-flex justify-content-center">

                        <div className="col-md-10">
                          <div className="row">
                            <div className="col-12 d-flex justify-content-between" style={{ marginBottom: '17px' }}>
                              <h5 className="mb-3 acounttitle">User Information</h5>
                              <input
                                style={{ outline: 'none', padding: "5px 9px", fontSize: '11px' }}
                                type="button"
                                onClick={() => setowl("tab-5")}
                                className="profile-edit-btn"
                                name="btnAddMore"
                                value="Edit Profile"
                              />
                            </div>
                            <div className="col-lg-12 ">
                              <div className="profile-head">
                                <div className="form-group d-flex justify-content-between">
                                  <label className="profilelabel" style={{ fontWeight: "500" }} htmlFor="name">First Name</label>
                                  <p className="profilelabel" style={{ color: '#abb1b7' }}>{userinfo.data.first_name}</p>
                                </div>

                                <div className="form-group d-flex justify-content-between">
                                  <label className="profilelabel" style={{ fontWeight: "500" }} htmlFor="name">Last Name</label>
                                  <p className="profilelabel" style={{ color: '#abb1b7' }}>{userinfo.data.last_name}</p>
                                </div>
                                <div className="form-group d-flex justify-content-between">
                                  <label className="profilelabel" style={{ fontWeight: "500" }} htmlFor="review">Mobile Number</label>
                                  <p className="profilelabel" style={{ color: '#abb1b7' }}>{userinfo.data.mobile}</p>
                                </div>
                                <div className="form-group d-flex justify-content-between">
                                  <label className="profilelabel" style={{ fontWeight: "500" }} htmlFor="review">Email ID</label>
                                  <p className="profilelabel" style={{ color: '#abb1b7' }}>{userinfo.data.email}</p>
                                </div>

                                <div className="form-group d-flex justify-content-between">
                                  <label className="profilelabel" style={{ fontWeight: "500" }} htmlFor="dob">Date of Birth</label>
                                  <p className="profilelabel" style={{ color: '#abb1b7' }}> {new Date(userinfo.data.createdAt.split('Time')[0]).toLocaleDateString('en-GB')}</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 " style={{ position: 'relative', top: '-32px' }}>
                              <div className="profile-head">
                                <div className="herobtn" style={{ marginBottom: '20px', textAlign: "left" }}>
                                  <input
                                    style={{ outline: 'none', padding: "5px 9px", fontSize: '12px' }}
                                    type="button"
                                    onClick={logoutfunction}
                                    className="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Logout"
                                  />
                                </div>
                              </div></div>



                          </div>
                        </div>
                      </div>
                    </div>}



                    <div id="tab-5" style={{ display: owl == 'tab-5' ? 'block' : 'none' }} className={owl == 'tab-5' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                      <div className="row d-flex justify-content-center">

                        <div className="col-md-10">
                          <div className="row">
                            <div className="col-12 " >
                              <h5 className="mb-3">User Information</h5>
                            </div>
                            <div className="col-lg-12 ">
                              <div className="profile-head">
                                <div className="form-group ">
                                  <label style={{ fontWeight: "500", margin: "0px", fontSize: "12px" }} htmlFor="name">First Name</label>
                                  <input
                                    style={{ outline: 'none', fontSize: "12px" }}
                                    type="text"

                                    className="form-control"
                                    id="name"
                                    value={fname}
                                    onChange={(e) => { setfname(e.target.value) }}
                                  />
                                  <div className="error">
                                    {errortrue ? (
                                      <p style={{ color: "red" }}>
                                        {fnameerror}
                                      </p>
                                    ) : null}
                                  </div>
                                  {/* <p style={{color:'#abb1b7'}}>Ajay</p> */}
                                </div>

                                <div className="form-group ">
                                  <label style={{ fontWeight: "500", margin: "0px", fontSize: "12px" }} htmlFor="name">Last Name</label>
                                  <input
                                    style={{ outline: 'none', fontSize: "12px" }}
                                    type="text"

                                    className="form-control"
                                    id="name"
                                    value={lname}
                                    onChange={(e) => { setlname(e.target.value) }}
                                  />
                                  <div className="error">
                                    {errortrue ? (
                                      <p style={{ color: "red" }}>
                                        {lnameerror}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>
                                <div className="form-group ">
                                  <label style={{ fontWeight: "500", margin: "0px", fontSize: "12px" }} htmlFor="review">Mobile Number</label>
                                  <input
                                    style={{ outline: 'none', fontSize: "12px" }}
                                    type="text"

                                    className="form-control"
                                    id="review"
                                    value={mobileno}
                                    onChange={(e) => { setmobileno(e.target.value) }}
                                  />
                                  <div className="error">
                                    {errortrue ? (
                                      <p style={{ color: "red" }}>
                                        {mobileeror}
                                      </p>
                                    ) : null}
                                  </div>
                                  {/* <p style={{color:'#abb1b7'}}>+99-8178609471</p> */}
                                </div>


                              </div>
                            </div>
                            <div className="col-lg-12 ">
                              <div className="profile-head">


                                <div className="form-group ">
                                  <label style={{ fontWeight: "500", margin: "0px", fontSize: "12px" }} htmlFor="review">Email ID</label>
                                  <input
                                    style={{ outline: 'none', fontSize: "12px" }}
                                    type="Email"
                                    // readOnly
                                    className="form-control"
                                    id="review"
                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                  />
                                  <div className="error">
                                    {errortrue ? (
                                      <p style={{ color: "red" }}>
                                        {emailerror}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>

                                <div className="form-group ">
                                  <label style={{ fontWeight: "500", margin: "0px", fontSize: "12px" }} htmlFor="dob">Date of Birth</label>
                                  <input
                                    style={{ outline: 'none', fontSize: "12px" }}
                                    type="date"
                                    // readOnly
                                    className="form-control"
                                    id="review"
                                    value={dob}
                                    onChange={(e) => { setdob(e.target.value) }}
                                  />

                                  {/* <p style={{color:'#abb1b7'}}>23, july 2023</p> */}
                                </div>

                                <div className="herobtn" style={{ marginBottom: '20px' }}>
                                  <input
                                    style={{ outline: 'none', padding: "5px 9px", fontSize: "12px" }}
                                    type="button"
                                    onClick={() => { edituser() }}
                                    className="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Save"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* profile page start end  */}


                    <div id="tab-3" style={{ display: owl == 'tab-3' ? 'block' : 'none' }} className={owl == 'tab-3' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                      {createaddressstatus == true ? <div className="col-12 px-4 d-flex"> <div className="col-12 col-offset-2 alert alert-success mt-2 ms-1" role="alert">
                        <h5 style={{ padding: '0px', margin: "0px", color: "#0a3622" }}>
                          {createaddressmsg}
                        </h5>
                      </div></div> : ''}
                      <div className="d-flex" style={{ justifyContent: 'space-between' }}> <h4 style={{ color: '#2B2A29', font: 'Inter', padding: '0px' }} className="Manageadd acounttitle"   >Manage Addresses</h4>
                        <h4 className="acounttitle" style={{ color: '#059fe2', cursor: 'pointer' }} onClick={() => { opencreateform() }}>+ Add Address</h4></div>
                      <div className="row">

                        {editmode == false ? <AddressformComp addaddress={addaddress} closefun={closeform} reload={refetchaddress} editmode={editmode} /> : <EditressformComp addaddress={addaddress} item={getsingleaddress} reload={refetchaddress} closefun={closeform} editmode={editmode} />}

                        <div className="">
                          <div class="row details py-2 justify-content-center" >

                            {addressdata.data.map((item, index) => (
                              <div class="col-lg-6" style={{ marginBottom: '9px' }}>
                                <div class="card" style={{ padding: '0px 8px' }}>
                                  <div class="card-body">
                                    <h5 class="card-title acounttitle d-flex justify-content-between" style={{ textTransform: 'capitalize', paddingLeft: '9px' }}>
                                      <span>
                                        {item.first_name}&nbsp;
                                        {item.last_name}
                                      </span>

                                      <span className="hello">
                                        {/* <i class="fa-solid fa-ellipsis-vertical"></i> */}
                                        <div class="dropdown">
                                          <button class="dot-dot secondary dropdown-toggle" style={{ border: 'none', background: 'white' }} type="three dots" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                          </button>
                                          <ul class="dropdown-menu dropdownMenu lateststyle  ">
                                            <li><button type="button" style={{ fontSize: '12px' }} onClick={() => { editformopen(item) }} class="dropdown-item"><i class="fa fa-pen-to-square "></i>&nbsp;Edit</button></li>
                                            <li><button type="button" style={{ fontSize: '12px' }} data-bs-toggle="modal"
                                              data-bs-target="#exampleModal1400000"
                                              class="dropdown-item" onClick={() => { setdelid(item._id) }}><i class="fa fa-trash-can "></i>&nbsp;Delete</button></li>
                                          </ul>
                                        </div>
                                      </span>
                                    </h5>

                                    <div class="form-check" style={{ paddingLeft: '9px' }}>
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"

                                      />

                                      <label
                                        class="label m-0"
                                        for="flexRadioDefault1"
                                      >
                                        <h6 className=" acounttitle pb-2">
                                          Mobile:{" "}
                                          <span className="number2">
                                            {item.mobile}
                                          </span>
                                        </h6>
                                        <h6 className=" acounttitle pb-2">
                                          Email ID:{" "}
                                          <span className="number2">
                                            {item.email}
                                          </span>
                                        </h6>

                                      </label>
                                    </div>
                                    <p className="small-text" style={{ paddingLeft: '9px' }}>
                                      {item.address1}
                                      &nbsp;
                                      {item.address2}
                                      &nbsp;
                                      {item.country}
                                      {/* {countryList.getName(item.country)} */}
                                      &nbsp;
                                      {item.state}
                                      &nbsp;
                                      {item.city}
                                      -{item.pincode}

                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}

                          </div>

                        </div>
                      </div>
                    </div>

                    <div id="tab-4" style={{ display: owl == 'tab-4' ? 'block' : 'none' }} className={owl == 'tab-4' ? "tab-content active default product-block3" : "tab-content product-block3"}>
                      <div className="row d-flex justify-content-center">

                        <div className="col-10">
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
                              {orderlist.orderlist.map((item, index) => (
                                <tr>
                                  <td>{item.order_id}</td>
                                  <td> {new Date(item.order_date.split('Time')[0]).toLocaleDateString('en-GB')}</td>
                                  <td>Apparels : {item.totalItems} Item</td>
                                  <td>₹{item.grand_total_amount}</td>
                                  <td>
                                    <p style={{ width: "118px" }}> <span><img src={item.order_status == "Pending" ? "./images/icon/success.png" : item.order_status == "Dilevered" ? "./images/icon/onway.png" : item.order_status == "Shipped" ? "./images/icon/delete.png" : "./images/icon/danger.png"} alt="404" /></span> &nbsp; {item.order_status} </p>
                                    {/* <p style={{color:"#8F9091"}}>on May 04, 2022</p> */}
                                  </td>
                                </tr>
                              ))}

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <div
          className="modal fade"
          id="exampleModal1400000"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">


              {/* <span className="question-logo" style={{display:"flex",justifyContent:"center",alignItems:'center'}} ></span> */}
              {/* <i class="fa fa-exclamation" aria-hidden="true"></i> */}
              <div className="modal-header mod-line d-none">
              </div>
              <div className="modal-body">
                <div className="row gy-3 mt-2">
                  {/* <div className="d-flex justify-content-center">
          <BsQuestionLg className='question-logo' />
            </div> */}
                  <h4 style={{ color: "#059fe2", cursor: "pointer", textAlign: 'center', fontSize: '21px', fontWeight: '800' }}>Address Warning</h4>
                  <p className="ccedit-p " style={{ textAlign: 'center', fontSize: '12px' }}>
                    Do You Really Want to Delete this Record ?
                  </p>
                </div>
              </div>
              <div className="modal-footer mod-line m-auto" style={{ border: "none" }}>
                {/* <button type="button" className="btn closecancel" data-bs-dismiss="modal"
                aria-label="Close">Cancel</button> */}
                <button

                  type="button"
                  className="btn closebtn "
                  style={{
                    paddingRight: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#059fe2",
                  }}
                  data-bs-dismiss="modal"
                // aria-label="Close"
                >
                  Cancel
                </button>
                <button

                  type="button"
                  className="btn closebtn profile-edit-btn justhoverwh"
                  data-bs-dismiss="modal"
                  // aria-label="Close"
                  onClick={() => { deleteaddress() }}
                  style={{

                    fontSize: "12px",
                    fontWeight: "600",

                  }}
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;