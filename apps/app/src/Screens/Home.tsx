import { Text, View } from "react-native"
import { Menu } from "../components/Menu/Menu"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootScreensParamList } from "./Types/Screens";

type HomeProps = NativeStackScreenProps<RootScreensParamList>

export const Home = ({ navigation, route }: HomeProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-white space-y-10">
      <Text className="text-lg p-3">Hi!</Text>
      <Text>Questline app met Typescript en Nativewind!</Text>
      <View className="border border-slate-400 border-dashed rounded-2xl p-7 items-center space-y-6">
        <Text>Color test</Text>
        <View className="flex flex-row">
          <View className="basis-1/6 h-20 bg-galaxy-dark-blue" />
          <View className="basis-1/6 h-20 bg-galaxy-violet" />
          <View className="basis-1/6 h-20 bg-galaxy-purple" />
          <View className="basis-1/6 h-20 bg-galaxy-pink" />
          <View className="basis-1/6 h-20 bg-galaxy-rose" />
        </View>
        <View className="flex flex-row">
          <View className="basis-1/12 h-20 bg-galaxy-dark-blue" />
          <View className="basis-1/12 h-20 bg-galaxy-bright-blue" />
          <View className="basis-1/12 h-20 bg-galaxy-baby-blue" />
          <View className="basis-1/12 h-20 bg-galaxy-violet" />
          <View className="basis-1/12 h-20 bg-galaxy-purple" />
          <View className="basis-1/12 h-20 bg-galaxy-pink" />
          <View className="basis-1/12 h-20 bg-galaxy-rose" />
        </View>
      </View>
      <Menu navigation={navigation} route={route} />
    </View>
  )
}
