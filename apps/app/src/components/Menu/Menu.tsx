import { Text, View } from "react-native";
import { Icon } from "@rneui/base";

export const Menu = () => {
  return (
    <View className="bg-orange-500 absolute bottom-0 w-full p-6">
      <View className="items-center flex flex-row">
        <View className="basis-1/4 pb-6">
          <Icon name="rocket-sharp" type="ionicon" />
        </View>
        <View className="basis-1/4 pb-6">
          <Icon name="rocket-sharp" type="ionicon" />
        </View>
        <View className="basis-1/4 pb-6">
          <Icon name="rocket-sharp" type="ionicon" />
        </View>
        <View className="basis-1/4 pb-6">
          <Icon name="rocket-sharp" type="ionicon" />
        </View>
      </View>
    </View>
  );
};
