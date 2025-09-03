import { useState } from 'react'

export default function Picutre() {
  const [isActive, setActive] = useState(false)

  if (isActive) {
    return (
      <div className="background " onClick={() => setActive(false)}>
        <img
          className="picture picture--active"
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )
  }

  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setActive(true)}
      />
    </div>
  )
}
