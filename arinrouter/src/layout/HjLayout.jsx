import { Outlet } from "react-router"


function HjLayout() {
  return (
    <div>
      <h1>현정 헤덩</h1>
      <h1>그래 헤덩</h1>
      <hr />
      <div style={{border: "10px groove gold"}}>
        <Outlet />
      </div>
    </div>
  )
}

export default HjLayout