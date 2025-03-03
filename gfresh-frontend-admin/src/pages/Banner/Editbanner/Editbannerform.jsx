import React, { useRef, useState} from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from "formik";
import { Bannervalidationedit } from "../Validation/Bannervalidationedit";
import { useGetSingleBannerQuery, usePatchBannerMutation } from "../../../store/api/bannerapi";

const Editbannerform = ({ id }) => {
  const { data, isLoading } = useGetSingleBannerQuery(id);
  const imageInputRef = useRef(null);
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const [patchBanner] = usePatchBannerMutation();

  const config = { height: "300px" };

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      setUploading(true);
      setError(null);
      
      const formData = new FormData();
      formData.append("banner_name", values.banner_name);
      formData.append("banner_alt", values.banner_alt);
      formData.append("banner_link", values.banner_link || "");
      formData.append("status", values.status);
      formData.append("banner_type", values.banner_type);
      formData.append("description", values.description);
      
      // Only append banner if it's a File object (new upload)
      if (values.banner instanceof File) {
        formData.append("banner", values.banner);
      }

      console.log("Submitting form data:", {
        banner_name: values.banner_name,
        banner_alt: values.banner_alt,
        banner_link: values.banner_link,
        status: values.status,
        banner_type: values.banner_type,
        newImage: values.banner instanceof File
      });

      const response = await patchBanner({ data: formData, id: id }).unwrap();
      
      if (response?.status === "successful") {
        navigate("/bannerlist/1");
      } else {
        setError(response?.message || "Failed to update banner");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setError(error.message || "An error occurred during update");
    } finally {
      setUploading(false);
      setSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="container-fluid py-5 text-center">Loading...</div>;
  }

  // Handle case where data might not be available yet
  if (!data || !data.data) {
    return <div className="container-fluid py-5 text-center">No banner data found.</div>;
  }

  return (
    <div className="container-fluid pb-4 pt-3 px-2 bg-white">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      <Formik
        initialValues={{
          banner_name: data.data.banner_name || "",
          banner_alt: data.data.banner_alt || "",
          banner_type: data.data.banner_type || "",
          banner_link: data.data.banner_link || "",
          description: data.data.description || "",
          status: data.data.status || "",
          banner: null, // Initially null, will use the URL from data
        }}
        validationSchema={Bannervalidationedit}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        {({ values, errors, touched, setFieldValue, isSubmitting }) => (
          <Form autoComplete="off">
            <div
              className="row bg-white pb-4 rounded"
              style={{ border: "1px solid #E0E0E0", margin: "10px 0px", position: "relative" }}
            >
              {/* Banner Name */}
              <div className="col-md-6 px-2 pt-4">
                <label className="form-label">Banner Name <span className="text-danger">*</span></label>
                <Field type="text" name="banner_name" className="form-control" placeholder="Banner Name" />
                {errors.banner_name && touched.banner_name && <p className="text-danger">{errors.banner_name}</p>}
              </div>

              {/* Banner Alt */}
              <div className="col-md-6 px-2 pt-4">
                <label className="form-label">Banner Alt <span className="text-danger">*</span></label>
                <Field type="text" name="banner_alt" className="form-control" placeholder="Banner Alt" />
                {errors.banner_alt && touched.banner_alt && <p className="text-danger">{errors.banner_alt}</p>}
              </div>

              {/* Banner Link */}
              <div className="col-md-6 px-2 pt-3">
                <label className="form-label">Banner Link</label>
                <Field type="text" name="banner_link" className="form-control" placeholder="Enter Banner Link" />
              </div>

              {/* Banner Type */}
              <div className="col-md-6 px-2 pt-3">
                <label className="form-label">Banner Type <span className="text-danger">*</span></label>
                <Field as="select" name="banner_type" className="form-select">
                  <option value="">Select Type</option>
                  <option value="Banner">Banner</option>
                  <option value="Slider">Slider</option>
                </Field>
                {errors.banner_type && touched.banner_type && <p className="text-danger">{errors.banner_type}</p>}
              </div>

              {/* Status */}
              <div className="col-md-6 px-2 pt-3">
                <label className="form-label">Status <span className="text-danger">*</span></label>
                <Field as="select" name="status" className="form-select">
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Field>
                {errors.status && touched.status && <p className="text-danger">{errors.status}</p>}
              </div>

              {/* Image Upload */}
              <div className="col-12 pt-3">
                <label className="form-label">Image <span className="text-danger">*</span></label>
                <div className="border d-flex justify-content-center">
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      ref={imageInputRef}
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                          setFieldValue("banner", file);
                        }
                      }}
                    />
                    <img
                      src={
                        values.banner instanceof File 
                          ? URL.createObjectURL(values.banner) 
                          : data.data.banner.includes('http') 
                            ? data.data.banner 
                            : `http://localhost:8000/uploads/images/${data.data.banner}`
                      }
                      alt="Banner Preview"
                      width="100%"
                      height="200px"
                      onClick={() => imageInputRef.current.click()}
                      style={{ cursor: "pointer" }}
                    />
                    {values.banner instanceof File && (
                      <div className="mt-2 text-center">
                        <span>{values.banner.name}</span>
                        <button 
                          type="button" 
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => setFieldValue("banner", null)}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {errors.banner && touched.banner && <p className="text-danger">{errors.banner}</p>}
              </div>

              {/* Description */}
              <div className="col-12 px-2 pt-3">
                <label className="form-label">Description <span className="text-danger">*</span></label>
                <JoditEditor
                  config={config}
                  value={values.description}
                  onChange={(content) => setFieldValue("description", content)}
                />
                {errors.description && touched.description && <p className="text-danger">{errors.description}</p>}
              </div>

              {/* Action Buttons */}
              <div className="col-12 py-5 px-4 d-flex justify-content-end" style={{ gap: "4px" }}>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => navigate("/bannerlist/1")}
                  disabled={uploading || isSubmitting}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={uploading || isSubmitting}
                >
                  {uploading ? 'Updating...' : 'Save'}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Editbannerform;