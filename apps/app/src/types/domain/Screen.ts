import { Screen } from "@/data/domain/list";

export type RootScreensParamList = {
  [Screen.Home]: undefined;
  [Screen.Crew]: { name: string };
  [Screen.Quests]: { name: string };
  [Screen.CreateTrip]: undefined;
  [Screen.CreateQuest]: undefined;
};
