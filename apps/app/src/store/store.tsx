import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./Domain/trips-slice";
import questsReducer from "./Domain/quest-slice";

export const store = configureStore({
  reducer: {
    tripsStore: tripsReducer,
    questsStore: questsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
