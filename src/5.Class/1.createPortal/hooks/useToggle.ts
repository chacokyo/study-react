import { useCallback, useEffect, useState } from 'react'

// 초기값은 true로, 타입은 boolean
export default function useToggleState(initialValue: boolean = true) {
  // 상태 관리를 위한 useState에 boolean 타입 명시
  const [isToggle, setToggle] = useState<boolean>(initialValue)

  // useCallback으로 함수를 기억해 둠
  // []: 함수 새로 만들기 x
  const on = useCallback(() => setToggle(true), [])
  const off = useCallback(() => setToggle(false), [])
  const toggle = useCallback(() => setToggle((prev) => !prev), [])

  // props로 받은 initalValue값에 따라, 초기값 설정
  // [initialValue]: 초기값이 바뀔 때 마다, 실행
  useEffect(() => {
    setToggle(initialValue)
  }, [initialValue])

  // 배열로 내보냄 > 현재 상태, 동작 객체
  // const: 배열과 타입 고정해줌
  return [isToggle, { on, off, toggle }] as const
}
