import React from "react"
import Idol from "./components/idol.jsx"

function App() {

  return (
    <React.Fragment>
      <div>
        <h1>철민 리액트 시작</h1>
        <Idol name={"로제"} age={27} song={"APT"} />
        <Idol name={"카리나"} age={26} song={"위플래쉬"} />
        <Idol name={"제니"} age={28} song={"Solo"} />
      </div>
    </React.Fragment>
  )
}

export default App
