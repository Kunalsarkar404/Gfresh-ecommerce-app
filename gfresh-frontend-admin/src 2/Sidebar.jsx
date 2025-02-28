import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img from "./assets/Ecomus.svg";
import img1 from "./assets/dashboard.png";
import img4 from "./assets/team.png";
import img5 from "./assets/options.png";
import img8 from "./assets/brand.png";
import img9 from "./assets/logout 2.png";
import img11 from "./assets/ads.png";
import img12 from "./assets/products.png";
import img13 from "./assets/personal-information.png";
import img40 from "./assets/trolley.png";
import img43 from "./assets/completed-task.png";
import { gettoken, removeToken, sohstore } from "./Localstorage/Store";
import Header from "./components/Header";

const Sidebarmenu = ({ children }) => {
  const gettokinval = gettoken();
  const navigate = useNavigate();

  // State to manage sidebar collapse status
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Renamed state: when true, the logo is shown
  const [showLogo, setShowLogo] = useState(true);

  // Function to toggle the collapsed state
  const collapseSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  // Function to toggle the logo display (you can adjust this logic as needed)
  const toggleLogoDisplay = () => {
    setShowLogo((prevState) => !prevState);
  };

  // Combined handler for the hamburger menu click
  const handleHamburgerClick = () => {
    collapseSidebar();
    toggleLogoDisplay();
  };

  // Logout handler
  const logoutevt = async () => {
    removeToken();
    navigate("/");
  };

  // State to track the currently open sub-menu
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Function to toggle sub-menu open/close state
  const handleSubMenuClick = (key) => {
    setOpenSubMenu(key === openSubMenu ? null : key);
  };

  // Example side effect (ensure this is intended)
  useEffect(() => {
    sohstore(false);
  }, []);

  // Get the current location for active link highlighting
  const location = useLocation();

  // Use this helper to check the base route (removing the last segment)
  const result = location.pathname.substring(0, location.pathname.lastIndexOf("/"));

  // If on the login or public route ("/"), do not render the sidebar
  if (location.pathname === "/") {
    return (
      <div style={{ background: "#F3F6FA" }}>
        {children}
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar collapsed={isCollapsed}>
          <div>
            <Menu>
              <MenuItem
                style={{ borderBottom: "1px solid #D9D9D9" }}
                icon={
                  <GiHamburgerMenu
                    fontSize={23}
                    onClick={handleHamburgerClick}
                    color="#0C5398"
                  />
                }
              >
                {/* Display logo if showLogo is true */}
                {showLogo && <img src={img} alt="logo" style={{ width: "80%" }} />}
              </MenuItem>
            </Menu>

            <Menu>
              <MenuItem icon={<img style={{ width: "36px" }} src={img1} alt="dashboard" />}>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? "nav active" : "nav")}
                >
                  Dashboard
                </NavLink>
              </MenuItem>

              <MenuItem icon={<img style={{ width: "36px" }} src={img4} alt="user" />}>
                <NavLink
                  to="/userlist/0"
                  className={
                    location.pathname === "/adduser" ||
                    result === "/userlist" ||
                    result === "/edituser"
                      ? "nav active"
                      : "nav"
                  }
                >
                  User
                </NavLink>
              </MenuItem>

              <MenuItem icon={<img style={{ width: "36px" }} src={img40} alt="cart" />}>
                <NavLink
                  to="/cartlist/0"
                  className={result === "/cartlist" ? "nav active" : "nav"}
                >
                  Cart
                </NavLink>
              </MenuItem>

              <MenuItem icon={<img style={{ width: "36px" }} src={img5} alt="category" />}>
                <NavLink
                  to="/categorylist/0"
                  className={
                    location.pathname === "/addcategory" ||
                    result === "/categorylist" ||
                    result === "/editcategory"
                      ? "nav active"
                      : "nav"
                  }
                >
                  Category
                </NavLink>
              </MenuItem>

              <MenuItem icon={<img style={{ width: "36px" }} src={img43} alt="order" />}>
                <NavLink
                  to="/orderlist/0"
                  className={
                    location.pathname === "/addorder" ||
                    result === "/orderlist" ||
                    result === "/editorder"
                      ? "nav active"
                      : "nav"
                  }
                >
                  Order
                </NavLink>
              </MenuItem>

              <MenuItem icon={<img style={{ width: "36px" }} src={img12} alt="product" />}>
                <NavLink
                  to="/productlist/0"
                  className={
                    location.pathname === "/addproduct" ||
                    result === "/productlist" ||
                    result === "/editproduct"
                      ? "nav active"
                      : "nav"
                  }
                >
                  Product
                </NavLink>
              </MenuItem>

              <MenuItem icon={<img style={{ width: "36px" }} src={img11} alt="banner" />}>
                <NavLink
                  to="/bannerlist/0"
                  className={
                    location.pathname === "/addbanner" ||
                    result === "/bannerlist" ||
                    result === "/editbanner"
                      ? "nav active"
                      : "nav"
                  }
                >
                  Banner
                </NavLink>
              </MenuItem>

              <MenuItem icon={<img style={{ width: "36px" }} src={img8} alt="brand" />}>
                <NavLink
                  to="/brandlist/0"
                  className={
                    location.pathname === "/addbrand" ||
                    result === "/brandlist" ||
                    result === "/editbrand"
                      ? "nav active"
                      : "nav"
                  }
                >
                  Brand
                </NavLink>
              </MenuItem>

              <SubMenu
                title="Webinfo"
                key="submenu1"
                open={openSubMenu === "submenu1"}
                onClick={() => handleSubMenuClick("submenu1")}
                icon={<img style={{ width: "36px" }} src={img13} alt="webinfo" />}
              >
                <MenuItem>
                  <NavLink
                    to="/webinfo"
                    className={({ isActive }) => (isActive ? "nav active" : "nav")}
                    style={{ paddingLeft: isCollapsed ? "72px" : "30px" }}
                  >
                    Web Detail
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/contactlist/0"
                    className={
                      location.pathname === "/contactlist" ||
                      result === "/contactlist"
                        ? "nav active"
                        : "nav"
                    }
                    style={{ paddingLeft: isCollapsed ? "72px" : "30px" }}
                  >
                    Contact Us
                  </NavLink>
                </MenuItem>
              </SubMenu>

              <MenuItem
                onClick={logoutevt}
                icon={<img style={{ width: "36px" }} src={img9} alt="logout" />}
              >
                Log Out
              </MenuItem>
            </Menu>
          </div>
        </Sidebar>
        {/* <div style={{ width: "100%" }}>
        <Header />
          {children}
        </div> */}
      </div>
    );
  }
};

export default Sidebarmenu;
