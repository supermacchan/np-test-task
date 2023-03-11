import { createSlice } from "@reduxjs/toolkit";
  
const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    addNewQuery(state, action) {
      state.unshift(action.payload);
    },
    clearHistory(state, action) {
      state.length = 0;
    }
  },
});
  
export const { addNewQuery, clearHistory } = historySlice.actions;
export const historyReducer = historySlice.reducer;