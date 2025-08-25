import lists from '../profile.json'
import { imgUrl } from './utils'

export default function Profile() {
  return lists.map((list, index) => (
    <li key={index}>
      <h1>{list.name}</h1>
      <img
        className="rounded-full"
        src={imgUrl(list.imgUrl)}
        alt={list.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {list.profession}
        </li>
        <li>
          <b>Awards: {list.awards.length}</b>
          {list.awards.join(', ')}
        </li>
        <li>
          <b>Discoverd: </b>
          {list.discovered}
        </li>
      </ul>
    </li>
  ))
}
