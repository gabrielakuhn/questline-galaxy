import { Timer } from "@/types/Timer";
import { Trip } from "@/types/Trip";
import { leftPad } from "@/utilities/global";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

interface Props {
  trip: Trip;
  remove: (id: string) => void;
}

const initialTimer: Timer = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const countUp = (start: Date): Timer => {
  const now = new Date();
  const distance = now.getTime() - start.getTime();

  const time: Timer = {
    hours: leftPad(Math.floor(distance / (1000 * 60 * 60))),
    minutes: leftPad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: leftPad(Math.floor((distance % (1000 * 60)) / 1000)),
  };

  return time;
};

export const TimerView = ({ trip, remove }: Props) => {
  const [timer, setTimer] = useState<Timer>(initialTimer);

  const countTimeUp = (start: Date) => {
    setInterval(function () {
      const time = countUp(start);
      setTimer(time);
    }, 1000);
  };

  useEffect(() => {
    countTimeUp(new Date(trip.start));
  }, []);

  return (
    <View className="flex flex-row p-6 items-center">
      <Text className="font-bold pr-3">{trip.name}</Text>
      <Text className="font-bold">{timer.hours}:</Text>
      <Text className="font-bold">{timer.minutes}:</Text>
      <Text className="font-bold">{timer.seconds}</Text>
      <View className="mb-1">
        <Button onPress={() => remove(trip.id)} title="x"></Button>
      </View>
    </View>
  );
};
