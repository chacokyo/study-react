## state 변경

- state에 저장된 값은 읽기 전용 > 값을 교체하기 위해선 리렌더링이 필요
- 객체인 경우 변경 대신 **교체**

## 객체 전개 구문

```js
setHamster({
  ...hamster, // 이전 필드 복사
  name: 'jisu', // 새로운 부분 덮어 쓰기
})
```

- 객체 전개 구문을 사용하면 모든 프로퍼티를 각각 복사 안해도 됨

## 중첩된 객체 구조

```js
const [hamster, setHamster] = useState({
  name: 'jisu',
  lifeCycle: {
    day: 'sleep',
    week: 'kill you',
  },
})
```

```js
const newHobby = { ...hamster.lifeCycle, week: 'eat' }
const newHamster = { ...hamster, lifeCycle: newHobby }
```

- hamster.hobby.week 수정 > 새 객체 생성

```js
setHamster({
  ...hamster, // 수정 안하는 부분 복사
  lifeCycle: {
    ...hamster.lifrCycle, // 수정 안하는 부분 복사
    week: 'eat', // 수정
  },
})
```

- hamster.hobby.week 수정 > 함수 호출

## Immer

- React 법칙 깨고 객체 변경 가능
- draft: proxy라고 하는 객체 타입 > 기록
