import { Button, Text, View } from "react-native";
import { Timer } from "@/components/generic/Timer";
import { Quest as QuestModel } from "@/types";

import {
  StorageKey,
  removeValueFromStoredArray,
} from "@/infrastructure/storage";
import { useAppDispatch, useAppSelector } from "@/store/infrastructure";
import {
  getQuestStore,
  removeQuest as removeQuestFromState,
} from "@/store/domain";

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
