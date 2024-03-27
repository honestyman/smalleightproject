import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allCompanyList: [],
  matchCompanies: [],
  matchToolCompanies: [],
}

export const getCompanyList = createAsyncThunk(
  "all/companies",
  async (payload) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/companys/`);
    return res.data;
  }
)
export const findingCompany = createAsyncThunk(
  "post/answers",
  async (payload) => {
    // const username = payload.name;
    // const email = payload.email;
    // const secretKey = 'smallEight'; 
    // const token = jwt.sign({ username, email }, secretKey);
    // const headers = {
    //   'Authorization': `Bearer ${token}`
    // };
    const res = await axios.post(`${process.env.REACT_APP_API}/companys/answers`, payload);
    return res.data;
  }
)
export const findingTool = createAsyncThunk(
  "post/answers_tool",
  async (payload) => {
    const res = await axios.post(`${process.env.REACT_APP_API}/companys/answers_tool`, payload);
    // console.log(111, res.data)
    return res.data;
  }
)
export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyList.fulfilled, (state, action) => {
        state.allCompanyList = [...action.payload];
      })
      .addCase(findingCompany.fulfilled, (state, action) => {
        state.matchCompanies = [...action.payload];
      })
      .addCase(findingTool.fulfilled, (state, action) => {
        state.matchToolCompanies = [...action.payload];
      })
      // .addCase(updatePassword.fulfilled, (state, action) => {
      //   state.userInfo = { ...action.payload.user };
      //   state.message.status = 200;
      //   state.message.content = action.payload.message;
      // })
      // .addCase(updatePassword.rejected, (state, action) => {
      //   state.message.status = 401;
      //   state.message.content = action.error.message;
      //   state.updatePasswordErrorMessage = 'パスワードが正しくありません。';
      // })
      // .addCase(loginWithToken.fulfilled, (state, action) => {
      //   state.userInfo = { ...action.payload.payload.user };
      //   state.token = action.payload.payload.token;
      //   localStorage.setItem("token", action.payload.payload.token);
      // })
  }
});

// export const { resetUserStore, resetMessage } = userSlice.actions;
export default companySlice.reducer;