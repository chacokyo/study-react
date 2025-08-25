import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours()
  const classProps = hours > 6 && hours < 12 ? 'night' : 'day'

  return (
    <h1 id="time" className={classProps}>
      {time.toLocaleTimeString()}
    </h1>
  )
}
