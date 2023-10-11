import { Timer as TimerModel } from "@/types";
import { leftPad } from "@/infrastructure/utilities";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Props {
  start: string | number;
  end?: string | number;
}

const initialTimer: TimerModel = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const countDistance = (
  start: Props["start"],
  end?: Props["end"]
): TimerModel => {
  const startTime = new Date(start);
  const endTime = end !== undefined ? new Date(end) : new Date();

  const distance = endTime.getTime() - startTime.getTime();

  const time: TimerModel = {
    hours: leftPad(Math.floor(distance / (1000 * 60 * 60))),
    minutes: leftPad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: leftPad(Math.floor((distance % (1000 * 60)) / 1000)),
  };

  return time;
};

export const Timer = ({ start, end }: Props) => {
  const [timer, setTimer] = useState<TimerModel>(initialTimer);

  const countUp = (start: Props["start"]) => {
    setInterval(function () {
      const time = countDistance(start);
      setTimer(time);
    }, 1000);
  };

  useEffect(() => {
    if (end !== undefined) {
      setTimer(countDistance(start, end));
      return;
    }

    countUp(start);
  }, [end]);

  return (
    <View className="flex flex-row">
      <Text className="font-bold">{timer.hours}:</Text>
      <Text className="font-bold">{timer.minutes}:</Text>
      <Text className="font-bold">{timer.seconds}</Text>
    </View>
  );
};
