export enum Screen {
    Home = "Home",
    Friends = "Friends",
    Quests = "Quests"
} 

export type RootScreensParamList = {
    [Screen.Home]: undefined;
    [Screen.Friends]: { name: string };
    [Screen.Quests]: { name: string };
}

