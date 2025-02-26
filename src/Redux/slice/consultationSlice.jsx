import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const consultation = createAsyncThunk(
  "billing/consultation",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.CONSULTATION, {
        params: credentials,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const consultationSlice = createSlice({
  name: "consultation",
  initialState: {
    consultationData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(consultation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(consultation.fulfilled, (state, action) => {
        state.loading = false;
        state.consultationData = action.payload.data;
      })
      .addCase(consultation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default consultationSlice.reducer;
