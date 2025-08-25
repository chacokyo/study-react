// 갤러리 컴포넌트
// 프로필 컴포넌트를 모아서 내보냄
import Profile from './profile'

export default function Gallery() {
  return (
    <>
      <h2>Notable Scientist</h2>
      <ul>
        <Profile />
      </ul>
    </>
  )
}
