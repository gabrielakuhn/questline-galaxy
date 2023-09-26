import { Timer as TimerModel } from "@/types";
import { leftPad } from "@/infrastructure/utilities";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Props {
  start: Date;
}

const initialTimer: TimerModel = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const countUp = (start: Date): TimerModel => {
  const now = new Date();
  const distance = now.getTime() - start.getTime();

  const time: TimerModel = {
    hours: leftPad(Math.floor(distance / (1000 * 60 * 60))),
    minutes: leftPad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: leftPad(Math.floor((distance % (1000 * 60)) / 1000)),
  };

  return time;
};

export const Timer = ({ start }: Props) => {
  const [timer, setTimer] = useState<TimerModel>(initialTimer);

  const countTimeUp = (start: Date) => {
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
