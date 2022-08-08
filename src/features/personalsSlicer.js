import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalData: [],
};

const personalsSlicer = createSlice({
  name: "personals",
  initialState,
  reducers: {
    addPersonal: (state, payload) => {
      state.personalData.push({
        id: state.personalData.length,
        name: payload.payload,
      });
    },
    deletePersonal: (state, payload) => {
      state.personalData = state.personalData.filter(
        ({ id }) => id !== payload.payload
      );
    },
  },
});

export const { addPersonal, deletePersonal } = personalsSlicer.actions;
export default personalsSlicer.reducer;
