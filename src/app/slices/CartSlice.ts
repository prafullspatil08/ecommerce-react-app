import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartArrayModel } from "../../models/cart";

const initialCartState: CartArrayModel = {
  cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCartProduct:(state:any, action:PayloadAction<any>) =>{
            state.cartItems = action?.payload;
          },
    },
})

export const {addToCartProduct} = cartSlice.actions;
export default cartSlice.reducer;