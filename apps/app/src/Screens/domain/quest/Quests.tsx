import { useEffect } from "react";
import { Button } from "@/components/generic/Button";
import { View, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ScreenWrap } from "@/screens/ScreenWrap";
import { Quest } from "@/components";
import { RootScreensParamList } from "@/types";
import { Screen } from "@/data/domain/lists";
import {
  StoreStatus,
  useAppDispatch,
  useAppSelector,
} from "@/store/infrastructure";
import { fetchQuests, getQuestStore } from "@/store/domain";

type Props = NativeStackScreenProps<RootScreensParamList, Screen.Quests>;

export const Quests = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { quests, status: questStatus } = useAppSelector(getQuestStore);

  useEffect(() => {
    if (questStatus === StoreStatus.IDLE) {
      dispatch(fetchQuests());
    }
  });

  return (
    <ScreenWrap navigation={navigation} route={route}>
      <View className="space-y-8">
        <Text>Questline app met Typescript en Nativewind!</Text>
        {quests.map((quest) => (
          <View
            key={quest.id}
            className="border border-slate-400 border-dashed rounded-2xl"
          >
            <Quest quest={quest} />
          </View>
        ))}
        <View>
          <Button
            onPress={() => navigation.navigate(Screen.CreateQuest)}
            title="Add Trip"
          />
        </View>
      </View>
    </ScreenWrap>
  );
};
