import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, ProductArrayModel } from "../../models/product";
import ProductService from "../../services/apiService";
import axios from "axios";
const defaultURL="http://localhost:3004/products/"

const initialProductState: ProductArrayModel = {
  all_products: [],
  loading: false,
  cartItem: [],
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  },
};

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async (params: any) => {
    try {
      const response = await axios.post(
        defaultURL,
        params
      );
      return response?.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);


export const fetchSingleProduct = createAsyncThunk(
  "product/getSingleProduct", async (id:number)=>{
    try{
      const response = await axios.get(`defaultURL/${id}`);
      return response?.data
    }
    catch(error:any){
      console.error(error);
    }
  }
)

export const fetchAllProduct = createAsyncThunk(
  "product/getAllProduct", async (param:any)=>{
    try{
      const response = await axios.get(defaultURL);
      return response?.data
    }
    catch(error:any){
      console.error(error);
    }
  }
)

export const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    setCartItem(state, action: PayloadAction<any>) {
      state.cartItem = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state:any,action:any)=>{
      state.loading = true;
    })
    .addCase(saveProduct.fulfilled, (state:any,action:any)=>{
      state.loading = false;

    })
    .addCase(saveProduct.rejected, (state:any,action:any)=>{
      state.loading = true;
    })
    .addCase(fetchAllProduct.pending, (state:any, action:any)=>{
      state.loading = true;
    })
    .addCase(fetchAllProduct.fulfilled, (state:any, action:any)=>{
      state.loading = false;
      state.all_products = action.payload;
    })
    .addCase(fetchAllProduct.rejected, (state:any, action:any)=>{
      state.loading = false;
    })
    .addCase(fetchSingleProduct.pending, (state:any, action:any)=>{
      state.loading = true;
    })
    .addCase(fetchSingleProduct.fulfilled, (state:any, action:any)=>{
      state.loading = false;
      state.product= action.payload
    })
    .addCase(fetchSingleProduct.rejected, (state:any, action:any)=>{
      state.loading = false;
    })
  },
});

export default productSlice;
