
//이 파일이 왜 소문자로 시작해야 하느냐면
//return(jsx)가 없음, React는 대문자로 시작하면 JSX 컴포넌트
//DOM 형태로 가정해 버림

import { createContext, useContext } from "react";

export const TasksContext = createContext();
export const TasksDispatchContext = createContext();

// 요 아래 2개 use로 시작하는 함수를 만들었음
//요렇게 만든 걸 커스텀 훅 이라고 부름
// 요건 나중에 일반적인 만드는 규칙이 있으니, 지금은 그저 커스텀 훅 이란 단어만!
//주의문: 리렌더링의 영향을 받을 수 있으니 새로운 파일로 빼내란 뜻
//보통은 hook이란 폴더를 만들어서 별도 파일로 만듦... 노란줄의 의미가 그것

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}