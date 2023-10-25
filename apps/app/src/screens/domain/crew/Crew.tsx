import { Text } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreensParamList } from "@/types";
import { Screen } from "@/data/domain/lists";
import { ScreenWrap } from "@/screens/ScreenWrap";

type Props = NativeStackScreenProps<RootScreensParamList, Screen.Crew>;

export const Crew = ({ navigation, route }: Props) => {
  return (
    <ScreenWrap navigation={navigation} route={route}>
      <Text>This is {route.params.name}'s Crew</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo
      </Text>
    </ScreenWrap>
  );
};
