## useCallback

: 불필요한 재계산 방지

- 참조 안정성이 필요한 경우

## 의존성 배열

### [state]

```ts
const [count, setCount] = useState(0)
const plus = useCallback(() => {
  setCount(count + 1)
}, [count])
```

- 최신 상태: 현재 변수값 기준
- count를 직접 수정 > 의존성 배열에 넣기

### []

```ts
const plus = useCallback(() => {
  setCount((prev) => prev + 1)
}, [])
```

- 최신 상태: 리엑트가 알아서 넣어줌
- prevState 패턴

## useCallback VS useMemo

: 메모리 저장 대상이 다름

```ts
const [count, setCount] = useState(0)

const callValue = useCallback(() => {
  console.log(count)
}, [count])

const memoValue = useMemo(() => count + 3, [count])
```

- useCallback: 함수 자체 기억
- useMemo: 반환 값 기억
