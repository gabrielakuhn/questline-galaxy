import { Screen } from "@/data/domain/lists";

export type RootScreensParamList = {
  [Screen.Home]: undefined;
  [Screen.Crew]: { name: string };
  [Screen.Quests]: { name: string };
  [Screen.CreateTrip]: undefined;
  [Screen.CreateQuest]: undefined;
};
