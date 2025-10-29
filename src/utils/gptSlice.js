import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
  },
  reducers: {
    gptButtonToggle: (state, action) => {
      state.showGpt = !state.showGpt;
    },
  },
});

export const { gptButtonToggle } = gptSlice.actions;
export default gptSlice.reducer;
