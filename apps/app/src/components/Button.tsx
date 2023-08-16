import { Text, TouchableOpacity } from "react-native";
  
  interface ButtonProps {
    title: string;
    onPress: () => void;
  }
  
  export const Button = ({ title, onPress }: ButtonProps) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="bg-galaxy-dark-blue items-center rounded-3xl px-20 py-4"
      >
        <Text className="text-white font-bold">{title}</Text>
      </TouchableOpacity>
    )
  }