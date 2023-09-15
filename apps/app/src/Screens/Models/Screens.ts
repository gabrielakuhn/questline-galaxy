export enum Screen {
  Home = "Home",
  Crew = "Crew",
  Quests = "Quests",
  CreateTrip = "CreateTrip",
}

export type RootScreensParamList = {
  [Screen.Home]: undefined;
  [Screen.Crew]: { name: string };
  [Screen.Quests]: { name: string };
  [Screen.CreateTrip]: undefined;
};
