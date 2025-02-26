import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const searchProcedure = createAsyncThunk(
  "billing/searchProcedure",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.SEARCH_PROCEDURE, {
        params: credentials,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const searchProcedureSlice = createSlice({
  name: "searchProcedure",
  initialState: {
    searchProcedureData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProcedure.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProcedure.fulfilled, (state, action) => {
        state.loading = false;
        state.searchProcedureData = action.payload.data;
      })
      .addCase(searchProcedure.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchProcedureSlice.reducer;
