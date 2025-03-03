import React, { useRef } from "react";
import Footer from "../../components/Footer";
import "../../css/login.css";
import Loginsection from "./Loginsection";
import Registersection from "./Registersection";
import GfreshLogo from "../../assets/gfresh-logo.png";

const Login = () => {
  const ctl = useRef(null);
  const vtl = useRef(null);

  return (
    <section className="login-page bg-body marginfromtop" style={{ width: "100%" }}>
      <div className="container" style={{ background: "white", marginTop: "50px", paddingBottom: "76px" }}>
        <div className="row align-items-center g-5 pt-5">
          <div className="col-lg-6 offset-md-3">
            <div className="container newpadding hidepadding">
              <div className="card p-1" style={{ border: "none" }}>
                {/* Logo Section */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <img src={GfreshLogo} alt="Gfresh Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <nav>
                  <div className="nav nav-tabs" style={{ justifyContent: "center" }} id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      ref={ctl}
                    >
                      Login
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      ref={vtl}
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Register
                    </button>
                  </div>
                </nav>
                <div className="tab-content p-2" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <Loginsection />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <Registersection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
