import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "" }; // ✅ Boş string ile başlatıyoruz

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
