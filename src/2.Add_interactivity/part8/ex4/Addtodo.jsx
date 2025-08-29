// todolist 추가하는 input
import { useState } from 'react'

// input에 추가한 title
export default function Addtodo({ onAddTodo }) {
  const [title, setTitle] = useState('')
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setTitle('')
          onAddTodo(title)
        }}
      >
        Add
      </button>
    </div>
  )
}
