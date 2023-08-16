import productSlice from "./PostSlice";
import ProductService from "../../services/apiService";
import { Product } from "../../models/product";
export const productAction = productSlice.actions;

// export const fetchAllProduct = () => {
//   return async (dispatch: any, getState: any) => {
//     const response = await ProductService.getAllProduct();
//     dispatch(productAction.setProducts(response));
//   };
// };

// export const fetchSingleProduct = (product_id: any) => {
//   return async (dispatch: any, getState: any) => {
//     const response: Product = await ProductService.getSingleProduct(product_id);
//     dispatch(productAction.setProduct(response));
//   };
// };
// export const addToCartProduct = (product: any) => {
//   return async (dispatch: any, getState: any) => {
//     const response = product;
//     dispatch(productAction.setCartItem(response));
//   };

// };
// export const saveProduct = (product: any) => {
//   return async (dispatch: any, getState: any) => {
//     const response = await ProductService.saveProduct(
//         product
//         );
//         console.log('response: ', response)
//     // dispatch(productAction.saveProduct(response));
//   };
// };
// 