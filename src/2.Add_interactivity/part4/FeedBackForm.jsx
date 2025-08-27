export default function FeedbackForm() {
  // const [name, setName] = useState('')

  function handleClick() {
    const name = prompt('What is your name?')
    alert(`Hello, ${name}!`)
  }

  return <button onClick={handleClick}>Greet</button>
}
