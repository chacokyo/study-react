import { useState } from 'react'
import Button from './button'
import Input from './input'
import Output from './output'

export default function AppEx() {
  // 처음엔 수정 모드가 아닌 일반 모드
  const [isEdit, setEdit] = useState(false)
  const [user, setUser] = useState({ firstName: '', lastName: '' })
  const handleChange = (key) => (e) =>
    setUser((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  const handleClick = () => setEdit((isEdit) => !isEdit)

  return (
    <div>
      <Input
        editMode={isEdit}
        id="user-firstname"
        label="First Name"
        onchange={handleChange('firstName')}
        value={user.firstName}
      />
      <Input
        editMode={isEdit}
        id="user-lastname"
        label="Last Name"
        onchange={handleChange('lastName')}
        value={user.lastName}
      />
      <Button editMode={isEdit} onClick={handleClick} />
      <Output firstName={user.firstName} lastName={user.lastName} />
    </div>
  )
}
