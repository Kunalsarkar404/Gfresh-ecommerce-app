import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../../store/api/productapi";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Loader";
import { useGetAttributeByCategoryQuery, useGetChildCategoriesQuery } from "../../store/api/categoryapi";

const Category = () => {
  const { id, name, url } = useParams();
  const nvg = useNavigate();
  const [pricevalue, setpricevalue] = useState(14000);
  const [brand, setbrand] = useState(true);
  const [price, setprice] = useState(true);
  const [filter, setfilter] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [childCategories, setChildCategories] = useState([]);
  const [selectedChildCategory, setSelectedChildCategory] = useState(null);

  const { data, isLoading, refetch } = useGetProductByCategoryQuery({ id, url: url || "none" });
  const { data: attributeData, isLoading: attributeLoading } = useGetAttributeByCategoryQuery(id);
  const { data: childData, isLoading: childLoading } = useGetChildCategoriesQuery(id, {
    skip: !id, // Skip if no ID is provided
  });

  // Fetch child categories
  useEffect(() => {
    if (childData && childData.length > 0) {
      setChildCategories(childData);
      // Check if URL contains a child category ID and set it as selected
      const urlCategory = new URLSearchParams(url).get("category");
      if (urlCategory) setSelectedChildCategory(urlCategory);
    }
  }, [childData, url]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Extract max_price from URL
  useEffect(() => {
    const regex = /max_price=(\d+)/;
    const hasMaxPrice = regex.test(url || "");
    if (hasMaxPrice) {
      const match = url.match(regex);
      if (match) setpricevalue(match[1]);
    }
  }, [url]);

  const transfer = (productid) => {
    nvg(`/productdetails/${productid}`);
    window.location.reload();
  };

  const handleChildCategoryClick = (childCategory) => {
    setSelectedChildCategory(childCategory._id);
    doublefilterstep1("category", childCategory._id, "page", 1);
  };

  const pagefilter = async (key, newData) => {
    let currentUrl = url || "none";
    let finalurl = currentUrl.includes(`${key}=`)
      ? currentUrl.replace(new RegExp(`${key}=[^&]+`), `${key}=${newData}`)
      : currentUrl === "none"
      ? `${key}=${newData}`
      : `${currentUrl}&${key}=${newData}`;
    nvg(`/category/${id}/${name}/${finalurl}`);
    refetch();
  };

  const doublefilterstep1 = (key, newData, key2, newData2) => {
    let currentUrl = url || "none";
    let finalurl = currentUrl.includes(`${key}=`)
      ? currentUrl.replace(new RegExp(`${key}=[^&]+`), `${key}=${newData}`)
      : currentUrl === "none"
      ? `${key}=${newData}`
      : `${currentUrl}&${key}=${newData}`;
    doublefilterstep2(key2, newData2, finalurl);
  };

  const doublefilterstep2 = (key, newData, url) => {
    let finalurl = url.includes(`${key}=`)
      ? url.replace(new RegExp(`${key}=[^&]+`), `${key}=${newData}`)
      : url === "none"
      ? `${key}=${newData}`
      : `${url}&${key}=${newData}`;
    nvg(`/category/${id}/${name}/${finalurl}`);
    refetch();
    window.location.reload();
  };

  const updateDataValueforsort = (key, newData) => {
    let currentUrl = url || "none";
    let finalurl = currentUrl.includes(`${key}=`)
      ? currentUrl.replace(new RegExp(`${key}=[^&]+`), `${key}=${newData}`)
      : currentUrl === "none"
      ? `${key}=${newData}`
      : `${currentUrl}&${key}=${newData}`;
    nvg(`/category/${id}/${name}/${finalurl}`);
    window.location.reload();
  };

  const updateDataValue = (key, newData) => {
    let currentUrl = url || "none";
    let finalurl = currentUrl.includes(`${key}=${newData}`)
      ? currentUrl.replace(`&${key}=${newData}`, "")
      : currentUrl === "none"
      ? `${key}=${newData}`
      : `${currentUrl}&${key}=${newData}`;
    doublefilterstep2("page", 1, finalurl);
  };

  return (isLoading || attributeLoading || childLoading) ? (
    <Loader />
  ) : (
    <div className="bg-light">
      <Header />
      <div className="container mx-auto px-4 mt-16"> {/* Added mt-16 to push content below Header */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <div
            className={`fixed top-0 bottom-0 left-0 w-64 bg-green-800 text-white z-50 transform transition-transform duration-300 ${
              currentWidth < 768 && !filter ? "-translate-x-full" : "translate-x-0"
            } md:static md:w-1/4 md:translate-x-0 md:z-0`}
          >
            <div className="p-4 h-full overflow-y-visible">
              {/* Mobile Close Button */}
              <div className="md:hidden flex justify-end mb-4">
                <button onClick={() => setfilter(false)} className="text-white">
                  <i className="fa fa-times text-xl" />
                </button>
              </div>

              {/* Parent Category */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold uppercase">Category</h4>
                <h6 className="mt-2 text-base font-medium">
                  {attributeData?.parentcategoryname?.name || attributeData?.categorydata?.name || name}
                </h6>
              </div>

              {/* Child Categories */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold uppercase">Subcategories</h4>
                {childCategories.length > 0 ? (
                  <ul className="mt-2 space-y-2">
                    {childCategories.map((category) => (
                      <li
                        key={category._id}
                        className={`cursor-pointer hover:text-green-200 ${
                          selectedChildCategory === category._id ? "text-green-200 font-medium" : ""
                        }`}
                        onClick={() => handleChildCategoryClick(category)}
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-gray-300">No subcategories found</p>
                )}
              </div>

              {/* Brand Filter */}
              {attributeData?.availableFilters?.brand?.[0] && (
                <div className="mb-6">
                  <h3
                    className="text-lg font-semibold cursor-pointer uppercase"
                    onClick={() => setbrand(!brand)}
                  >
                    Brand
                  </h3>
                  <div className={`${brand ? "block" : "hidden"} mt-2 space-y-2`}>
                    {attributeData.availableFilters.brand.map((item) => (
                      <div className="flex items-center gap-2" key={item}>
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-green-600 bg-white border-gray-300 rounded"
                          onClick={() => updateDataValue("brand", item)}
                          checked={url?.includes(`brand=${item}`) || false}
                        />
                        <label className="text-sm">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Filter */}
              <div className="mb-6">
                <h3
                  className="text-lg font-semibold cursor-pointer uppercase"
                  onClick={() => setprice(!price)}
                >
                  Price
                </h3>
                {price && (
                  <div className="mt-2">
                    <p className="text-sm">₹{pricevalue}</p>
                    <input
                      type="range"
                      min={0}
                      max={14000}
                      value={pricevalue}
                      onChange={(e) => {
                        setpricevalue(e.target.value);
                        updateDataValueforsort("max_price", e.target.value);
                      }}
                      className="w-full mt-2 accent-green-600"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="bg-gray-100 p-4">
              <div className="mb-4">
                <div className="text-sm text-black font-light">
                  Showing Products{" "}
                  {Math.min((data?.pageNumber - 1) * data?.itemsPerPage + 1, data?.totalItems)}-
                  {Math.min(data?.pageNumber * data?.itemsPerPage, data?.totalItems)}{" "}
                  of {data?.totalItems} Results
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="font-semibold text-sm">Sort By</span>
                  <button
                    className={`text-sm ${
                      url?.includes(`order=ASE&orderby=selling_price`)
                        ? "text-blue-500 border-b-2 border-blue-500 font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => doublefilterstep1("order", "ASE", "orderby", "selling_price")}
                  >
                    Price - Low to High
                  </button>
                  <button
                    className={`text-sm ${
                      url?.includes(`order=DESC&orderby=selling_price`)
                        ? "text-blue-500 border-b-2 border-blue-500 font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => doublefilterstep1("order", "DESC", "orderby", "selling_price")}
                  >
                    Price - High to Low
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                {isLoading ? (
                  <div className="col-span-full text-center py-4">
                    <Loader />
                  </div>
                ) : data?.data?.[0] ? (
                  data.data.map((item) => (
                    <div key={item._id} className="bg-white p-1 rounded-lg shadow">
                      <button className="w-full" onClick={() => transfer(item._id)}>
                        <img
                          src={`http://localhost:8000/uploads/images/${item?.product_image1}`}
                          className="w-full h-auto"
                          alt="product"
                        />
                      </button>
                      <div className="p-2 text-center">
                        <button className="w-full" onClick={() => transfer(item._id)}>
                          <h6 className="text-sm font-semibold">{item?.product_name}</h6>
                        </button>
                        <div className="flex justify-center items-center gap-1 text-sm">
                          <span>₹{item?.selling_price}</span>
                          {item?.stock_record?.discount !== 0 && (
                            <>
                              <span className="text-xs text-gray-400 line-through">
                                ₹{item.mrp_price}
                              </span>
                              <span className="text-xs text-blue-500">
                                {`(${parseInt(((item.mrp_price - item.selling_price) / item.mrp_price) * 100)} %off)`}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-4 text-xl font-semibold">
                    No Result Found!
                  </div>
                )}
              </div>

              {data?.data?.[0] && (
                <div className="mt-4">
                  <ReactPaginate
                    pageCount={data?.totalPages || 0}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={(e) => pagefilter("page", e.selected + 1)}
                    forcePage={data?.pageNumber ? data.pageNumber - 1 : 0}
                    containerClassName="flex justify-center gap-2"
                    breakClassName="px-3 py-1"
                    activeClassName="bg-blue-500 text-white"
                    pageClassName="px-3 py-1 border rounded"
                    previousLabel={<i className="fa fa-chevron-left" />}
                    nextLabel={<i className="fa fa-chevron-right" />}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="fixed bottom-4 left-4 md:hidden">
            <button
              onClick={() => setfilter(!filter)}
              className="bg-green-800 text-white p-3 rounded-full shadow-lg"
            >
              <i className="fa fa-bars text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;