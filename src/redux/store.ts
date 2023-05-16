import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
