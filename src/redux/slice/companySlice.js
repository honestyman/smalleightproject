import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allCompanyList: [],
  matchCompanies: [],
  matchToolCompanies: [],
  oneCompany: {},
  selectedCompany: [],
  postSelectedOneCompanyResultMessage:"",
  postSelectedCompanysResultMessage:"",
  postSelectedMultifulCompanyResultMessage:"",
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
    const { name, email } = payload;
    const secretKey = process.env.REACT_APP_SECRETKEY;

    // Concatenate the username and email with a colon
    const tokenPayload = `${name}:${email}`;

    // Encode the token payload using Base64
    const encodedTokenPayload = btoa(tokenPayload);

    // Concatenate the encoded token payload with the secretKey
    const token = `${encodedTokenPayload}.${secretKey}`;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log(token);

    const res = await axios.post(
      `${process.env.REACT_APP_API}/companys/answers`,
      payload,
      { headers }
    );

    return res.data;
  }
)

export const postSelectedCompanys = createAsyncThunk(
  "post/selectedcompanies",
  async (payload) => {
    console.log(payload)
    const { name, email } = payload;
    const secretKey = process.env.REACT_APP_SECRETKEY;

    // Concatenate the username and email with a colon
    const tokenPayload = `${name}:${email}`;

    // Encode the token payload using Base64
    const encodedTokenPayload = btoa(tokenPayload);

    // Concatenate the encoded token payload with the secretKey
    const token = `${encodedTokenPayload}.${secretKey}`;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // console.log(token);

    const res = await axios.post(
      `${process.env.REACT_APP_API}/companys/selected_companise`,
      payload,
      { headers }
    );
    return res.data;
  }
)

export const postSelectedOneCompany = createAsyncThunk(
  "post/selectedonecompanies",
  async (payload) => {
    const { name, email } = payload;
    const secretKey = process.env.REACT_APP_SECRETKEY;

    // Concatenate the username and email with a colon
    const tokenPayload = `${name}:${email}`;

    // Encode the token payload using Base64
    const encodedTokenPayload = btoa(tokenPayload);

    // Concatenate the encoded token payload with the secretKey
    const token = `${encodedTokenPayload}.${secretKey}`;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const res = await axios.post(
      `${process.env.REACT_APP_API}/companys/add_selected_onecompany`,
      payload,
      { headers }
    );
    return res.data;
  }
)

export const postSelectedMultifulCompany = createAsyncThunk(
  "post/selectedmultifulcompanies",
  async (payload) => {
    const { name, email } = payload;
    const secretKey = process.env.REACT_APP_SECRETKEY;

    // Concatenate the username and email with a colon
    const tokenPayload = `${name}:${email}`;

    // Encode the token payload using Base64
    const encodedTokenPayload = btoa(tokenPayload);

    // Concatenate the encoded token payload with the secretKey
    const token = `${encodedTokenPayload}.${secretKey}`;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const res = await axios.post(
      `${process.env.REACT_APP_API}/companys/add_selected_multifulcompany`,
      payload,
      { headers }
    );
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
export const getOneCompany = createAsyncThunk(
  "one/company",
  async (Id) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/companys/onecompany`,{
      params:{
        id:Id
      }
    });
    return res.data;
  }
)
export const getSelectedCompany = createAsyncThunk(
  "one/selected_company",
  async (Ids) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/companys/selected_company`,{
      params:{
        ids:Ids
      }
    });
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
      .addCase(getOneCompany.fulfilled, (state, action) => {
        state.oneCompany = {...action.payload};
      })
      .addCase(getSelectedCompany.fulfilled, (state, action) => {
        state.selectedCompany = [...action.payload];
      })
      .addCase(postSelectedOneCompany.fulfilled, (state, action) => {
        state.postSelectedOneCompanyResultMessage = action.payload.message;
      })
      .addCase(postSelectedCompanys.fulfilled, (state, action) => {
        state.postSelectedCompanysResultMessage = action.payload.message;
      })
      .addCase(postSelectedMultifulCompany.fulfilled, (state, action) => {
        state.postSelectedMultifulCompanyResultMessage = action.payload.message;
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