import { createSlice } from "@reduxjs/toolkit";

const walletFormSlice = createSlice({
  name: "walletForm",
  initialState: {
    form: {
      balance: 0,
      expense: 0,
      debt: 0,
    },
  },
  reducers: {
    setForm(state, action) {
      const { name, value } = action.payload;
      state.form[name] = value;
    },
  },
});

export const { setForm } = walletFormSlice.actions;
export default walletFormSlice.reducer;