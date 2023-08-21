export enum Screen {
    Home = "Home",
    Crew = "Crew",
    Quests = "Quests"
} 

export type RootScreensParamList = {
    [Screen.Home]: undefined;
    [Screen.Crew]: { name: string };
    [Screen.Quests]: { name: string };
}

