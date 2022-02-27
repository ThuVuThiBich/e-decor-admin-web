import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statisticApi from "api/statisticApi";

export const getStatisticsUsers = createAsyncThunk(
  "statistic/getStatisticsUsers",
  async (data, thunkAPI) => {
    const response = await statisticApi.getStatisticsUsers(data);
    return response.result;
  }
);
export const getChart = createAsyncThunk(
  "statistic/getChart",
  async (data, thunkAPI) => {
    const response = await statisticApi.getChart(data);
    return response.result;
  }
);

const statisticsSlice = createSlice({
  name: "statistic",
  initialState: {
    earning: 0,
    productSold: 0,
    pendingOrders: 0,
    chart: {},
    isLoading: false,
    isUpdating: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getStatisticsUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getStatisticsUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getStatisticsUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
    },

    [getChart.pending]: (state) => {
      state.isLoading = true;
    },
    [getChart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getChart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.chart = action.payload;
    },
  },
});

// export const {} = statisticsSlice.actions;
export default statisticsSlice.reducer;
