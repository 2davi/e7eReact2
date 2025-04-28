
// 보통 요 상태에서 시작하게 됨!~
function App() {
  /*
    html태그가 html태그가 아님!
    JSX => 어떤 사람은 Javascript Syntax eXtention
           어떤 사람은 Javascript XML 이라 부름
           원래 자바스크립트 내에 아래 return문처럼 쓰면 에러가 남!
           이걸 여러분 몰래 바꿔주는 아이가 있음 babel.js가
           부모 자식 관계 json형식으로 바꾸어 줌!
           babeljs.io/repl
  */
  return (
    //<div class="aaa">
    //Invalid DOM property `class`. Did you mean `className`?
    <div className="aaa">
      <h1>저장하면 바로 반영^0^</h1>
    </div>
  /*
  import { jsx as _jsx } from "react/jsx-runtime";
  _jsx("div", {
    className: "aaa",
    children: _jsx("h1", {
      children: "\uC800\uC7A5\uD558\uBA74 \uBC14\uB85C \uBC18\uC601^0^"
    })
  });
  */
  )
}

export default App
