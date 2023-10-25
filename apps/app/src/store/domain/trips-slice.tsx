import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Trip } from "@/types";
import { RootState, StoreRequest, StoreStatus } from "../infrastructure";
import { StorageKey, getData } from "@/infrastructure/storage";

export const fetchTrips = createAsyncThunk("trips/fetchTrips", async () => {
  let tripsResponse: Trip[] = [];

  await getData<Trip[]>(StorageKey.Trips).then((value) => {
    tripsResponse = value;
  });

  return tripsResponse.length > 0 ? tripsResponse : [];
});

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
      state.trips = [action.payload, ...state.trips];
    },
    removeTrip(state, action) {
      const id = action.payload;
      state.trips = state.trips.filter((trip) => trip.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrips.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.status = StoreStatus.SUCCEEDED;
    });

    builder.addCase(fetchTrips.rejected, (state) => {
      state.trips = [];
      state.status = StoreStatus.FAILED;
      state.error = "Fetch Trips rejected";
    });
  },
});

export const getTripStore = (state: RootState): FetchTripsRequest =>
  state.tripsStore;

export const { addTrip, removeTrip } = tripsSlice.actions;
export default tripsSlice.reducer;
