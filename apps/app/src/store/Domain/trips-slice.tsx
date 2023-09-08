import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Trip } from "@/domain/Trip/Models/Trip";
import { StoreRequest } from "../Infrastructure/Request";
import { StoreStatus } from "../Infrastructure/Status";

export const fetchTrips = createAsyncThunk(
  "notification/fetchNotification",
  async () => {
    /**
     * TODO: Fetch from localstorage
     */
    const tripsResponse: Trip[] = [];

    return tripsResponse;
  }
);

interface FetchTripsRequest extends StoreRequest {
  trips: Trip[];
}

const initialState: FetchTripsRequest = {
  trips: [],
  status: StoreStatus.IDLE,
  error: null,
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip(state, action) {
      state.trips = [...state.trips, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrips.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.status = StoreStatus.SUCCEEDED;
    });

    builder.addCase(fetchTrips.rejected, (state, action) => {
      state.trips = [];
      state.status = StoreStatus.FAILED;
      state.error = "Fetch Trips rejected";
    });
  },
});

export const getAllTrips = (state: RootState) => state.tripsStore.trips;

export const { addTrip } = tripsSlice.actions;
export default tripsSlice.reducer;
