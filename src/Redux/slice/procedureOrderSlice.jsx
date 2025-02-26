import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../api/AxiosInstance";
import { API_ENDPOINTS } from "../api/apiEndPointend";

export const procedureOrder = createAsyncThunk(
  "billing/procedureOrder",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        API_ENDPOINTS.CREATE_PROCEDURE_ORDER,
        {
          params: credentials,
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const procedureOrderSlice = createSlice({
  name: "procedureOrder",
  initialState: {
    procedureOrderData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(procedureOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(procedureOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.procedureOrderData = action.payload.data;
      })
      .addCase(procedureOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default procedureOrderSlice.reducer;
