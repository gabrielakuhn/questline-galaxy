export type RootScreensParamList = {
    Home: undefined;
    Friends: { name: string };
    Quests: { name: string };
}

export enum Screen {
    HOME = "Home",
    Friends = "Friends",
    QUESTS = "Quests"
} 