import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./slice/companySlice";

export default configureStore({
  reducer: {
    companies: companyReducer
  }
});