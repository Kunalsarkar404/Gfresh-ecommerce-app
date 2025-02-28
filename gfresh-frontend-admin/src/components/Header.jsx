import React from "react";
import img from "../assets/qwerty.png";
import { BsFillEnvelopeFill } from "react-icons/bs";
import {
  FaBell,
  FaCog,
  FaEuroSign,
  FaSignature,
  FaUserAlt,
} from "react-icons/fa";
import {
  getsoh,
  gettoken,
  removeToken,
} from "../Localstorage/Store";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import img2 from "../assets/gfresh-logo.png";
import { useContactlistlatestQuery } from "../store/api/webinfoapi";
const Header = () => {
  const nvg = useNavigate();
  const userinfo = gettoken();
  const logoutevt = async () => {
    removeToken();
    nvg("/");
  };
  const sshh = getsoh();

  const { data: userData, isLoading } = useContactlistlatestQuery();

  return (
    userinfo ? <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px",
      }}
    >
      <div>
        {sshh !== true ? (
          <img src={img2} alt="qwerty" style={{ height: "24px", marginLeft: "4px" }} />
        ) : (
          ""
        )}
      </div>
      <div style={{ display: "flex" }}>
        <div className="icongroup">
          <div style={{ width: "0px", height: "0px" }}>

          </div>



          <div className="icon white">
            <div className="btn-group">
              {/* <button type="button" className="btn btn-danger"></button> */}
              <button
                type="button"
                className="btn dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsFillEnvelopeFill color="white" size="19px" />
                {/* <span className="visually-hidden">Toggle Dropdown</span> */}
              </button>
              {/* <ul className="dropdown-menu">
                <div className="notification">
                  <h6 style={{ position: 'relative', top: '10px' }}>Notification</h6>
                </div>{" "}
                {isLoading === false ? userData.data.map((item, index) => (
                  <>
                    <div className="col drop-msg d-flex align-items-start ms-3 col-12">
                      <div className="col-3">
                        <img src={img} alt="" />
                      </div>
                      <div className="col-9">
                        <h6 className="noti-h">{item.firstname} {item.lastname}</h6>
                        <h6 className="noti">
                          {item.Message.length > 40 ? `${item.Message.substring(0, 40)}...` : `${item.Message.substring(0, 25)}`}
                        </h6>
                      </div>
                    </div>
                    <hr /></>)) : ''}
              </ul> */}
            </div>
          </div>

          <div className="icon white">
            <FaBell size="19px" />
          </div>
        </div>
        <div className="userlogo">
          <img src={img} alt="qwerty" />
        </div>
        <div className="sec-center">
          <input
            className="dropdown"
            type="checkbox"
            id="dropdown"
            name="dropdown"
          />
          <label className="for-dropdown" htmlFor="dropdown">
            {userinfo?.user?.first_name} {userinfo?.user?.last_name}
            <AiOutlineDown />
          </label>
          <div className="section-dropdown">
            <div
              className="col sec-profile d-flex align-items-center justify-content-center mt-2 ms-1 col-12"
              style={{ flexDirection: "column" }}
            >
              <div className="col">
                <img src={img} alt="" />
              </div>
              <div className="col-12 name-drop">
                <p className="head-txt">{userinfo?.user?.first_name} {userinfo?.user?.last_name}</p>
                <p className="head-para">{userinfo?.user?.email}</p>
              </div>
            </div>
            <ul className="p-0">
              <li>
                <NavLink to="/profiledetail">
                  <FaUserAlt /> <span>View Profile</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/accountpassword">
                  <FaCog /> <span>Account Setting</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/logactivity">
                  <FaSignature /> <span>Login Activity</span>{" "}
                </NavLink>{" "}
                <hr />
              </li>
              <li onClick={logoutevt}>
                <NavLink to="#">
                  {" "}
                  <FaEuroSign /> <span>Log Out</span>{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

















    </div> : ''
  );
};

export default Header;
