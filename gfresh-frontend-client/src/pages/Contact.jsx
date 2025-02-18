import React, { useState } from "react";
import Footer from '../components/Footer'
import Header from "../components/Header/Header";
const Contact = () => {
    

    return (
        <>
        <Header />

        <div className="breadcrumb-main marginfromtop">
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              <ul>
                <li><a href="/">home</a></li>
                <li><i className="fa fa-angle-double-right" /></li>
                <li><a href="javascript:void(0)">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            <section className="contact-page section-big-py-space b-g-light">
                <div className="custom-container">
                    <div className="row section-big-pb-space">
                        <div className="col-xl-6 offset-xl-3">
                            <h3 className="text-center mb-3">Get in touch</h3>
                            <form className="theme-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Last Name</label>
                                            <input type="text" className="form-control" id="last-name" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="review">Phone number</label>
                                            <input type="text" className="form-control" id="review" placeholder="Enter your number" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" className="form-control" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12 message">
                                        <div>
                                            <label>Write Your Message</label>
                                            <textarea className="form-control" placeholder="Write Your Message" rows={2} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-normal" type="submit">Send Your Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 map">
                            <div className="theme-card">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

 {/* <Footer/> */}


        </>
    );
};
export default Contact;