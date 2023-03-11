import { createSlice } from "@reduxjs/toolkit";
import { fetchOffices } from "./operations";

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
    state.list = [];
};
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.list = [];
};

const officesSlice = createSlice({
    name: "offices",
    initialState: {
      list: [],
      isLoading: false,
      error: null
    },
  
    extraReducers: {
      [fetchOffices.pending]: handlePending,
      [fetchOffices.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload.data.map(office => { return {
            number: office.Number,
            address: office.ShortAddress
        }});
      },
      [fetchOffices.rejected]: handleRejected,
    }
  });
  
export const officesReducer = officesSlice.reducer;