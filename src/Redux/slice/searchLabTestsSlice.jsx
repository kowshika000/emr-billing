import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const searchLabtest = createAsyncThunk(
  "billing/searchLabtest",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.SEARCH_LABTEST, {
        params: credentials,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const searchLabtestsSlice = createSlice({
  name: "searchLabtest",
  initialState: {
    searchLabtestData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchLabtest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchLabtest.fulfilled, (state, action) => {
        state.loading = false;
        state.searchLabtestData = action.payload.data;
      })
      .addCase(searchLabtest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchLabtestsSlice.reducer;
