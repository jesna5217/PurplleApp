import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "./wishSlice";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
wishReducer:wishSlice,
cartReducer:cartSlice
    }
})
export default store;