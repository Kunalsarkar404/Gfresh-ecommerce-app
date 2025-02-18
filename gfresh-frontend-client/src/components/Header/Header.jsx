import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { gettoken, removeToken } from "../../Localstorage/Store";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartCountQuery } from "../../store/api/cartapi";
import { useGetWishlistCountQuery } from "../../store/api/wishlistapi";
import { useGetProductBySearchQuery } from "../../store/api/productapi";
import { addItem } from "../../store/state/cart";
import { addwishlist } from "../../store/state/wishlist";
import Nav from "./Nav";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showRecords, setShowRecords] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const token = gettoken();
  const currentPage = location.pathname;

  const { data: cartCount, isLoading: cartLoading, refetch: refetchCart } = useGetCartCountQuery();
  const { data: wishlistCount, isLoading: wishlistLoading, refetch: refetchWishlist } = useGetWishlistCountQuery();
  const { data: searchApiData, refetch: refetchSearch, isError: searchError } = useGetProductBySearchQuery(searchValue);

  useEffect(() => {
    if (!cartLoading && !wishlistLoading) {
      dispatch(addItem(cartCount?.totalItems || 0));
      dispatch(addwishlist(wishlistCount?.totalItems || 0));
    }
  }, [cartLoading, wishlistLoading, cartCount, wishlistCount, dispatch]);

  useEffect(() => {
    refetchCart();
  }, [globalState.cart, refetchCart]);

  const handleSearch = (value) => {
    setSearchValue(value);
    setShowRecords(Boolean(value));
    refetchSearch();
  };

  const handleProductTransfer = (productId) => {
    navigate(`/productdetails/${productId}`);
    if (currentPage === "/productdetails") {
      window.location.reload();
    }
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <header className="fixed-top" style={{ position: "fixed" }}>
      <div className="header7">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="header-contain">
                <div className="logo-block logowidth">
                  <div className="mobilecat-toggle" onClick={() => setShowSidebar(true)}>
                    <i className="fa fa-bars sidebar-bar" />
                  </div>
                  <div className="brand-logo logo-sm-center">
                    <NavLink to="/home">
                    <h1 className='text-lg font-bold'>Gfresh</h1>
                    </NavLink>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    ref={searchRef}
                    className="header-search ajax-search the-basics dflex"
                    style={{ backgroundColor: "white", border: "1px solid #cbc7c7", padding: "0px 3px" }}
                  >
                    <div className="input-group" style={{ border: "1px solid white" }}>
                      <input
                        type="text"
                        className="form-control newsizeinput"
                        style={{
                          background: "white",
                          borderRadius: "0",
                          padding: "0",
                          fontSize: "15px",
                        }}
                        value={searchValue}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search for Product"
                      />
                    </div>
                    <div className="input-group-text btn" style={{ backgroundColor: "white", padding: "0 17px", border: "none" }}>
                      <span className="newfontsize" onClick={() => setShowRecords(searchValue !== "" ? !showRecords : false)}>
                        <i className="fa fa-search" style={{ color: "#059fe2" }} />
                      </span>
                    </div>
                  </div>
                  {showRecords && (
                    <ul className="serachlisting" style={{ position: "absolute", width: "100%", zIndex: 4, background: "#fff" }}>
                      {!searchError && searchApiData?.results?.length > 0 ? (
                        searchApiData.results.map((item) => (
                          <li key={item._id} onClick={() => handleProductTransfer(item._id)} style={{ cursor: "pointer" }}>
                            <div className="p-1 d-flex" style={{ gap: "10px" }}>
                              <div style={{ width: "47%" }}>
                                <img
                                  src={`http://localhost:8000/uploads/images/${item.product_image1}`}
                                  alt="product"
                                  className="img-fluid"
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                              <div>
                                <h6 style={{ fontSize: "12px", color: "#059fe2", fontWeight: "600" }}>{item.product_name}</h6>
                                <h6 style={{ fontSize: "12px", color: "#059fe2" }}>₹{item.selling_price}</h6>
                                <p
                                  style={{
                                    fontSize: "11px", color: "#059fe2", overflow: "hidden", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", display: "-webkit-box"
                                  }}
                                >
                                  {item.sort_description}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        searchValue && (
                          <li style={{ padding: "4px 0", textAlign: "center" }}>
                            <h6 style={{ fontSize: "14px", color: "#333", fontWeight: "600" }}>No Record Found</h6>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
                <div className="icon-block">
                  <ul className="theme-color">
                    <li className="mobile-user item-count">
                      <div
                        className="dropdown d-flex"
                        onClick={() => navigate(token ? "/profile" : "/login")}
                      >
                        <NavLink to="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/mega-store/brand/profile.png`}
                            alt="Profile"
                            className="newwidthpro"
                          />
                          <span style={{ color: "black" }}>{token ? "Account" : "Login"}</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="mobile-wishlist item-count">
                      <NavLink to="/wishlist">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/mega-store/brand/wishlist.png`}
                          alt="Wishlist"
                          className="newwidthpro"
                        />
                        <div className="item-count-contain inverce">{globalState.wishlist}</div>
                      </NavLink>
                    </li>
                    <li className="mobile-cart item-count">
                      <NavLink to="/cart">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/mega-store/brand/cart.png`}
                          alt="Cart"
                          className="newwidthpro"
                        />
                        <div className="item-count-contain inverce">{globalState.cart}</div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
