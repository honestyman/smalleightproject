import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allColumnList: [],
  oneColumnData: {},
}

export const getColumnList = createAsyncThunk(
  "all/columns",
  async (payload) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/columns/`);
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
      .addCase(getOneColumn.fulfilled, (state, action) => {
        state.oneColumnData = {...action.payload};
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
export default columnSlice.reducer;