import { people } from './data.js'
import { getImageUrl } from './utils.jsx'

const chemist = []
const noChemist = []

people.forEach((person) => {
  if (person.profession === 'chemist') {
    chemist.push(person)
  } else {
    noChemist.push(person)
  }
})

function ListItem({ profession }) {
  return profession.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
}
export default function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ul>
        <ListItem profession={chemist} />
        <ListItem profession={noChemist} />
      </ul>
    </article>
  )
}
