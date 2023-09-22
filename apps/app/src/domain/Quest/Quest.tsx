import { Button, Text, View } from "react-native";
import { Quest as QuestModel } from "./Models/Quest";
import { useAppDispatch, useAppSelector } from "@/store/Infrastructure/Hooks";
import {
  getQuestStore,
  remove as removeQuestFromState,
} from "@/store/Domain/quest-slice";
import { StorageKey } from "@/infrastructure/storage/localstorage/Keys";
import { removeValueFromStoredArray } from "@/infrastructure/storage/Application/Helper";
import { Timer } from "@/components/Timer";

interface Props {
  quest: QuestModel;
}

export const Quest = ({ quest }: Props) => {
  const dispatch = useAppDispatch();
  const { quests } = useAppSelector(getQuestStore);

  const deleteTrip = async (id: string): Promise<void> => {
    const isRemoved = await removeValueFromStoredArray(
      quests,
      id,
      StorageKey.Quests
    );

    if (isRemoved) {
      dispatch(removeQuestFromState(id));
    }
  };
  return (
    <View className="flex flex-row p-6 items-center">
      <Text className="font-bold pr-3">{quest.name}</Text>
      <Timer start={new Date(quest.start)} />
      <View className="mb-1">
        <Button onPress={() => deleteTrip(quest.id)} title="x"></Button>
      </View>
    </View>
  );
};
