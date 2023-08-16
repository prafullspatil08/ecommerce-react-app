import * as Yup from "yup";
export const productFormValidationSchema = Yup.object({
  title: Yup.string().required("Required").max(30),
  price: Yup.number().required("Required"),
  category: Yup.string().required("Required"),
  description: Yup.string()
    .max(600, "Max 600 characters required")
    .required("Required"),
});
