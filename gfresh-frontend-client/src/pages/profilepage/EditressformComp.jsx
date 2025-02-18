import { address } from "../../Validation/address";
import { Field, Formik, Form } from "formik";
import { usePatchaddressMutation } from "../../store/api/addressapi";
const EditressformComp = ({ addaddress, item,closefun,reload }) => {

  const [editaddress] = usePatchaddressMutation()
const editfun = async (values,setFieldError) =>{
 const res = await editaddress({id:item._id,data:values});
 if(res.data){
  closefun()  
  reload();
 }
}

  return (
    <Formik
      initialValues={{
        first_name: item.first_name,
        last_name: item.last_name,
        mobile: item.mobile,
        email: item.email,
        address1: item.address1,
        address2: item.address2,
        country: item.country,
        state: item.state,
        city: item.city,
        pincode: item.pincode,
      }}
      validationSchema={address}
      onSubmit={(values,{setFieldError}) => {
        

        editfun(values,setFieldError);
      }}
    >
      {({ values, errors, handleSubmit, touched, setFieldValue, setFieldError }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          {addaddress == true ? (
            <div className="container addressbox">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                    <h6 className="mb-3 mt-3" style={{ color: "#059fe2" }}>
                      Edit Address
                    </h6>
                    <h6 className="mb-3 mt-3" onClick={()=>{closefun()}} style={{ color: "#059fe2",cursor:'pointer' }}>
                      Close
                    </h6>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="name"
                        >
                          First Name
                        </label>
                        <Field
                          type="text"
                          name="first_name"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="First Name"
                          value={values.first_name}
                        />
                        <div className="error">
                          {errors.first_name && touched.first_name ? (
                            <p style={{ color: "red" }}>{errors.first_name}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="name"
                        >
                          Last Name
                        </label>
                        <Field
                          name="last_name"
                          type="text"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="Last Name"
                          value={values.last_name}
                        />
                        <div className="error">
                          {errors.last_name && touched.last_name ? (
                            <p style={{ color: "red" }}>{errors.last_name}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="name"
                        >
                          Mobile No.
                        </label>
                        <Field
                          name="mobile"
                          type="number"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="Mobile. No"
                          value={values.mobile}
                        />
                        <div className="error">
                          {errors.mobile && touched.mobile ? (
                            <p style={{ color: "red" }}>{errors.mobile}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="name"
                        >
                          Email ID
                        </label>
                        <Field
                          name="email"
                          type="email"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="Email ID"
                          value={values.email}
                        />
                        <div className="error">
                          {errors.email && touched.email ? (
                            <p style={{ color: "red" }}>{errors.email}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="review"
                        >
                          Address 1
                        </label>
                        <Field
                          name="address1"
                          type="text"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="Address 1"
                          value={values.address1}
                        />
                        <div className="error">
                          {errors.address1 && touched.address1 ? (
                            <p style={{ color: "red" }}>{errors.address1}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="review"
                        >
                          Address 2
                        </label>
                        <Field
                          name="address2"
                          type="text"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="Address 2"
                          value={values.address2}
                        />
                        <div className="error">
                          {errors.address2 && touched.address2 ? (
                            <p style={{ color: "red" }}>{errors.address2}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="review"
                        >
                          Country
                        </label>

<Field
                          name="country"
                          type="text"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="Country"
                          
                          value={values.country}
                        />







                         {/* <Select  onChange={(e)=>{setstatelist(e.id);setFieldValue("country",e.sortname)}} defaultValue={defaultValue} style={{fontSize:'11px'}} options={updatedCountries}  /> */}
                        <div className="error">
                          {errors.country && touched.country ? (
                            <p style={{ color: "red" }}>{errors.country}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="review"
                        >
                          State
                        </label>
                         <Field
                          name="state"
                          type="text"
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="State"
                          value={values.state}
                        />
                        <div className="error">
                          {errors.state && touched.state ? (
                            <p style={{ color: "red" }}>{errors.state}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="review"
                        >
                          City
                        </label>
                          <Field
                          style={{fontSize:'12px'}}
                          name="city"
                          type="text"
                          className="form-control"
                          placeholder="City"
                          value={values.city}
                          
                        />
                                                 {/* <Select defaultValue={defautrealcity} onChange={(e)=>{setFieldValue("city",e.label)}} style={{fontSize:'11px'}} options={citylist == "" ? defaultrelste ? updatedCities(defaultrelste.value): [] : updatedCities(citylist)}   /> */}
                        <div className="error">
                          {errors.city && touched.city ? (
                            <p style={{ color: "red" }}>{errors.city}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="profile-head">
                      <div className="form-group">
                        <label
                          style={{ fontWeight: "500", margin: "0px",fontSize:'12px' }}
                          htmlFor="dob"
                        >
                          Pincode
                        </label>
                       
                         <Field
                          name="pincode"
                          type="tel"
                          minLength={6}
                          maxLength={6}
                          style={{fontSize:'12px'}}
                          className="form-control"
                          placeholder="Pincode"
                          value={values.pincode}
                        />
                        <div className="error">
                          {errors.pincode && touched.pincode ? (
                            <p style={{ color: "red" }}>{errors.pincode}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="profile-head">
                      <br />
                      <br />
                      <div
                        className="herobtn"
                        style={{ marginBottom: "20px", marginTop: "0px" }}
                      >
                        <span>
                          <a
                            href=""
                            style={{
                              paddingRight: "20px",
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#230BB3",
                            }}
                          >
                            Cancel
                          </a>
                        </span>
                        <input
                          style={{ outline: "none", padding: "5px 9px",fontSize:'12px' }}
                          type="Submit"
                          className="profile-edit-btn"
                          name="btnAddMore"
                          value="Update"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </Form>
      )}
    </Formik>
  );
};

export default EditressformComp;
