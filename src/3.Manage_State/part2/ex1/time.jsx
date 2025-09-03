import { useEffect, useState } from 'react'

export default function Time({ color }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dateNow = (date) => {
    const h = String(date.getHours()).padStart(2, '0')
    const m = String(date.getMinutes()).padStart(2, '0')
    const s = String(date.getSeconds()).padStart(2, '0')

    return `${h} : ${m} : ${s}`
  }

  return <b style={{ color: color }}> {dateNow(now)}</b>
}
