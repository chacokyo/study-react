import { useState } from 'react'

// 한번 클릭시 pending -1  / 0
// 두번 클릭 시 값이 + 1 / 2
export default function RequestTracker() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    // pending: 0
    setPending((pending) => pending + 1) // 1
    await delay(3000)
    setPending((pending) => pending - 1) // -1
    setCompleted((completed) => completed + 1) // 1
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  )
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
