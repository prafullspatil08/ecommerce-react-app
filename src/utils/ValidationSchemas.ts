import * as Yup from "yup";
export const requiredValidationMsg = (fieldName:any) => {
  return `${fieldName} is a required field`;
};
export const productFormValidationSchema = Yup.object({
  title: Yup.string().required(requiredValidationMsg('Title')).min(1).max(100).trim('White space not allowed').strict(),
  price: Yup.number().required(requiredValidationMsg('Price')).min(1),
  category: Yup.string().required("Required"),
  description: Yup.string()
    .max(600, "Max 600 characters required")
    .required(requiredValidationMsg('Description')).min(1),
});
