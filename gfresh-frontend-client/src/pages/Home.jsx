import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { gettoken } from '../Localstorage/Store';
import { useNavigate } from 'react-router-dom';
import { useGetBannerQuery, useGetBestSellerQuery, useGetFeatureItemQuery, useGetNewArrivalQuery } from '../store/api/bannerapi';
import Crouselitem from '../components/Crouselitem';
import { useGetBrandQuery } from '../store/api/brandapi';

const Home = () => {

  const nvg = useNavigate();
  const tokenvalue = gettoken();
  const [categories, setcategories] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const options = {
    items: 1,
    loop: true,
    autoplay: false,
    nav: false,
    responsiveClass: true,
    dots: false,
    responsive: {
      1200: {
        items: 1,
      },
      920: {
        items: 1,
      },
      700: {
        items: 1,
      },
      600: {
        items: 1,
      },
      504: {
        items: 1,
      },
      300: {
        items: 1,
      },
      310: {
        items: 1,
      },
    },
  };
  const options2 = {
    items: 5,
    loop: true,
    autoplay: true,
    nav: true,
    responsiveClass: true,
    dots: false,
    responsive: {
      1200: {
        items: 5,
        // stagePadding: 50,
      },
      920: {
        items: 4,
      },
      700: {
        items: 3,
      },
      600: {
        items: 3,
      },
      504: {
        items: 2,
      },
      300: {
        items: 2,
      },
      310: {
        items: 1,
      },
    },
  };
  const optionsforbrand = {
    items: 6,
    loop: true,
    autoplay: true,
    nav: false,
    responsiveClass: true,
    dots: false,
    responsive: {
      1200: {
        items: 6,
        // stagePadding: 50,
      },
      920: {
        items: 5,
      },
      700: {
        items: 4,
      },
      600: {
        items: 4,
      },
      504: {
        items: 3,
      },
      300: {
        items: 2,
      },
      310: {
        items: 1,
      },
    },
  };    
      
  const { data: banner, isLoading: bannerLoading } = useGetBannerQuery();
  const { data: newArrivals, isLoading: newArrivalLoading } = useGetNewArrivalQuery();
  const { data: bestSeller, isLoading: bestSellerLoading } = useGetBestSellerQuery();
  const { data: featureItem, isLoading: featureItemLoading } = useGetFeatureItemQuery();
  const { data: categoryItem, isLoading: categoryItemLoading } = useGetBrandQuery();

  // Simplified loading check
  if (bannerLoading || categoryItemLoading || newArrivalLoading || bestSellerLoading || featureItemLoading) {
    return <></>;
  }

  return (
    <div className="bg-light">
      <Header />

      {/* home main banner section start */}
      <section className="sale-banenr banner-style2 design2 marginfromtop">
        <OwlCarousel className="owl-theme" style={{ width: '100%', height: '100%' }} {...options}>
          {banner.data.map((item, index) => (
            item.banner_type === "Banner" && (
              <div key={index} className='mobileorlaptop'>
                <img
                  onClick={() => { window.location.href = item.banner_link }}
                  src={`http://localhost:8000/uploads/images/${item.banner}`}
                  alt={`banner-${index}`}
                  className="img-fluid mainbanner bg-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )
          ))}
        </OwlCarousel>
      </section>
      {/* home main banner section end */}

      {/* home mine banner start */}
      <section className="megastore-slide collection-banner section-py-space b-g-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                {categories.map((category) => (
                  <div className="col-md-4" style={{ paddingBottom: 12 }} key={category.id}>
                    <div className="collection-banner-main banner-18 banner-style7 collection-color13 p-left text-center">
                      <div className="collection-img">
                        <img
                          onClick={() => { window.location.href = category.link }}
                          src={category.image ? `https://adminoneupv1.stackerbee.com${category.image}` : "images/mega-store/slider/banner/placeholder.jpg"}
                          className="img-fluid bg-img"
                          alt={category.category_name}
                        />
                      </div>
                      <div className="collection-banner-contain">
                        <h3>{category.category_name}</h3>
                        <h3>{category.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: category.description }} />
                        <button type='button' onClick={() => { window.location.href = category.Link }} className="btn btn-rounded" style={{ padding: '12px 24px' }}>
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* home mine banner end */}

      {/* Feature Product Section */}
      <div className="title8">
        <h4 style={{ fontSize: '16px' }}>Feature Product</h4>
      </div>
      <section className="section-big-mb-space ratio_square product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pr-0">
              <div className="product-slide-5 product-m no-arrow">
                <OwlCarousel className="owl-theme" style={{ width: '100%', height: '100%' }} {...options2}>
                  {featureItem.data.map((item) => (
                    <Crouselitem key={item.id} item={item} />
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Product End */}

      {/* Promotion Slider */}
      <div className="title8">
        <h4 style={{ fontSize: '16px' }}>Promotion Slider</h4>
      </div>
      <section className="sale-banenr banner-style2 design2">
        <OwlCarousel className="owl-theme" style={{ width: '100%', height: '100%' }} {...options}>
          {banner.data.map((item, index) => (
            item.banner_type === "Slider" && (
              <div key={index} style={{ height: isMobile ? '300px' : '400px' }}>
                <img
                  src={`http://localhost:8000/api/banner/${item.banner}`}
                  alt={item.banner_name}
                  className="img-fluid mainbanner bg-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )
          ))}
        </OwlCarousel>
      </section>

      {/* Shop By Brands */}
      {/* <div className="title8 section-mb-space mt-4">
        <h4 style={{ fontSize: '16px' }}>Shop By Categories</h4>
      </div>
      <section className="brand-second section-big-mb-space">
        <div className="container-fluid">
          <div className="row brand-block">
            <div className="col-12">
              <div className="brand-slide12 no-arrow mb--5">
                <OwlCarousel className="owl-theme" style={{ width: '100%', height: '100%' }} {...optionsforbrand}>
                  {categoryItem.data.map((item, index) => (
                    <div key={index}>
                      <div className="brand-box" onClick={() => { nvg(`/categoryforbrand/${item.category_name}`) }}>
                        <img src={`http://localhost:8000/uploads/images/${item.category_image}`} alt="" className="img-fluid" />
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home