import { useImmer } from 'use-immer'
import AddTodo from '../ex3/AddTodo'
import TaskList from './TaskList'

let nextId = 3
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
]

export default function TaskApp() {
  const [todos, updateTodos] = useImmer(initialTodos)

  function handleAddTodo(title) {
    updateTodos((draft) => {
      draft.push({ id: nextId++, title: title, done: false })
    })
  }

  function handleChangeTodo(nextTodo) {
    updateTodos((draft) => {
      const todo = draft.find((t) => t.id === nextTodo.id)
      todo.title = nextTodo.title
      todo.done = nextTodo.done
    })
  }

  // draft 아이디가 같지 않은 것만 업데이트
  function handleDeleteTodo(todoId) {
    updateTodos((draft) => {
      const index = draft.findIndex((t) => t.id === todoId)
      draft.splice(index, 1)
    })
  }
  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}
