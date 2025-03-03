import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { gettoken } from '../Localstorage/Store';
import { useNavigate } from 'react-router-dom';
import { useGetBannerQuery, useGetBestSellerQuery, useGetFeatureItemQuery, useGetNewArrivalQuery } from '../store/api/bannerapi';
import Crouselitem from '../components/Crouselitem';

const Home = () => {
  const nvg = useNavigate();
  const tokenvalue = gettoken();
  const [categories, setCategories] = useState([]);
  const [parentCategories, setParentCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Replace with your actual categories API endpoint
        const response = await fetch('http://localhost:8000/api/category');
        if (response.ok) {
          const data = await response.json();
          const allCategories = data.data || [];
          setCategories(allCategories);

          // Filter only parent categories (those without a parent or with parentcategory array empty)
          const parents = allCategories.filter(cat =>
            !cat.parentcategory ||
            cat.parentcategory.length === 0 ||
            (Array.isArray(cat.parentcategory) && cat.parentcategory.length === 0)
          );
          setParentCategories(parents);
        } else {
          console.error('Failed to fetch categories');
          setCategories([]);
          setParentCategories([]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
        setParentCategories([]);
      }
    };

    fetchCategories();
  }, []);

  const options = {
    items: 1,
    loop: true,
    autoplay: false,
    nav: false,
    responsiveClass: true,
    dots: false,
    responsive: {
      1200: { items: 1 },
      920: { items: 1 },
      700: { items: 1 },
      600: { items: 1 },
      504: { items: 1 },
      300: { items: 1 },
      310: { items: 1 },
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
      1200: { items: 5 },
      920: { items: 4 },
      700: { items: 3 },
      600: { items: 3 },
      504: { items: 2 },
      300: { items: 2 },
      310: { items: 1 },
    },
  };

  const optionsForCategories = {
    items: 6,
    loop: false, // Disable infinite scrolling
    autoplay: false, // Disable autoplay for better control
    nav: true,
    responsiveClass: true,
    dots: false,
    navText: [
      "<div class='bg-white rounded-full p-2 shadow hover:bg-gray-100'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-4 h-4'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path></svg></div>",
      "<div class='bg-white rounded-full p-2 shadow hover:bg-gray-100'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-4 h-4'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'></path></svg></div>"
    ],
    responsive: {
      1200: { items: 6 },
      920: { items: 5 },
      700: { items: 4 },
      600: { items: 3 },
      504: { items: 2 },
      300: { items: 2 },
      310: { items: 1 },
    },
  };

  const { data: banner, isLoading: bannerLoading } = useGetBannerQuery();
  const { data: newArrivals, isLoading: newArrivalLoading } = useGetNewArrivalQuery();
  const { data: bestSeller, isLoading: bestSellerLoading } = useGetBestSellerQuery();
  const { data: featureItem, isLoading: featureItemLoading } = useGetFeatureItemQuery();

  useEffect(() => {
    if (!bannerLoading && !newArrivalLoading && !bestSellerLoading && !featureItemLoading) {
      setIsLoading(false);
    }
  }, [bannerLoading, newArrivalLoading, bestSellerLoading, featureItemLoading]);

  if (isLoading) {
    return <div className="loading-container">Loading...</div>;
  }

  const hasBannerData = banner && banner.data && banner.data.length > 0;
  const hasFeatureData = featureItem && featureItem.data && featureItem.data.length > 0;

  return (
    <div className="bg-light">
      <Header />

      {/* Promotion Slider */}
      {hasBannerData && (
        <>
          <div className="title8">
            <h4 style={{ fontSize: '16px' }}>Promotion Slider</h4>
          </div>
          <section className="sale-banenr banner-style2 design2">
            <OwlCarousel className="owl-theme" style={{ width: '100%', height: '100%' }} {...options}>
            {banner.data.filter(item => item.banner_type === "Slider").map((item, index) => (
                <div key={index} style={{ height: isMobile ? '300px' : '400px' }}>
                  <img
                    src={item.banner}
                    alt={item.banner_alt || `slider-${index}`}
                    className="img-fluid mainbanner bg-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onClick={() => item.banner_link && window.open(item.banner_link, '_blank')}
                  />
                </div>
              ))}
            </OwlCarousel>
          </section>
        </>
      )}

      {parentCategories.length > 0 && (
        <section className="py-4 mb-6">
          <div className="container-fluid">
            <div className="title8 mb-4">
              <h4 className="text-base font-medium">Shop By Categories</h4>
            </div>

            <div className="relative">
              <OwlCarousel
                className="owl-theme"
                {...optionsForCategories}
              >
                {parentCategories.map((category, index) => (
                  <div key={index} className="px-2">
                    <div
                      className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
                      onClick={() => nvg(`/category/${category.url}`)}
                    >
                      <div className="relative pb-full">
                        <img
                          src={category.banner}
                          alt={category.name}
                          className="absolute top-0 left-0 w-fit h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h5 className="text-sm font-medium truncate">{category.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>

              {/* Custom styling for Owl Carousel nav buttons */}
              <style jsx>{`
                /* Adding specific styling for navigation buttons */
                .owl-nav {
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  pointer-events: none;
                  padding: 0 10px;
                }
                
                .owl-nav button {
                  pointer-events: auto;
                }
                
                .owl-nav button:focus {
                  outline: none;
                }
                
                /* Custom CSS for aspect ratio since Tailwind's pb-full might not be available */
                .pb-full {
                  padding-bottom: 100%;
                }
              `}</style>
            </div>
          </div>
        </section>
      )}
      {/* Horizontal Scrollable Parent Categories Section End */}

      {/* Feature Product Section */}
      {hasFeatureData && (
        <>
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
        </>
      )}
      {/* Feature Product End */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;