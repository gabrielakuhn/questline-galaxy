import { Icon } from "@rneui/base";
import { TouchableOpacity } from "react-native";

interface MenuButtonProps {
  icon: string;
  iconType?: string;
  onPress: () => void;
}

export const MenuButton = ({ icon, iconType, onPress }: MenuButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="p-12 pt-6 basis-1/3 w-full">
      <Icon name={icon} type={iconType} />
    </TouchableOpacity>
  )
}
