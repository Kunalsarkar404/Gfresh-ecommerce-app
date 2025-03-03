import React, { useRef, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from "formik";
import { Categoryvalidationedit } from "../Validation/Categoryvalidationedit";
import {
  useGetLevelOneCategoryQuery,
  usePatchCategoryMutation,
} from "../../../store/api/categoryapi";
import { useGetSingleCategoryQuery } from "../../../store/api/categoryapi";
import { useGetAllAttributeQuery } from "../../../store/api/attributeapi";

const Editcategoryform = ({ id }) => {
  const { data, isLoading } = useGetSingleCategoryQuery(id);
  const [apiresponse, setapiresponse] = useState({});
  const imageInputRef = useRef(null);
  const navigate = useNavigate();

  const { data: levelOneCategoryData } = useGetLevelOneCategoryQuery();
  const { data: attributeData } = useGetAllAttributeQuery();

  const config = {
    height: "300px",
  };

  const [patchcategory] = usePatchCategoryMutation();

  const CategoryForm = async (value) => {
    try {
      const response = await patchcategory({ data: value, id: id });
      console.log("Update response:", response);

      if (!response.error) {
        if (response.data?.status === "successful") {
          navigate("/categorylist/2");
          window.location.reload();
        }
      } else {
        setapiresponse(response.error.data?.error || {});
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  if (isLoading) {
    return <div>Loading category data...</div>;
  }

  return (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      <Formik
        initialValues={{
          category_name: data?.data?.name || "",
          category_url: data?.slug || "",
          meta_keywords: data?.data?.meta_keywords || "",
          meta_title: data?.data?.metatitle || "",
          meta_description: data?.data?.metadesc || "",
          editor: data?.data?.desc || "",
          parent_category: data?.data?.parentcategory || [],
          status: data?.data?.status || "",
          category_image: data?.data?.banner || null,
        }}
        validationSchema={Categoryvalidationedit}
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

          // Only append category_image if it's a new file (not the existing banner string)
          if (values.category_image && typeof values.category_image !== 'string') {
            formdata.append("category_image", values.category_image);
          }

          CategoryForm(formdata);
        }}
      >
        {({ values, errors, handleSubmit, touched, setFieldValue }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
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
                    />
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
                      value={values.meta_description}
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
                        selectedValues={data?.parent || []}
                        options={levelOneCategoryData.data}
                        onSelect={(selectedList) => {
                          setFieldValue(
                            "parent_category",
                            selectedList.map((item) => item._id)
                          );
                        }}
                        onRemove={(selectedList) => {
                          setFieldValue(
                            "parent_category",
                            selectedList.map((item) => item._id)
                          );
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
                            typeof values.category_image === "string"
                              ? values.category_image
                              : URL.createObjectURL(values.category_image)
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
                  onClick={() => navigate("/categorylist/2")}
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
        )}
      </Formik>
    </div>
  );
};

export default Editcategoryform;