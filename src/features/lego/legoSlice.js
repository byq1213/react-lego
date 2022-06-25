import { createSlice } from "@reduxjs/toolkit";

export const legoSlice = createSlice({
  name: "lego",
  initialState: {
    text: "old_name"
  },
  reducers: {
    changeName: (state, action) => {
      console.log("state", state.text);
      console.log("action", action);
      state.text = action.payload.newName;
    }
  }
});
export const { changeName } = legoSlice.actions;

export const selectName = (state) => state.name;
export default legoSlice.reducer;
