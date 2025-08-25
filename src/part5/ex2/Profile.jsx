import { getImageUrl } from './utils'

const ratio = window.devicePixelRatio
function Avatar({ person, size }) {
  const sizeProps = size * ratio < 90 ? 's' : 'b'
  return (
    <img
      className="avatar"
      src={getImageUrl(person, sizeProps)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP',
      }}
    />
  )
}
