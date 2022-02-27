import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { toast } from "react-toastify";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await userApi.getAll();
  if (response.result) return response.result;
  return [];
});

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (data, thunkAPI) => {
    const response = await userApi.delete(data);
    if (response.result.success) {
      toast.success("SUCCESS");
      return data;
    } else toast.error("ERROR");
  }
);

// export const deleteUser = createAsyncThunk(
//   "user/delete",
//   async (id, thunkAPI) => {
//     const response = await userApi.get(id);
//     return response.result;
//   }
// );

export const getShops = createAsyncThunk("user/getShops", async () => {
  const response = await userApi.getShops();
  if (response.result) return response.result;
  return [];
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: [],
    shops: [],
    currentPage: 1,
    total: 0,
    isLoading: false,
    isUpdating: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },

    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.splice(
        state.users.findIndex((item) => +item.id === +action.payload),
        1
      );
    },

    //
    [getShops.pending]: (state) => {
      state.isLoading = true;
    },
    [getShops.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getShops.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
