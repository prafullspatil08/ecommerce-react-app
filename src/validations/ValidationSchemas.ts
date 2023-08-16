import * as Yup from "yup";
export const requiredValidationMsg = (fieldName:any) => {
  return `${fieldName} is a required field`;
};
export const productFormValidationSchema = Yup.object({
  title: Yup.string().required(requiredValidationMsg('title')).min(1).max(100).trim().strict(),
  price: Yup.number().required(requiredValidationMsg('price')).min(1),
  category: Yup.string().required("Required"),
  description: Yup.string()
    .max(600, "Max 600 characters required")
    .required(requiredValidationMsg('description')).min(1),
});
