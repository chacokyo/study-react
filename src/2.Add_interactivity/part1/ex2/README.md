## 이벤트 핸들러

```js
function Hamster() {
	const handleClick() {
		alert('kill you')
	}

	return (
		<button onClick = {handleClick}>hamster is killer</button>
	)
}
```

- 주로 컴포넌트 내부에서 정의
- 함수명: handle + 이벤트명

```js
<button onClick={function handleClick() { alert('kill you')}}>
```

```js
<button onClick = {() => { alert('kill you')}}>
```

- 인라인 정의, 화살표 함수로 정의 가능

```js
function hamster({ message, children }) {
  return <button onClick={() => alert({ message })}>{children}</button>
}
```

- 컴포넌트 내부에서 선언된 이벤트 핸들러는 해당 컴포넌트의 prop에 접근 가능함

## e.stopPropagation()

```js
<button onclick = {e => {e.stopPropagation()}}>
```

- 이벤트가 부모 컴포넌트에 닿지 못하도록 전파 방지
- bubbling 방지

## e.preventDefault()

- 기본 브라우저 동작을 가진 이벤트의 기본 동작을 실행하지 않도록 방지
