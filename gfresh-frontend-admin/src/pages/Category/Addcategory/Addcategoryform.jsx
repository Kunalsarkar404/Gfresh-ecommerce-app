import React, { useRef, useState, useEffect } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import JoditEditor from "jodit-react";
import { Field, Form, Formik, useFormikContext } from "formik";
import img3 from "../../../assets/selectbanner.webp";
import { Categoryvalidation } from "../Validation/Categoryvalidation";
import {
  useGetLevelOneCategoryQuery,
  usePostCategoryMutation,
} from "../../../store/api/categoryapi";
import { useGetAllAttributeQuery } from "../../../store/api/attributeapi";

// Create a separate component to handle the URL generation effect
const AutoUrlGenerator = () => {
  const { values, setFieldValue } = useFormikContext();
  const { data: levelOneCategoryData } = useGetLevelOneCategoryQuery();

  const generateCategoryUrl = (metaTitle, parentCategories) => {
    if (!metaTitle) return '';

    const formattedMetaTitle = metaTitle.toLowerCase().replace(/\s+/g, '_');
    
    if (!parentCategories || parentCategories.length === 0) {
      return formattedMetaTitle;
    }

    if (levelOneCategoryData?.data) {
      const parentId = parentCategories[0];
      const parent = levelOneCategoryData.data.find(cat => cat._id === parentId);
      
      if (parent) {
        // Format parent name and combine with meta title
        const formattedParentName = parent.name;
        return `${formattedParentName}/${formattedMetaTitle}`;
      }
    }
    return formattedMetaTitle;
  };

  // Move the useEffect to this component
  useEffect(() => {
    if (values.meta_title) {
      const generatedUrl = generateCategoryUrl(values.meta_title, values.parent_category);
      setFieldValue("category_url", generatedUrl);
    }
  }, [values.meta_title, values.parent_category, setFieldValue, levelOneCategoryData]);

  return null; // This component doesn't render anything
};

const Addcategoryform = () => {
  const imageInputRef = useRef(null);
  const navigate = useNavigate();
  const [apiresponse, setapiresponse] = useState({});
  const [selectedParentCategories, setSelectedParentCategories] = useState([]);

  const { data: levelOneCategoryData } = useGetLevelOneCategoryQuery();
  const { data: attributeData, isLoading } = useGetAllAttributeQuery();

  const config = {
    height: "300px",
  };

  const [postcategory] = usePostCategoryMutation();

  const CategoryForm = async (value) => {
    try {
      const response = await postcategory(value);
      console.log("Response:", response);
      
      if (!response.error) {
        if (response.data?.status === "successful") {
          navigate("/categorylist/1");
          window.location.reload();
        }
      } else {
        setapiresponse(response.error.data?.error || {});
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      <Formik
        initialValues={{
          category_name: "",
          category_url: "",
          meta_keywords: "",
          meta_title: "",
          meta_description: "",
          editor: "",
          parent_category: [],
          status: "",
          category_image: null,
        }}
        validationSchema={Categoryvalidation}
        onSubmit={(values) => {
          const formdata = new FormData();
          formdata.append("category_name", values.category_name);
          formdata.append("category_url", values.category_url);
          formdata.append("meta_keywords", values.meta_keywords);
          formdata.append("meta_title", values.meta_title);
          formdata.append("meta_description", values.meta_description);
          formdata.append("editor", values.editor);
          
          // Handle parent category
          if (values.parent_category && values.parent_category.length > 0) {
            formdata.append("parent_category", JSON.stringify(values.parent_category));
          }
          
          formdata.append("status", values.status);
          
          // Handle file upload
          if (values.category_image) {
            formdata.append("category_image", values.category_image);
          }

          CategoryForm(formdata);
        }}
      >
        {({ values, errors, handleSubmit, touched, setFieldValue }) => {
          return (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              {/* This component handles the URL generation effect */}
              <AutoUrlGenerator />
              
              <div
                className="row bg-white pb-4 round"
                style={{
                  border: "1px solid #E0E0E0",
                  margin: "10px 0px",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div className="col-md-6 px-2 pt-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="" className="form-label">
                        Category Name <span style={{ color: "red" }}>*</span>
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <Field
                        type="text"
                        name="category_name"
                        className="form-control"
                        placeholder="Category Name"
                        value={values.category_name}
                      />
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                      {apiresponse.name ? (
                        <p style={{ color: "red" }}>
                          {apiresponse.name.message}
                        </p>
                      ) : null}
                      {errors.category_name && touched.category_name ? (
                        <p style={{ color: "red" }}>{errors.category_name}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-2 pt-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="" className="form-label">
                        Category Url <span style={{ color: "red" }}>*</span>
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <Field
                        name="category_url"
                        type="text"
                        className="form-control"
                        placeholder="Category Url"
                        value={values.category_url}
                        disabled
                      />
                      <small className="text-muted">
                        {values.parent_category && values.parent_category.length > 0 
                          ? "Auto-generated from meta title and parent category" 
                          : "Auto-generated from meta title"}
                      </small>
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                      {apiresponse.url ? (
                        <p style={{ color: "red" }}>
                          {apiresponse.url.message}
                        </p>
                      ) : null}

                      {errors.category_url && touched.category_url ? (
                        <p style={{ color: "red" }}>{errors.category_url}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="col-md-6 px-2 pt-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="" className="form-label">
                        Meta Title <span style={{ color: "red" }}>*</span>{" "}
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <Field
                        name="meta_title"
                        type="text"
                        className="form-control"
                        placeholder="Meta Title"
                        value={values.meta_title}
                      />
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                      {errors.meta_title && touched.meta_title ? (
                        <p style={{ color: "red" }}>{errors.meta_title}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="col-md-6 px-2 pt-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="" className="form-label">
                        Meta Keywords <span style={{ color: "red" }}>*</span>{" "}
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <Field
                        name="meta_keywords"
                        type="text"
                        className="form-control"
                        placeholder="Meta Keywords"
                        value={values.meta_keywords}
                      />
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                      {errors.meta_keywords && touched.meta_keywords ? (
                        <p style={{ color: "red" }}>{errors.meta_keywords}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="col-md-6 px-2 pt-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="" className="form-label ">
                        Meta Description <span style={{ color: "red" }}>*</span>{" "}
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <Field
                        name="meta_description"
                        type="text"
                        className="form-control"
                        placeholder="Meta Description"
                      />
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                      {errors.meta_description && touched.meta_description ? (
                        <p style={{ color: "red" }}>{errors.meta_description}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-2 pt-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="" className="form-label">
                        Category Status <span style={{ color: "red" }}>*</span>
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <Field as="select" name="status" className="form-select">
                        <option value="" disabled>
                          Select Status
                        </option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </Field>
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                      {errors.status && touched.status ? (
                        <p style={{ color: "red" }}>{errors.status}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="col-md-12 px-2 pt-3">
                  <div className="row">
                    <div className="col-lg-2">
                      <label htmlFor="" className="form-label ">
                        Parent Category <span style={{ color: "red" }}>*</span>{" "}
                      </label>
                    </div>
                    <div className="col-lg-10">
                      {levelOneCategoryData?.data ? (
                        <Multiselect
                          options={levelOneCategoryData.data}
                          onSelect={(selectedList) => {
                            const selectedIds = selectedList.map((item) => item._id);
                            setFieldValue("parent_category", selectedIds);
                            setSelectedParentCategories(selectedList);
                          }}
                          onRemove={(selectedList) => {
                            const selectedIds = selectedList.map((item) => item._id);
                            setFieldValue("parent_category", selectedIds);
                            setSelectedParentCategories(selectedList);
                          }}
                          displayValue="name"
                        />
                      ) : (
                        <p>Loading categories...</p>
                      )}
                    </div>
                    <div className="offset-lg-2 col-lg-10">
                      {errors.parent_category && touched.parent_category ? (
                        <p style={{ color: "red" }}>{errors.parent_category}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Rest of the component remains the same */}
                <div className="col-12 pt-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="" className="form-label ">
                        Category Banner <span style={{ color: "red" }}>*</span>{" "}
                      </label>
                    </div>
                    <div className="col-12">
                      <div className="border d-flex justify-content-center">
                        <button
                          type="button"
                          style={{
                            border: "none",
                            outline: "none",
                          }}
                        >
                          <input
                            type="file"
                            name="category_image"
                            style={{ display: "none" }}
                            ref={imageInputRef}
                            accept="image/*"
                            onChange={(event) => {
                              setFieldValue(
                                "category_image",
                                event.currentTarget.files[0]
                              );
                            }}
                          />
                          <img
                            src={
                              values.category_image
                                ? URL.createObjectURL(values.category_image)
                                : img3
                            }
                            alt="Category Banner"
                            width="100%"
                            height="200px"
                            onClick={() => {
                              imageInputRef.current.click();
                            }}
                            style={{ cursor: "pointer" }}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      {errors.category_image && touched.category_image ? (
                        <p style={{ color: "red" }}>{errors.category_image}</p>
                      ) : null}
                      {apiresponse.message === "Category image is required" && (
                        <p style={{ color: "red" }}>Category image is required</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-12 px-2 pt-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="" className="form-label ">
                        Category Description{" "}
                        <span style={{ color: "red" }}>*</span>{" "}
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <JoditEditor
                        config={config}
                        value={values.editor}
                        onChange={(content) => setFieldValue("editor", content)}
                      />
                    </div>
                    <div className="col-lg-12">
                      {errors.editor && touched.editor ? (
                        <p style={{ color: "red" }}>{errors.editor}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div
                  className="col-12 py-5 px-4 d-flex justify-content-end"
                  style={{ gap: "4px" }}
                >
                  <button 
                    type="button" 
                    className="btn4" 
                    onClick={() => navigate("/categorylist/1")}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn5"
                    style={{ background: "#0e5da9" }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  );
};

export default Addcategoryform;