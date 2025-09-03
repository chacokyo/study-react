export default function Button({ editMode, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {editMode ? 'Save' : 'Edit'}
    </button>
  )
}
