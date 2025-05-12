import React, { useContext } from 'react'
import { ysContext } from './main'

/*
  뽀인또는  main -> App -> Merong으로 데이터를 전달하는 방식이 Props가 아니라는 것!
  useContext 훅을 사용해서 바로 전달!!
*/
function Merong() {
  // const {name, pos} = useContext(ysContext);
  // const cyInsa = useContext(hjContext);
  //배열 구조분해 => 순서로 바인딩 (변수명은 상관없음)
  //객체 구조분해 => KEY 값으로 바인딩 (순서는 상관없음)
  //const {sjInfo, sjInsa} = useContext(ysContext);
  //객체 안의 객체 구조분해
  const {sjInfo:{name, pos}, sjInsa} = useContext(ysContext);
  return (
    <>
      <h1>{name}</h1>
      <h2>{pos}</h2>
      <button onClick={ () => {sjInsa(name)} }>눌렁</button>
    </>
  )
}

export default Merong