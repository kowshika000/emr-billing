import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const labOrder = createAsyncThunk(
  "billing/labOrder",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        API_ENDPOINTS.CREATE_LAB_ORDER,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const labOrderSlice = createSlice({
  name: "labOrder",
  initialState: {
    labOrderData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(labOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(labOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.labOrderData = action.payload;
      })
      .addCase(labOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default labOrderSlice.reducer;
