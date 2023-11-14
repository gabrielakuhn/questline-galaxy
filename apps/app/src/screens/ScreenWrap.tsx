import { ReactNode } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootScreensParamList } from "@/types";
import { Menu } from "@/components";

interface Props extends NativeStackScreenProps<RootScreensParamList> {
  children: ReactNode;
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export const ScreenWrap = ({ children, navigation, route }: Props) => {
  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View className="pt-24 px-6 pb-28">{children}</View>
      </ScrollView>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};
