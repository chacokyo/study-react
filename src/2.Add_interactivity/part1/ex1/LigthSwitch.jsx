export default function LightSwitch() {
  // 이벤트 핸들러는 콜백 함수이고, 함수 자체를 전달.
  const handleClick = () => {
    let bodyStyle = document.body.style
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white'
    } else {
      bodyStyle.backgroundColor = 'black'
    }
  }

  return <button onClick={handleClick}>Toggle the lights</button>
}
