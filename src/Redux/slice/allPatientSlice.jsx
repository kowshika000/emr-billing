import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const allPatients = createAsyncThunk(
  "billing/allPatients",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(API_ENDPOINTS.PATIENT_LIST, {
        params: credentials,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const allPatientsSlice = createSlice({
  name: "allPatients",
  initialState: {
    allPatientData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.allPatientData = action.payload.data;
      })
      .addCase(allPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default allPatientsSlice.reducer;
