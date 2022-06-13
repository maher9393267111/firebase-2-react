import { configureStore } from "@reduxjs/toolkit";
//import categorySlice from "./category";
import globalSlice from "./global";

export default configureStore({
  reducer: {
    global: globalSlice,
   // product: productSlice,
   
  },
});