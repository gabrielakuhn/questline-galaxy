import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./domain/trips-slice";
import questsReducer from "./domain/quest-slice";

export const store = configureStore({
  reducer: {
    tripsStore: tripsReducer,
    questsStore: questsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
