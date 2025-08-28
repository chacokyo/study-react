import { useState } from 'react'
import Background from './Background.jsx'
import Box from './Box.jsx'

// 배경은 고정되어야 하지만, 박스 기준으로 위치가 재배치됨
//
const initialPosition = {
  x: 0,
  y: 0,
}

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition,
  })

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    })
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    })
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  )
}
