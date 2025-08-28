import { useState } from 'react'

// 카운트 버튼을 클릭 했지만, 숫자 업데이트가 되지 않음
// 바로 firstName을 수정하면 문제 x, 버튼 클릭 후 firstName 수정 시 카운트 버튼애 + 1증가
// lastName은 수정 시 스코어 점수 사라짐

export default function Scoreboard() {
  // 선수 설정
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  })

  // 클락 시 점수가 +1 올라감
  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    })
  }

  // 나머지는 그대로 firstName만 타켓 값으로.
  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    })
  }
  // 나머지는 그대로 lastName만 타켓 값으로.
  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    })
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{' '}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  )
}
