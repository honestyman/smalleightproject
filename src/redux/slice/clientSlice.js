import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  clientList: [],
}

export const getClientList = createAsyncThunk(
  "all/clients",
  async (payload) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/clients/`);
    return res.data;
  }
)

export const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClientList.fulfilled, (state, action) => {
        state.clientList = [...action.payload];
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
export default clientSlice.reducer;