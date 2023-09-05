import { Timer } from "@/types/Timer"
import { leftPad } from "@/utilities/global"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
  
  interface Props {
    start: Date
    children: string
  }

  const countUp = (start: Date): Timer => {
    const now = new Date()
    const distance = now.getTime() - start.getTime()
    
    const time: Timer = {
      hours: leftPad(Math.floor(distance / (1000 * 60 * 60))),
      minutes: leftPad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: leftPad(Math.floor((distance % (1000 * 60)) / 1000)),
    }
  
    return time
  }
  
  export const TimerView = ({ start, children }: Props) => {
    const [timer, setTimer] = useState<Timer>()
    
    const countTimeUp = (start: Date) => {
      setInterval(function () {
        const time = countUp(start)
        setTimer(time)
      }, 1000)
    }
  
    useEffect(() => {
      countTimeUp(start)
    }, [])

    return (
      <View className="galaxy-violet p-6 flex flex-row ">
        <Text className="font-bold pr-3">{children}</Text>
        <Text className="font-bold">{timer?.hours}:</Text>
        <Text className="font-bold">{timer?.minutes}:</Text>
        <Text className="font-bold">{timer?.seconds}</Text>
      </View>
    )
  }