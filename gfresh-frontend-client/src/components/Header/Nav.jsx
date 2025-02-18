import { useGetAllCategoriesQuery } from "../../store/api/categoryapi";
import { NavLink, useNavigate } from "react-router-dom";
import Subcategory from "./Subcategory";
import MobileSubcategory from "./MobileSubcategory ";
import { useSelector } from "react-redux";

const Nav = ({ togglesidebar, closesidebar }) => {
  const nvg = useNavigate();
  const globalvariable = useSelector((state) => state);

  const redirectfun = (linkpage) => {
    nvg(linkpage);
  };

  const profilepage = (id) => {
    nvg("/profile", { state: { id: id } });
  };

  const { data: categoryData, isLoading } = useGetAllCategoriesQuery();

  if (isLoading) return null;

  return (
    <>
      <div className="category-header7">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="category-contain">
                <div className="category-left showandhide">
                  <div className="header-category">
                    <a className="category-toggle">
                      <i className="fa fa-bars" />
                      pages
                    </a>
                    <ul
                      id="main-menu"
                      className={`collapse-category show sm pixelstrap sm-horizontal ${
                        togglesidebar ? "open" : ""
                      }`}
                    >
                      <li
                        className="back-btn"
                        onClick={closesidebar}
                      >
                        <i className="fa fa-angle-left" /> back
                      </li>

                      {categoryData?.data?.map((item) => (
                        <MobileSubcategory
                          value={item}
                          key={item.id || item.name}
                          issubcategory={item.subcategories?.[0]?.name ? 1 : 0}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className="logo-block">
                    <div className="brand-logo logo-sm-center">
                      <NavLink to="/home">
                        <img
                          src="images/logo.png"
                          className="img-fluid"
                          alt="logo"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="category-right">
                  <div className="menu-block">
                    <nav id="main-nav">
                      <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar" />
                      </div>
                      <ul
                        id="main-menu"
                        className="sm pixelstrap sm-horizontal"
                      >
                        <li>
                          <div className="mobile-back text-right">
                            Back
                            <i
                              className="fa fa-angle-right ps-2"
                              aria-hidden="true"
                            />
                          </div>
                        </li>
                        {categoryData?.data?.map((item) => (
                          <Subcategory
                            key={item.id || item.name}
                            value={item}
                            issubcategory={item.subcategories?.[0]?.name ? 1 : 0}
                          />
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchbar-input ajax-search the-basics">
          <div className="input-group">
            <span className="input-group-text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="28.931px"
                height="28.932px"
                viewBox="0 0 28.931 28.932"
              >
                <g>
                  <path d="M28.344,25.518l-6.114-6.115c1.486-2.067,2.303-4.537,2.303-7.137c0-3.275-1.275-6.355-3.594-8.672C18.625,1.278,15.543,0,12.266,0C8.99,0,5.909,1.275,3.593,3.594C1.277,5.909,0.001,8.99,0.001,12.266c0,3.276,1.275,6.356,3.592,8.674c2.316,2.316,5.396,3.594,8.673,3.594c2.599,0,5.067-0.813,7.136-2.303l6.114,6.115c0.392,0.391,0.902,0.586,1.414,0.586c0.513,0,1.024-0.195,1.414-0.586C29.125,27.564,29.125,26.299,28.344,25.518z M6.422,18.111c-1.562-1.562-2.421-3.639-2.421-5.846S4.86,7.983,6.422,6.421c1.561-1.562,3.636-2.422,5.844-2.422s4.284,0.86,5.845,2.422c1.562,1.562,2.422,3.638,2.422,5.845s-0.859,4.283-2.422,5.846c-1.562,1.562-3.636,2.42-5.845,2.42S7.981,19.672,6.422,18.111z"></path>
                </g>
              </svg>
            </span>
            <input
              type="search"
              className="form-control typeahead"
              placeholder="Search a Product"
            />
            <span className="input-group-text close-searchbar">
              <svg
                viewBox="0 0 329.26933 329"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M194.8 164.77l128.21-128.21c8.34-8.34 8.34-21.82 0-30.16-8.34-8.34-21.82-8.34-30.16 0l-128.21 128.21-128.21-128.21c-8.34-8.34-21.82-8.34-30.16 0-8.34 8.34-8.34 21.82 0 30.16l128.21 128.21-128.21 128.21c-8.34 8.34-8.34 21.82 0 30.16 4.16 4.16 9.62 6.25 15.08 6.25 5.46 0 10.92-2.09 15.08-6.25l128.21-128.21 128.21 128.21c4.16 4.16 9.62 6.25 15.08 6.25 5.46 0 10.92-2.09 15.08-6.25 8.34-8.34 8.34-21.82 0-30.16z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
