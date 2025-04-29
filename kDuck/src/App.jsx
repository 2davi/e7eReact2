import Friend from "./Friend"

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
           JSX가 있으면 파일명은 대문자로 시작
           단순히 자바스크립트만 있으면 소문자로 시작
           JSX를 컴포넌트라 부름!, 조립식으로 프로그램하기 위해
           컴포넌트 개념을 구현
           JSX 컴포넌트의 속성은 매개변수로 동작하게 됨
           컴포넌트를 만들면 반복적으로 재호라용이 가능해 진당.
           (바뀌는 부분에 대한 사전 정의가 필요)

           컴포넌트의 일반적 Rule => 복잡한 컴포넌트는 Top-down 방식으로(설계그림을 먼저)
                                     심플한 컴포넌트는 Bottom-Up 방식으로(직관적으로 해도 무방)
  */
  return (
    //<div class="aaa">
    //Invalid DOM property `class`. Did you mean `className`?
    <div className="aaa">
      <h1>저장하면 바로 반영^0^</h1>
      <Friend name={"수태"} age={10} />
      <Friend name={"철민"} age={30} />
      <Friend name={"상진"} age={20} />
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
