
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

//사용법은 생각외로 간단 context 생성 -> Provider 설정 -> value에 초기값
// 근데 안타깝게도 요런 형태로 안 쓰고, 관례적으로 많이쓰는 형태가 정해져 있음

export const ysContext = createContext(); // context 생성 context ~= 시청
const initVal = { name: "아린", pos: "반장" };
const hjInsa = pName => alert(`${pName} 안농`);

createRoot(document.getElementById('root')).render(
  //컨텍스트에 접근할 필요가 있는 걸 Provider로 둘러싸준다.
  <ysContext.Provider value={{sjInfo:initVal, sjInsa:hjInsa}}>
      <App />
  </ysContext.Provider>
)
