import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const additionalCharge = createAsyncThunk(
  "billing/additionalCharge",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        API_ENDPOINTS.ADDITONAL_CHARGE,
        credentials
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const additionalChargeSlice = createSlice({
  name: "additionalCharge",
  initialState: {
    additionalChargeData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(additionalCharge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(additionalCharge.fulfilled, (state, action) => {
        state.loading = false;
        state.additionalChargeData = action.payload.data;
      })
      .addCase(additionalCharge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default additionalChargeSlice.reducer;
