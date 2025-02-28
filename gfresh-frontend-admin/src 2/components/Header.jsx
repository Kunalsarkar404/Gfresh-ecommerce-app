import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaBell, FaCog, FaEuroSign, FaSignature, FaUserAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

// Import assets
import logoImage from "../assets/qwerty.png";         // Used for notifications and user image
import brandLogo from "../assets/Ecomus.svg";           // Brand logo displayed on the header

// Import utility functions from your local storage module
import { gettoken, getsoh, removeToken } from "../Localstorage/Store";

// Import RTK Query hook for fetching notifications (latest contacts)
import { useContactlistlatestQuery } from "../store/api/webinfoapi";

/* ---------------------- Subcomponents ---------------------- */

// Notification Dropdown: displays a list of notifications
const NotificationDropdown = ({ notifications, isLoading }) => {
  return (
    <div className="dropdown-menu notification-dropdown">
      <div className="notification-header">
        <h6>Notification</h6>
      </div>
      <hr />
      {isLoading ? (
        <div className="notification-loading">Loading...</div>
      ) : notifications && notifications.data && notifications.data.length > 0 ? (
        notifications.data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="notification-item d-flex align-items-start">
              <div className="notification-img">
                <img src={logoImage} alt="Notification" />
              </div>
              <div className="notification-content">
                <h6 className="notification-title">
                  {item.firstname} {item.lastname}
                </h6>
                <p className="notification-text">
                  {item.Message.length > 40
                    ? `${item.Message.substring(0, 40)}...`
                    : item.Message}
                </p>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))
      ) : (
        <div className="no-notifications">No notifications</div>
      )}
    </div>
  );
};

// User Dropdown: displays profile information and user-related navigation
const UserDropdown = ({ user, onLogout }) => {
  return (
    <div className="user-dropdown">
      <div className="user-dropdown-header text-center">
        <img src={logoImage} alt="User" className="user-dropdown-img" />
        <div className="user-info">
          <p className="user-name">{user?.first_name} {user?.last_name}</p>
          <p className="user-email">{user?.email}</p>
        </div>
      </div>
      <ul className="user-dropdown-menu">
        <li>
          <NavLink to="/profiledetail">
            <FaUserAlt /> <span>View Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/accountpassword">
            <FaCog /> <span>Account Setting</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/logactivity">
            <FaSignature /> <span>Login Activity</span>
          </NavLink>
        </li>
        <li onClick={onLogout}>
          <NavLink to="#">
            <FaEuroSign /> <span>Log Out</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

/* ---------------------- Main Header Component ---------------------- */

const Header = () => {
  const navigate = useNavigate();
  const userToken = gettoken(); // Assume this returns an object with a 'user' property
  const user = userToken?.user;
  const soh = getsoh();

  // Fetch notifications via RTK Query (latest 10 notifications, for example)
  const { data: notificationsData, isLoading } = useContactlistlatestQuery();

  // Local state to toggle the user dropdown visibility
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Toggle handler for the user dropdown
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  // Logout functionality: remove token and navigate to login page
  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  // If user is not authenticated, render nothing (or a placeholder)
  if (!user) return null;

  return (
    <header className="header d-flex justify-content-between align-items-center">
      {/* Left Side: Brand Logo */}
      <div className="header-left">
        {!soh && (
          <img
            src={brandLogo}
            alt="Brand Logo"
            className="brand-logo"
            style={{ height: "24px", marginLeft: "4px" }}
          />
        )}
      </div>

      {/* Right Side: Notification and User Controls */}
      <div className="header-right d-flex align-items-center">
        {/* Notification Area */}
        <div className="notification-group position-relative me-3">
          <div className="dropdown">
            <button
              className="btn notification-button dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillEnvelopeFill color="white" size="19px" />
            </button>
            <NotificationDropdown
              notifications={notificationsData}
              isLoading={isLoading}
            />
          </div>
          <div className="notification-icon ms-2">
            <FaBell size="19px" color="white" />
          </div>
        </div>

        {/* User Profile Area */}
        <div className="user-profile position-relative">
          <img
            src={logoImage}
            alt="User Profile"
            className="user-profile-img"
            onClick={toggleUserDropdown}
            style={{ cursor: "pointer" }}
          />
          <div className="user-name d-flex align-items-center ms-2" onClick={toggleUserDropdown} style={{ cursor: "pointer" }}>
            <span>{user.first_name} {user.last_name}</span>
            <AiOutlineDown className="ms-1" />
          </div>
          {isUserDropdownOpen && (
            <UserDropdown user={user} onLogout={handleLogout} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
