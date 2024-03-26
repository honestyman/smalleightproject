import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allCompanyList: [],
}

export const getCompanyList = createAsyncThunk(
  "all/companies",
  async (payload) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/companys/`);
    return res.data;
  }
)
export const postAnswer = createAsyncThunk(
  "post/answers",
  async (payload) => {
    // const username = payload.name;
    // const email = payload.email;
    // const secretKey = 'smallEight'; 
    // const token = jwt.sign({ username, email }, secretKey);
    // const headers = {
    //   'Authorization': `Bearer ${token}`
    // };
    console.log(payload);
    await axios.post(`${process.env.REACT_APP_API}/companys/answers`, payload)
      .then(res => {
        // console.log(res.data);
        // return res.data;
        // Handle the API response
      })
      .catch(error => {
        // Handle the error
      });
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
      // .addCase(loginAdmin.rejected, (state, action) => {
      //   state.message.status = 401;
      //   state.message.content = action.error.message;
      //   state.loginErrorMessage = 'パスワードが正しくありません。';
      // })
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