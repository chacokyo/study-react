export default function Color({ onChange, value }) {
  return (
    <div>
      <label htmlFor="time-color">Pick a color</label>
      <select
        name="time-color"
        id="time-color"
        onChange={onChange}
        value={value}
      >
        <option value="lightcoral">lightcoral</option>
        <option value="midnightblue">midnightblue</option>
        <option value="rebeccapurple">rebeccapurple</option>
      </select>
    </div>
  )
}
