import { Text, View } from "react-native";
import { Quest as QuestModel } from "./Models/Quest";

interface Props {
  quest: QuestModel;
}

export const Quest = ({ quest }: Props) => {
  return (
    <View className="flex flex-row p-6 items-center">
      <Text className="font-bold pr-3">{quest.name}</Text>
    </View>
  );
};
