import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allNewsList: [],
  // allColumnCategoryList: [],
  oneNewsData: {},
}

export const getNewsList = createAsyncThunk(
  "all/news",
  async (payload) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/news/`);
    return res.data;
  }
)
// export const getColumnCategoryList = createAsyncThunk(
//   "all/columns_category",
//   async (payload) => {
//     const res = await axios.get(`${process.env.REACT_APP_API}/columns/allcategory`);
//     return res.data;
//   }
// )
export const getOneNews = createAsyncThunk(
  "one/news",
  async (Id) => {
    console.log("--------",Id);
    const res = await axios.get(`${process.env.REACT_APP_API}/news/onenews`,{
      params:{
        id:Id
      }
    });
    console.log(Id, res.data)
    return res.data;
  }
)

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsList.fulfilled, (state, action) => {
        state.allNewsList = [...action.payload];
      })
      // .addCase(getColumnCategoryList.fulfilled, (state, action) => {
      //   state.allColumnCategoryList = [...action.payload];
      // })
      .addCase(getOneNews.fulfilled, (state, action) => {
        state.oneNewsData = {...action.payload};
      })
  }
});

// export const { resetUserStore, resetMessage } = userSlice.actions;
export default newsSlice.reducer;