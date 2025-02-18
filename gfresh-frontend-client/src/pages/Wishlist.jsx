import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {  useGetWishlistProductQuery,usePostDeleteWishlistMutation} from "../store/api/wishlistapi";
import { useDispatch, useSelector } from "react-redux";
import { addwishlist } from "../store/state/wishlist";

const Wishlist = () => {
  const nvg = useNavigate();
  const {data: wishlistdata,isLoading,refetch} = useGetWishlistProductQuery();
  const [removetowishlistapi] = usePostDeleteWishlistMutation();
  const dispatch = useDispatch();
  const globalvariable = useSelector((state) => state);


  // redirect to pdp page 
  const transfer = (productid) => {
    nvg(`/productdetails/${productid}`);
  };
  // redirect to pdp page 



  // Remove item from wishlist start here 
  const removewishlist = async (data) => {
    const wishlist_value = {
      product_id: data.product_id == null ? null : data.product_id._id,
      item_or_variant: data.product_id == null ? "variant" : "item",
      product_variant_id:
        data.product_id == null ? data.product_variant_id._id : null,
    };

    const response = await removetowishlistapi(wishlist_value);
    if (response.data.status == "successfully") {
      dispatch(addwishlist(globalvariable.wishlist - 1));
      refetch();
    }
  };
  // Remove item from wishlist end here 



  return isLoading == true ? (
    <></>
  ) : (
    <>
      <Header />

      {/* breadcrumb start */}
      <div className="breadcrumb-main marginfromtop" style={{backgroundColor:"#f9f9f9"}}>
        <div className="container m-0">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-contain">
                <div>
                  <ul>
                    <li>
                      <a href="/">home</a>
                    </li>
                    {/* <li><i className="fa fa-angle-double-right" /></li> */}
                    <li style={{ fontSize: "12px" }}>&gt;</li>
                    <li>
                      <a href="javascript:void(0)">Wishlist</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb End */}
      {/* section start */}
      <section
        className="section-big-pt-space ratio_asos"
        style={{ background: "#f9f9f9", minHeight: "100vh" }}
      >
        <div className="collection-wrapper">
          <div className="custom-container">
            <div className="row">
              <div className="collection-content col">
                <div className="page-main-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="collection-product-wrapper">
                        <div className="product-top-filter">
                          <div className="row">
                            <div className="col-12">
                              <div className="product-filter-content"></div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrapper-grid product">
                          <div
                            className="row removepadding"
                            style={{ gap: "7px" }}
                          >
                            {wishlistdata?.data?.[0] ? (
                              wishlistdata.data.map((item, index) => (
                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                  <div
                                    className="bg-white"
                                    style={{ margin: "3px 4px" }}
                                  >
                                    <div className="product-imgbox">
                                      <div className="product-front">
                                        <button
                                          type="button"
                                          className="btn fixedhight"
                                          style={{
                                            width: "100%",
                                            position: "relative",
                                          }}
                                        >
                                          {" "}
                                          <img
                                            src={`http://localhost:8000/uploads/images/${
                                              item.product_id != null
                                                ? item?.product_id
                                                    .product_image1
                                                : item?.product_variant_id
                                                    .product_image1
                                            }`}
                                            onClick={() => {
                                              transfer(
                                                item.product_id == null
                                                  ? item.product_variant_id
                                                      .product_id
                                                  : item.product_id._id
                                              );
                                            }}
                                            className="img-fluid  "
                                            alt="product"
                                          />{" "}
                                          <span
                                            style={{
                                              position: "absolute",
                                              right: "12px",
                                              top: "8px",
                                              display: "inline-block",
                                              zIndex: 56,
                                            }}
                                            onClick={() => {
                                              removewishlist(item);
                                            }}
                                          >
                                            {" "}
                                            <MdOutlineDeleteOutline
                                              size={25}
                                              color="#333"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="product-detail detail-center detail-inverse">
                                      <div className="detail-title">
                                        <div className="detail-left">
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "center",
                                            }}
                                          >
                                            {" "}
                                            <button
                                              type="button"
                                              className="btn"
                                              onClick={() => {
                                                transfer(
                                                  item.product_id == null
                                                    ? item.product_variant_id
                                                        .product_id
                                                    : item.product_id._id
                                                );
                                              }}
                                            >
                                              <h6
                                                className="price-title"
                                                style={{
                                                  fontSize: "12px",
                                                  fontWeight: "600",
                                                }}
                                              >
                                                {item?.product_name}
                                              </h6>{" "}
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          className="detail-right"
                                          style={{ width: "100%" }}
                                        >
                                          <div
                                            className="price"
                                            style={{ width: "100%" }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                color: "#000",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                              }}
                                            >
                                              {" "}
                                              ₹
                                              {item.product_id != null
                                                ? item?.product_id.selling_price
                                                : item?.product_variant_id
                                                    .selling_price}{" "}
                                              {item.product_id == null ? (
                                                item?.product_variant_id
                                                  ?.discount == 0 ? (
                                                  ""
                                                ) : (
                                                  <span
                                                    style={{
                                                      fontSize: "10px",
                                                      color: "#c1c1c1",
                                                      lineHeight: "20px",
                                                      textDecoration:
                                                        "line-through",
                                                      paddingLeft: "3px",
                                                      fontWeight: "400",
                                                    }}
                                                  >
                                                    ₹
                                                    {
                                                      item.product_variant_id
                                                        .mrp_price
                                                    }
                                                  </span>
                                                )
                                              ) : item?.product_id?.discount ==
                                                0 ? (
                                                ""
                                              ) : (
                                                <span
                                                  style={{
                                                    fontSize: "10px",
                                                    color: "#c1c1c1",
                                                    lineHeight: "20px",
                                                    textDecoration:
                                                      "line-through",
                                                    paddingLeft: "3px",
                                                    fontWeight: "400",
                                                  }}
                                                >
                                                  ₹{item.product_id.mrp_price}
                                                </span>
                                              )}
                                              {item.product_id == null ? (
                                                <span
                                                  style={{
                                                    fontSize: "10px",
                                                    color: "#230bb3",
                                                    lineHeight: "20px",
                                                    paddingLeft: "3px",
                                                    fontWeight: "400",
                                                  }}
                                                >
                                                  {`(${parseInt(
                                                    ((item.product_variant_id
                                                      .mrp_price -
                                                      item.product_variant_id
                                                        .selling_price) /
                                                      item.product_variant_id
                                                        .mrp_price) *
                                                      100
                                                  )} %off)`}
                                                </span>
                                              ) : (
                                                <span
                                                  style={{
                                                    fontSize: "10px",
                                                    color: "#230bb3",
                                                    lineHeight: "20px",
                                                    paddingLeft: "3px",
                                                    fontWeight: "400",
                                                  }}
                                                >
                                                  {`(${parseInt(
                                                    ((item.product_id
                                                      .mrp_price -
                                                      item.product_id
                                                        .selling_price) /
                                                      item.product_id
                                                        .mrp_price) *
                                                      100
                                                  )} %off)`}
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <h2
                                style={{
                                  textAlign: "center",
                                  paddingTop: "17px",
                                  fontWeight: "600",
                                  fontSize: "20px",
                                }}
                              >
                                Your Wishlist is empty!!
                              </h2>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section End */}

      {/* <Footer /> */}
    </>
  );
};

export default Wishlist;
