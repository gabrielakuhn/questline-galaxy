import { Text, View } from "react-native"
import { Menu } from "../components/Menu/Menu"

export const Home = ({ navigation }: any) => {
  return (
    <View className="flex-1 items-center justify-center bg-white space-y-10">
      <View className="flex-1 items-center justify-center bg-white space-y-10">
        <View className="border border-slate-400 border-dashed rounded-2xl p-7 items-center space-y-6">
          <Text>Color test</Text>
          <View className="flex flex-row">
            <View className="basis-1/6 h-20 bg-galaxy-dark-blue" />
            <View className="basis-1/6 h-20 bg-galaxy-violet" />
            <View className="basis-1/6 h-20 bg-galaxy-purple" />
            <View className="basis-1/6 h-20 bg-galaxy-pink" />
            <View className="basis-1/6 h-20 bg-galaxy-rose" />
          </View>
        </View>
      </View>
      <Menu navigation={navigation} />
    </View>
  )
}
