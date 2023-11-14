import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Quest } from "@/types";
import { StoreRequest, StoreStatus } from "../infrastructure";
import { RootState } from "../store";
import { StorageKey, getData } from "@/infrastructure/storage";

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
    addQuest(state, action) {
      state.quests = [action.payload, ...state.quests];
    },
    removeQuest(state, action) {
      const id = action.payload;
      state.quests = state.quests.filter((quest) => quest.id !== id);
    },
    modifyQuest(state, action) {
      const id = action.payload.id;
      const questIndex = state.quests.findIndex((quest) => quest.id == id);
      state.quests[questIndex] = {
        ...state.quests[questIndex],
        ...action.payload,
      };
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

export const getFinishedQuests = (state: RootState): Quest[] =>
  state.questsStore.quests.filter((quest) => quest.end !== undefined);

export const getUnfinishedQuests = (state: RootState): Quest[] =>
  state.questsStore.quests.filter((quest) => quest.end === undefined);

export const { addQuest, removeQuest, modifyQuest } = questsSlice.actions;
export default questsSlice.reducer;
