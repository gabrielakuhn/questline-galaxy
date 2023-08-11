import { Icon } from "@rneui/base";
import { TouchableOpacity } from "react-native";

interface MenuButtonProps {
  icon: string;
  iconType?: string;
  onPress: () => void;
}

export const MenuButton = ({ icon, iconType, onPress }: MenuButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="pt-6 pb-12 flex-1">
      <Icon name={icon} type={iconType} />
    </TouchableOpacity>
  )
}
