import { useState } from 'react'
import Color from './Color'
import Time from './Time'

export default function AppEx() {
  const [color, setColor] = useState('lightcoral')
  const handleChangeColor = (e) => setColor(e.target.value)

  return (
    <>
      <Color onChange={handleChangeColor} value={color} />
      <Time color={color} />
    </>
  )
}
