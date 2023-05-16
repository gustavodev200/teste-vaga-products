import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    sexo: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSexo: (state, action) => {
      state.sexo = action.payload;
    },
  },
});

export const { setName, setEmail, setSexo } = slice.actions;
export default slice.reducer;
