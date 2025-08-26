import { Fragment } from 'react'

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
  ],
}

export default function Poem() {
  // hr 요소는 앞에 p 요소 사이에 존재해야 함.
  // p가 첫번째 요소에 없어야 함 (조건 분기)
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  )
}
