import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { gettoken } from "../../Localstorage/Store";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartCountQuery } from "../../store/api/cartapi";
import { useGetWishlistCountQuery } from "../../store/api/wishlistapi";
import { useGetProductBySearchQuery } from "../../store/api/productapi";
import { addItem } from "../../store/state/cart";
import { addwishlist } from "../../store/state/wishlist";
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu } from "react-icons/fi";
import logo from "../../assets/gfresh-logo.png";

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

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-2">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/home">
          <img src={logo} alt="Gfresh Logo" className="h-10" />
        </NavLink>

        {/* Search Bar */}
        <div className="relative hidden md:block w-1/3">
          <div className="flex items-center border rounded px-3 py-1 bg-white">
            <input
              type="text"
              className="flex-grow outline-none p-1"
              placeholder="Search for Product"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <FiSearch className="text-green-600 cursor-pointer" />
          </div>
          {showRecords && (
            <ul className="absolute w-full bg-white shadow-lg mt-1">
              {!searchError && searchApiData?.results?.length > 0 ? (
                searchApiData.results.map((item) => (
                  <li key={item._id} className="p-2 border-b cursor-pointer">
                    <h6 className="text-sm font-semibold text-green-600">{item.product_name}</h6>
                    <p className="text-xs text-gray-500">₹{item.selling_price}</p>
                  </li>
                ))
              ) : (
                searchValue && <li className="p-2 text-center text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4 text-green-700">
          <NavLink to={token ? "/profile" : "/login"}><FiUser size={22} /></NavLink>
          <NavLink to="/wishlist" className="relative">
            <FiHeart size={22} />
            {globalState.wishlist > 0 && <span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded-full">{globalState.wishlist}</span>}
          </NavLink>
          <NavLink to="/cart" className="relative">
            <FiShoppingCart size={22} />
            {globalState.cart > 0 && <span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded-full">{globalState.cart}</span>}
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <FiMenu size={28} className="text-green-700 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" onClick={() => setShowSidebar(false)}>
          <div className="w-64 bg-white shadow-lg p-4 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
            <NavLink to={token ? "/profile" : "/login"} className="flex items-center gap-2 text-green-700"><FiUser size={22} /> Profile</NavLink>
            <NavLink to="/wishlist" className="flex items-center gap-2 text-green-700"><FiHeart size={22} /> Wishlist</NavLink>
            <NavLink to="/cart" className="flex items-center gap-2 text-green-700"><FiShoppingCart size={22} /> Cart</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
