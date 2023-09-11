import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Trip as TripModel } from "@/domain/Trip/Models/Trip";
import { StoreRequest } from "../Infrastructure/Request";
import { StoreStatus } from "../Infrastructure/Status";
import { getData } from "@/infrastructure/storage/localstorage/AsyncStorage";
import { StorageKey } from "@/infrastructure/storage/localstorage/Keys";

export const fetchTrips = createAsyncThunk("trips/fetchTrips", async () => {
  let tripsResponse: TripModel[] = [];

  await getData<TripModel[]>(StorageKey.Trips).then((value) => {
    tripsResponse = value;
  });

  return tripsResponse.length > 0 ? tripsResponse : [];
});

interface FetchTripsRequest extends StoreRequest {
  trips: TripModel[];
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

export const getAllTrips = (state: RootState): TripModel[] =>
  state.tripsStore.trips;

export const { addTrip, removeTrip } = tripsSlice.actions;
export default tripsSlice.reducer;
