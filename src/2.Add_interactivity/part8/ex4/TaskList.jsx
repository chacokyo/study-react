import { useState } from 'react'

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  )
}
function Task({ todo, onChange, onDelete }) {
  const [isEditing, setEditing] = useState(false)

  let todoContent
  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            onChange({ ...todo, title: e.target.value })
          }}
        />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    )
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    )
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          })
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  )
}

// onChange
// 삭제 버튼 클릭시, 해당 버튼의 id 값 전달. onDelete로.
