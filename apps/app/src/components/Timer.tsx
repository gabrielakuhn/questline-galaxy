import { Timer as TimerModel } from "@/components/Models/Timer";
import { leftPad } from "@/infrastructure/utilities";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Props {
  start: string | number;
}

const initialTimer: TimerModel = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const countUp = (start: Props["start"]): TimerModel => {
  const now = new Date();
  const startTime = new Date(start);
  const distance = now.getTime() - startTime.getTime();

  const time: TimerModel = {
    hours: leftPad(Math.floor(distance / (1000 * 60 * 60))),
    minutes: leftPad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: leftPad(Math.floor((distance % (1000 * 60)) / 1000)),
  };

  return time;
};

export const Timer = ({ start }: Props) => {
  const [timer, setTimer] = useState<TimerModel>(initialTimer);

  const countTimeUp = (start: Props["start"]) => {
    setInterval(function () {
      const time = countUp(start);
      setTimer(time);
    }, 1000);
  };

  useEffect(() => {
    countTimeUp(start);
  }, []);

  return (
    <View className="flex flex-row">
      <Text className="font-bold">{timer.hours}:</Text>
      <Text className="font-bold">{timer.minutes}:</Text>
      <Text className="font-bold">{timer.seconds}</Text>
    </View>
  );
};
