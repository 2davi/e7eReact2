import {Outlet, useNavigate} from 'react-router'

function Yesol({gibun}) {
  const navigate = useNavigate();
  const birCk = () => {
    //location.pathname은 읽기용으로만.
    //navigate("/birth", {state: {name:"찬영", age:28}});
    navigate("/birth?name=성운&age=28");
  }
  const wedCk = () => {
    //navigate("/wedding", {state: {name:"창녕", age:17}});
    navigate("/wedding?name=성ㅇ운&age=19", {state:{msg:"메롱"}});
  }


  return (
    <>
      <h1>오늘 예솔은 {gibun} 하다</h1>
      <button onClick={/*()=>location.href="./birth"*/birCk}>생일확인</button>
      <button onClick={/*()=>location.href="./wedding"*/wedCk}>결혼확인</button>
      <Outlet />
    </>
  )
}

export default Yesol