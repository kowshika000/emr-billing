import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const patientDetails = createAsyncThunk(
  "billing/patientDetails",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.PATIENT_DETAILS, {
        params: credentials,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const patientDetailsSlice = createSlice({
  name: "patientDetails",
  initialState: {
    patientDetailsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(patientDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patientDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.patientDetailsData = action.payload.data;
      })
      .addCase(patientDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default patientDetailsSlice.reducer;
