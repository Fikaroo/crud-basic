import { configureStore } from "@reduxjs/toolkit";
import personalReduser from "../features/personalsSlicer";
export const store = configureStore({
  reducer: {
    personals: personalReduser,
  },
});
