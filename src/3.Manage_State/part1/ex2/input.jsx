export default function Input({ editMode, id, label, value, onchange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {editMode ? (
        <input type="text" id={id} value={value} onChange={onchange} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  )
}

// 데코레이터? 함수에 인수로 함수를 전달
// 기본 입력 필드. + 기능 추가(상테 따른 모드 전환)
