import { Icon } from "@rneui/base";
import { TouchableOpacity } from "react-native";

interface MenuButtonProps {
  icon: string;
  iconType?: string;
  onPress: () => void;
}

export const MenuButton = ({ icon, iconType, onPress }: MenuButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="p-8 pt-5">
      <Icon name={icon} type={iconType} />
    </TouchableOpacity>
  )
}
