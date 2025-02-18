import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div>

        {/*header start*/}
        <Header />
        {/*header end*/}
        {/* breadcrumb start */}
        <div className="breadcrumb-main marginfromtop">
          <div className="container m-0">
            <div className="row">
              <div className="col">
                <div className="breadcrumb-contain">
                  <div>
                    <ul>
                      <li><a href="/">home</a></li>
                      <li><i className="fa fa-angle-double-right" /></li>
                      <li><a href="javascript:void(0)">about</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb End */}
        {/* about section start */}
        <section className="about-page section-big-py-space">
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="title8">

                  <h2 className="text-center" style={{ fontWeight: '600', color: '#059fe2' }}>
                    About Us
                  </h2>
                </div>
                <div className="Imgverify d-flex justify-content-center" style={{ position: 'relative', top: '-20px' }}> <img src="./images/about.png" alt="img-fluid" style={{ width: '27%', mixBlendMode: 'darken' }} className="boyimg" /></div>
                <h5 className="px-lg-5 mx-lg-5" style={{ textAlign: 'center', lineHeight: '30px' }}>At Ecomus, we're not just about selling products; we're about creating experiences. Our passion for quality, affordability, and customer satisfaction drives everything we do. From trendy fashion to cutting-edge technology and elegant furniture, we're your one-stop destination for all your shopping needs. customer satisfaction is our top priority. We're dedicated to providing exceptional service, fast shipping, and hassle-free returns. Our team is always here to assist you, whether you have questions about a product or need help with your order.</h5>
              </div>

            </div>
          </div>
        </section>
        {/* about section end */}

      </div>
      <Footer />
    </>
  )
}
export default About;