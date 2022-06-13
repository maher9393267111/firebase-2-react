import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "product",
  initialState: {
allproducts:[],
name:'',
show:false,


   
  },

  reducers: {
    fetch_products: (state, action) => {
      state.allproducts = action.payload;
    },
},


});

// Action creators are generated for each case reducer function
export const {
fetch_products
  


 
} = globalSlice.actions;

export default globalSlice.reducer;