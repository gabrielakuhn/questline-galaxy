import { Icon } from "@rneui/base";
import { TouchableOpacity } from "react-native";

interface Props {
  icon: string;
  iconType?: string;
  onPress: () => void;
}

export const IconButton = ({ icon, iconType, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="pt-6 pb-12 flex-1">
      <Icon name={icon} type={iconType} />
    </TouchableOpacity>
  );
};
