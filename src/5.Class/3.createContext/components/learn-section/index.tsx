import type { ComponentProps } from 'react'

// ComponentProps : section 요소가 가지고 있는 속성값
type Props = ComponentProps<'section'> & { title: string; showTitle?: boolean }

export default function LearnSection(props: Props) {
  // 구조 분해 할당으로 값을 뺌, 나머지 porps는 ...restProps
  const { title, showTitle = false, children, ...restProps } = props

  return (
    <section {...restProps}>
      <h1 className={showTitle ? undefined : 'sr-only'}> {title} </h1>
    </section>
  )
}
