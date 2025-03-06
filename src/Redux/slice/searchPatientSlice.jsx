import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const searchPatients = createAsyncThunk(
  "billing/searchPatients",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log("API Request Sent:", credentials);
      const response = await AxiosInstance.get(API_ENDPOINTS.SEARCH_PATIENT, {
        params: credentials,
      });
      console.log("API Response:", response.data); // ✅ Debug API Response
      return response.data; // ✅ Ensure data is returned correctly
    } catch (error) {
      console.error("API Error:", error.response?.data); // ✅ Debug API Error
      return rejectWithValue(error.response?.data?.message || "Unknown error");
    }
  }
);

const searchPatientsSlice = createSlice({
  name: "searchPatients",
  initialState: {
    searchPatientData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPatients.pending, (state) => {
        console.log("🔄 Redux: searchPatients.pending called!");
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPatients.fulfilled, (state, action) => {
        console.log("✅ Redux Received Data:", action.payload); // ✅ Debug payload
        state.loading = false;
        state.searchPatientData = action.payload.data; // Ensure this matches expected data
      })
      .addCase(searchPatients.rejected, (state, action) => {
        console.log("❌ Redux: searchPatients.rejected called! Error:", action.payload);
        state.loading = false;
        state.error = action.payload;
      });
  }  
});

export default searchPatientsSlice.reducer;
