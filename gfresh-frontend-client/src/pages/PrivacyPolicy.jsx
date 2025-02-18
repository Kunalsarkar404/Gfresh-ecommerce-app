import React, { useEffect, useState } from "react";
// import React from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export const PrivacyPolicy = () => {

  return (
    <div>
      <Header />



      <div>
          {/* breadcrumb start */}
  <div className="breadcrumb-main marginfromtop" style={{backgroundColor:"#f9f9f9"}}>
    <div className="container m-0">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              <ul>
                <li><a href="/">home</a></li>
                <li><i className="fa fa-angle-double-right" /></li>
                <li><a href="javascript:void(0)">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb End */}
        <section className="section-big-pt-space pb-2" style={{backgroundColor:"#f9f9f9"}}>
          <div className="col-lg-12 col-sm-12 col-xs-12 mt-lg-3 mt-xs-4 mb-5">
            <div className="container-fuild emp-profile">
              <div className="row profile2">
               

                <section className="tab-product-main-tab">
                  <div className="row mt-2">
                       <h3 className="privacy">PRIVACY POLICY</h3>
                       <p className="policy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis perspiciatis minus exercitationem ducimus suscipit obcaecati saepe nobis, consequatur ut rerum corrupti molestiae, voluptate ab aspernatur dolore eaque. Labore assumenda, hic mollitia praesentium sed harum consequatur minima impedit facilis dicta magnam optio quaerat, vitae perspiciatis incidunt maiores architecto. Earum quae asperiores recusandae sequi impedit maiores! Dolore, cupiditate doloremque! Consequuntur est saepe temporibus vero illum dignissimos quibusdam hic enim. Quidem earum rerum atque numquam dolorum nulla? A doloremque saepe voluptatum accusamus, ipsa corrupti similique blanditiis quibusdam sed voluptatem consequuntur modi distinctio iusto quam culpa. Corporis modi blanditiis ratione est tempore quasi veniam obcaecati sed incidunt. Ipsam, quidem! In nesciunt expedita maiores ipsa a dolores illum? Consequuntur alias excepturi animi commodi neque. Sed at enim quia quos porro, ut iure, aliquid illum, voluptatem quam recusandae. Eaque perferendis laborum sed fugit magni eos consequatur! Ipsum saepe magni iusto atque nihil enim facere delectus quis tempora suscipit amet id impedit, perspiciatis nostrum quaerat, sapiente provident fugiat harum explicabo facilis, eveniet architecto aliquid? Voluptate impedit eos, dolor officiis voluptates quasi nesciunt labore dolorem, suscipit officia molestiae quisquam, doloribus eaque repellendus? Perferendis iste corporis suscipit voluptatem modi est, a esse id? Quaerat, recusandae? Voluptatum fugiat cum aut, quod enim eveniet dolores? Excepturi explicabo, id perferendis animi delectus aut obcaecati ad provident tenetur, laboriosam quo? Ipsam consectetur dignissimos dolores porro veniam minus a labore possimus suscipit nemo, sint officiis recusandae praesentium odit officia quas quidem quisquam optio dolorem autem maiores? Autem obcaecati minima repudiandae, natus iusto sapiente.</p>

                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {/* </div> */}

        {/* <Footer /> */}

        {/* footer start */}
     
      </div>
    </div>
  );
};
export default PrivacyPolicy;
