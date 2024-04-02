import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allColumnList: [],
  allColumnCategoryList: [],
  oneColumnData: {},
}

export const getColumnList = createAsyncThunk(
  "all/columns",
  async (payload) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/columns/`);
    return res.data;
  }
)
export const getColumnCategoryList = createAsyncThunk(
  "all/columns_category",
  async (payload) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/columns/allcategory`);
    return res.data;
  }
)
export const getOneColumn = createAsyncThunk(
  "one/column",
  async (Id) => {
    console.log("--------",Id);
    const res = await axios.get(`${process.env.REACT_APP_API}/columns/onecolumn`,{
      params:{
        id:Id
      }
    });
    console.log(Id, res.data)
    return res.data;
  }
)

export const columnSlice = createSlice({
  name: 'columns',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(getColumnList.fulfilled, (state, action) => {
        state.allColumnList = [...action.payload];
      })
      .addCase(getColumnCategoryList.fulfilled, (state, action) => {
        state.allColumnCategoryList = [...action.payload];
      })
      .addCase(getOneColumn.fulfilled, (state, action) => {
        state.oneColumnData = {...action.payload};
      })
  }
});

// export const { resetUserStore, resetMessage } = userSlice.actions;
export default columnSlice.reducer;