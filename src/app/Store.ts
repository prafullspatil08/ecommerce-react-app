import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/ProductSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import  cartSlice  from "./slices/CartSlice";
const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
