import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

import { StoreRequest } from "../Infrastructure/Request";
import { StoreStatus } from "../Infrastructure/Status";
import { getData } from "@/infrastructure/storage/localstorage/AsyncStorage";
import { StorageKey } from "@/infrastructure/storage/localstorage/Keys";
import { Quest } from "@/domain/Quest/Models/Quest";

export const fetchQuests = createAsyncThunk("quests/fetchQuests", async () => {
  let questsResponse: Quest[] = [];

  await getData<Quest[]>(StorageKey.Quests).then((value) => {
    questsResponse = value;
  });

  return questsResponse.length > 0 ? questsResponse : [];
});

interface FetchQuestRequest extends StoreRequest {
  quests: Quest[];
}

const initialState: FetchQuestRequest = {
  quests: [],
  status: StoreStatus.IDLE,
  error: null,
};

const questsSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    add(state, action) {
      state.quests = [action.payload, ...state.quests];
    },
    remove(state, action) {
      const id = action.payload;
      state.quests = state.quests.filter((quest) => quest.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuests.fulfilled, (state, action) => {
      state.quests = action.payload;
      state.status = StoreStatus.SUCCEEDED;
    });

    builder.addCase(fetchQuests.rejected, (state) => {
      state.quests = [];
      state.status = StoreStatus.FAILED;
      state.error = "Fetch Quests rejected";
    });
  },
});

export const getQuestStore = (state: RootState): FetchQuestRequest =>
  state.questsStore;

export const { add, remove } = questsSlice.actions;
export default questsSlice.reducer;
