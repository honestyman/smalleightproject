import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./slice/companySlice";
import columnReducer from "./slice/columnSlice";

export default configureStore({
  reducer: {
    companies: companyReducer,
    columns: columnReducer,
  }
});