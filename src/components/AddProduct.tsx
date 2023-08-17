import { Field, Form, Formik } from "formik";
import { productFormValidationSchema } from "../utils/ValidationSchemas";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/Store";
import {
  fetchSingleProduct,
  saveProduct,
  updateProduct,
} from "../app/slices/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const AddProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const product = useSelector((state: any) => state?.product?.product);
  const initialValues = {
    title: product?.title ?? "",
    price: product?.price ?? 0,
    category: product?.category ?? "men's clothing",
    description: product?.description ?? "",
  };
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id));
    } else {
      dispatch(fetchSingleProduct(id));
    }
  }, [dispatch, id]);
  const handleChange = (field: any, value: any) => {
    field.onChange({ target: { name: field.name, value: value } });
  };

  const onSubmit = (values: any, { resetForm, validateForm }: any) => {
    var payload = values;
    if (id) {
      payload["id"] = id;
      payload["image"] = product.image;
      dispatch(updateProduct(payload))
        .unwrap()
        .then(() => {
          navigate("/products");
        })
        .catch();
      resetForm();
      validateForm();
    } else {
      payload["image"] =
        "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg";
      dispatch(saveProduct(payload));
      resetForm();
      validateForm();
    }
  };
  return (
    <div>
      <Formik
        initialTouched={true}
        onSubmit={onSubmit}
        validateOnBlur={true}
        validateOnMount={true}
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={productFormValidationSchema}
        enableReinitialize
      >
        {({ touched, errors, values, isValid, resetForm, validateForm }) => {
          return (
            <Form>
              <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-10 mx-auto">
                  <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
                      Add Product
                    </h1>
                  </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="title"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Title
                          </label>
                          <Field name="title">
                            {({ field, form }: any) => (
                              <>
                                <input
                                  type="text"
                                  id="title"
                                  name="title"
                                  value={field.value}
                                  onBlur={(e) => {
                                    form.setTouched({
                                      ...form.touched,
                                      title: true,
                                    });
                                  }}
                                  onChange={(e) =>
                                    handleChange(field, e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryy-500 focus:bg-white focus:ring-2 focus:ring-primaryy-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {form.touched.title &&
                                  Boolean(form.errors.title) && (
                                    <span className="text-red-500 text-sm capitalize">
                                      {form.touched.title && form.errors.title}
                                    </span>
                                  )}
                              </>
                            )}
                          </Field>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="price"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Price
                          </label>
                          <Field name="price">
                            {({ field, form }: any) => (
                              <>
                                {" "}
                                <input
                                  type="number"
                                  id="price"
                                  name="price"
                                  value={field.value}
                                  onChange={(e) =>
                                    handleChange(field, e.target.value)
                                  }
                                  onBlur={(e) => {
                                    form.setTouched({
                                      ...form.touched,
                                      price: true,
                                    });
                                  }}
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryy-500 focus:bg-white focus:ring-2 focus:ring-primaryy-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {form.touched.price &&
                                  Boolean(form.errors.price) && (
                                    <span className="text-red-500 text-sm capitalize">
                                      {form.touched.price && form.errors.price}
                                    </span>
                                  )}
                              </>
                            )}
                          </Field>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="category"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Category
                          </label>
                          <Field name="category">
                            {({ field, form }: any) => (
                              <>
                                <select
                                  onChange={(e) =>
                                    handleChange(field, e.target.value)
                                  }
                                  onBlur={(e) => {
                                    form.setTouched({
                                      ...form.touched,
                                      category: true,
                                    });
                                  }}
                                  value={field.value}
                                  className="block p-2 capitalize focus:border-none text-gray-800 w-full text-sm"
                                >
                                  <option value="men's clothing">
                                    men's clothing
                                  </option>
                                  <option value="jewelery">jewelery</option>
                                  <option value="electronics">
                                    electronics
                                  </option>
                                  <option value="women's clothing">
                                    women's clothing
                                  </option>
                                </select>
                                {form.touched.category &&
                                  Boolean(form.errors.category) && (
                                    <span className="text-red-500 text-sm capitalize">
                                      {form.touched.category &&
                                        form.errors.category}
                                    </span>
                                  )}
                              </>
                            )}
                          </Field>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="description"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Description
                          </label>
                          <Field name="description">
                            {({ field, form }: any) => (
                              <>
                                <textarea
                                  id="description"
                                  name="description"
                                  onChange={(e) =>
                                    handleChange(field, e.target.value)
                                  }
                                  onBlur={(e) => {
                                    form.setTouched({
                                      ...form.touched,
                                      description: true,
                                    });
                                  }}
                                  value={field.value}
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primaryy-500 focus:bg-white focus:ring-2 focus:ring-primaryy-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                />
                                {form.touched.description &&
                                  Boolean(form.errors.description) && (
                                    <span className="text-red-500 text-sm capitalize">
                                      {form.touched.description &&
                                        form.errors.description}
                                    </span>
                                  )}
                              </>
                            )}
                          </Field>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button
                          type="submit"
                          className="flex mx-auto text-white bg-primaryy-500 border-0 py-2 px-8 focus:outline-none hover:bg-primaryy-600 rounded text-lg"
                        >
                          Save Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddProduct;
