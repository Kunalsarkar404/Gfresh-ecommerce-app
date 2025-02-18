import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import Addcategoryform from "./Addcategoryform";

const Addcategory = () => {
  const navigate = useNavigate();

  const handleFormSubmitSuccess = () => {
    // Optional navigation logic if needed before refreshing
    navigate("/categorylist/0");
    window.location.reload(); // Forces page refresh
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="dashboardcontent px-2">
        <div className="container-fuild px-2 desgin1">
          <div className="row bg-white">
            <div
              className="col-lg-12 d-flex justify-content-between py-2"
              style={{
                background: "#bcdae9",
                color: "#0C5398",
              }}
            >
              <p className="m-0 customfont">Add Category</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn">
                  <NavLink
                    to="/categorylist/0"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    x Close
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Pass the handler to trigger a refresh */}
        <Addcategoryform onFormSubmitSuccess={handleFormSubmitSuccess} />
      </div>
    </div>
  );
};

export default Addcategory;
