## 다음 렌더링 전 동일한 state 변수를 여러 번 업데이트하는 방법

- setNumber(n => n + 1)
- 이전 큐의 state를 기반으로 다음 state를 계산하는 함수를 전달.
- 단순히 state 값을 대체하는 것이 아니라 React에 “state 값으로 무언가를 하라”고 지시.
