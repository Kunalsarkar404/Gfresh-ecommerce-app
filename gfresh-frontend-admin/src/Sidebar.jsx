import React, { useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img from "./assets/gfresh-logo.png";
// import img from "./assets/Ecomus.svg";
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
import { useState } from "react";
import Header from "./components/Header";

const Sidebarmenu = ({ children }) => {
  const gettokinval = gettoken();
  const nvg = useNavigate();
  const logoutevt = async () => {
    removeToken();
    nvg("/");
  };
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (key) => {
    setOpenSubMenu(key === openSubMenu ? null : key);
  };
  useEffect(() => {
    sohstore(false);
  }, []);
  const [hideimg, sethideimg] = useState(false);
  const { collapseSidebar } = useProSidebar();
  const hideorshow = () => {
    sethideimg(!hideimg);
    sohstore(!hideimg);
  };
  const location = useLocation();
  const result = location.pathname.substring(
    0,
    location.pathname.lastIndexOf("/")
  );
  const desiredString = location.pathname.split("/").slice(0, 2).join("/");
  if (location.pathname === "/") {
    return (
      <div
        style={{
          background:
            location.pathname === "/resetpassword" ? "#ffff" : "#F3F6FA",
        }}
      ><div className="bg-gray-50 min-h-screen">{children}</div>
        {children}
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar
          className="bg-green-900 text-white min-h-screen transition-all"
          defaultCollapsed="close"
        >
          <div className="flex flex-col">
            <Menu className="nothover abc">
              <MenuItem
                className="text-white text-2xl cursor-pointer"
                icon={
                  <GiHamburgerMenu
                    children="logobtn"
                    fontSize={23}
                    onClick={() => {
                      collapseSidebar();
                      hideorshow();
                    }}
                    color="#0C5398"
                  />
                }
              >
                {hideimg == true && <img src={img} alt="qwerty" style={{ width: "80%" }} />}
              </MenuItem>
            </Menu>
            <Menu>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "bg-green-700 nav" : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img1} alt="qwert" />}
                >
                  {" "}
                  Dashboard{" "}
                </MenuItem>
              </NavLink>

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
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img4} alt="qwdfgerct" />}
                >
                  {" "}
                  User
                </MenuItem>
              </NavLink>
              <NavLink
                to="/cartlist/0"
                className={
                  location.pathname === "/" ||
                    result === "/cartlist" ? "nav active"
                    : "nav"
                }
              >
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img40} alt="qwdfgerct" />}
                >
                  {" "}
                  Cart
                </MenuItem>
              </NavLink>
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
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img5} alt="qwdfgerct" />}
                >
                  {" "}
                  Category
                </MenuItem>
              </NavLink>
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
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img43} alt="qwdfgerct" />}
                >
                  {" "}
                  Order
                </MenuItem>
              </NavLink>
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
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img12} alt="menu" />}
                >
                  {" "}
                  Product
                </MenuItem>
              </NavLink>
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
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img11} alt="menu" />}
                >
                  {" "}
                  Banner
                </MenuItem>
              </NavLink>
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
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img8} alt="menu" />}
                >
                  {" "}
                  Brand
                </MenuItem>
              </NavLink>

              <SubMenu
                title="Submenu 1"
                key="submenu1"
                open={openSubMenu === "submenu1"}
                onClick={() => handleSubMenuClick("submenu1")}
                icon={<img style={{ width: "36px" }} src={img13} alt="qwerct" />}
                label="Webinfo"
              >

                <NavLink
                  to="/webinfo"
                  className={
                    location.pathname === "/webinfo" ? "nav active"
                      : "nav"
                  }
                >
                  <MenuItem
                    style={{ paddingLeft: hideimg == true ? "72px" : "30px" }}
                  >
                    {" "}
                    Web Detail
                  </MenuItem>
                </NavLink>

                <NavLink
                  to="/contactlist/0"
                  className={
                    location.pathname === "/contactlist" ||
                      result === "/contactlist" ||
                      result === "/contactlist"
                      ? "nav active"
                      : "nav"
                  }
                >
                  <MenuItem
                    style={{ paddingLeft: hideimg == true ? "72px" : "30px" }}
                  >
                    {" "}
                    Contact Us
                  </MenuItem>
                </NavLink>
              </SubMenu>

              <NavLink to="/" onClick={logoutevt} className="nav">
                <MenuItem
                  className="nothover"
                  icon={<img style={{ width: "36px" }} src={img9} alt="qwerct" />}
                >
                  {" "}
                  Log Out{" "}
                </MenuItem>
              </NavLink>
            </Menu>
          </div>
        </Sidebar>
        <div style={{ width: "100%" }}>
          <Header />
          {children}
        </div>
      </div>
    );
  }
};

export default Sidebarmenu;