import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductArrayModel } from "../../models/product";
import axios from "axios";
import { toast } from "react-toastify";
const defaultURL = "http://localhost:3004/products/";

const initialProductState: ProductArrayModel = {
  all_products: [],
  loading: false,
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
  "product/save-product",
  async (params: any) => {
    try {
      const response = await axios.post(defaultURL, params);
      toast.success("Product Added Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return response?.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update-product",
  async (params: any) => {
    try {
      const response = await axios.put(`${defaultURL}/${params?.id}`, params);
      toast.success("Product Updated Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return response?.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete-product",
  async (id: any) => {
    try {
      const response = await axios.delete(`${defaultURL}/${id}`);
      toast.success("Product Delete Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return response?.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/fetch-product-by-id",
  async (id: any) => {
    try {
      const response = await axios.get(`${defaultURL}/${id}`);
      return response?.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

export const fetchAllProduct = createAsyncThunk(
  "product/fetch-all-Product",
  async () => {
    try {
      const response = await axios.get(defaultURL);
      return response?.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveProduct.pending, (state: any, action) => {
        state.loading = true;
      })
      .addCase(saveProduct.fulfilled, (state: any, action) => {
        state.loading = false;
      })
      .addCase(saveProduct.rejected, (state: any, action) => {
        state.loading = true;
      })
      .addCase(fetchAllProduct.pending, (state: any, action) => {
        state.loading = true;
      })
      .addCase(fetchAllProduct.fulfilled, (state: any, action) => {
        state.loading = false;
        state.all_products = action.payload;
      })
      .addCase(fetchAllProduct.rejected, (state: any, action) => {
        state.loading = false;
      })
      .addCase(fetchSingleProduct.pending, (state: any, action) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state: any, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state: any, action) => {
        state.loading = false;
      })
      .addCase(updateProduct.pending, (state: any, action) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state: any, action) => {
        state.loading = false;
      })
      .addCase(updateProduct.rejected, (state: any, action) => {
        state.loading = false;
      })
      .addCase(deleteProduct.pending, (state: any, action) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state: any, action) => {
        state.loading = false;
      })
      .addCase(deleteProduct.rejected, (state: any, action) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
