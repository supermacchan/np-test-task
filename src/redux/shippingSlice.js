import { createSlice } from "@reduxjs/toolkit";
import { fetchShipping } from "./operations";

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
    state.info = {};
};
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.info = {};
};
  
const shippingSlice = createSlice({
    name: "shipping",
    initialState: {
      info: {},
      isLoading: false,
      error: null
    },
  
    extraReducers: {
      [fetchShipping.pending]: handlePending,
      [fetchShipping.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.info = {
            number: action.payload.data[0].Number,
            status: action.payload.data[0].Status,
            sender: !action.payload.data[0].CitySender
            ? "Немає інформації"
            : `${action.payload.data[0].CitySender}, ${action.payload.data[0].WarehouseSender}`,
            recipient: !action.payload.data[0].CityRecipient
            ? "Немає інформації"
            : `${action.payload.data[0].CityRecipient}, ${action.payload.data[0].WarehouseRecipient}`,
         };
      },
      [fetchShipping.rejected]: handleRejected,
    }
  });
  
export const shippingReducer = shippingSlice.reducer;
