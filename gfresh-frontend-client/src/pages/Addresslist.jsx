import React, { useState } from "react";
// import React from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { TfiAlignJustify } from "react-icons/tfi";
export const Addresslist = () => {
  const [owl, setowl] = useState("tab-1");

  return (
    <div>
      <Header />

      <div>
        <section className="section-big-pt-space py-5 mt-5">
          <div className="col-lg-12 col-sm-12 col-xs-12 mt-5 mb-5">
            <div className="container-fluid emp-order">
              <form method="">
                <div className="row order">
                  <div className="box-order">
                    <h4 className="Manage mt-4 mb-4">
                      Manage Addresses <span>+ Add A New Address</span>
                    </h4>

                    <div className="">
                      <div class="row details">
                        <div class="col-lg-5">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">
                                Andrew Clark{" "}
                                <span className="hello">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </span>
                              </h5>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  <h5 className="number">
                                    Mobile:{" "}
                                    <span className="number2">
                                      +99-3839483943
                                    </span>
                                  </h5>
                                </label>
                              </div>
                              <p className="small-text">
                                85-B, UAE Road, DubaiSaudi Arabia, 201001
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-5 py-4">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">
                                Johan Clark{" "}
                                <span className="hello">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </span>
                              </h5>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  <h5 className="number">
                                    Mobile:{" "}
                                    <span className="number2">
                                      +99-3839483943
                                    </span>
                                  </h5>
                                </label>
                              </div>
                              <p className="small-text">
                                85-B, UAE Road, DubaiSaudi Arabia, 201001
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* <div className='row details3'>
                      <div class="col-sm-5">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                      </div> */}
                      </div>

                      <div className="row details3  mt-3 mb-5">
                        <div class="col-lg-5">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">
                                Johan Clark{" "}
                                <span className="hello">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </span>
                              </h5>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  <h5 className="number">
                                    Mobile:{" "}
                                    <span className="number2">
                                      +99-3839483943
                                    </span>
                                  </h5>
                                </label>
                              </div>
                              <p className="small-text">
                                85-B, UAE Road, DubaiSaudi Arabia, 201001
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-5">
                          {/* <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* </div> */}

        {/* <Footer /> */}

        {/* footer start */}
      </div>
    </div>
  );
};
export default Addresslist;
