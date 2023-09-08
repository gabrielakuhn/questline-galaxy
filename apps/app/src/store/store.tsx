import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./Domain/trips-slice";

export const store = configureStore({
  reducer: {
    tripsStore: tripsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
