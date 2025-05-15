

function MyLink({to, children}) {

  // a 태그 클릭마다 페이지를 다시 가져오기
  // (물론 캐시된 걸 가져올 때도 있음)
  const kdMove = event => {
    event.preventDefault(); //머든 내가 추가하지 않은 이벤트 기능은 이걸로 다 막을 수 있음.
    //요청 전송이 아무것도 안 됨 => 요것이 내가 원했던 바야.
    //근데 주소표시줄 값도 안 바뀜 +> 우린 바꾸고 싶엉
    //window 객체에 포함된 history객체를 이용할 수 있음
    //직접 쓰기는 아주 귀찮은 객체, 보통 history.go(2)
    //url을 서버에 요청하지 않고 수정할 수 있는 기능
    //그냥 한번 보는 걸로 만족해도 충분하니 부담없이~
    history.pushState({}/*null*/, "", to); //url만 바꾸기
    //여기서 또하나의 문제, url이 바뀌었다는 사실을 알아야 함
    //라우트 처리를 하기 위해, 강제 이벤트를 발생시킬 필요가 있음.
    //이해를 위한 부분이니, 편한 마음으로 보면 됨
    // react-router에 다 되어 있는 내용임.

    //1. 앞으로/뒤로 할 때 발생하는 이벤트 === PopStateEvent
    const hjEvent = new PopStateEvent("merong");

    //2. 이벤트를 강제 발생시킴
    //이제 다른곳에서 이 이벤트를 들을 수 있다.
    window.dispatchEvent(hjEvent);

    
  }

  return (
    // tailwindcss를 쓰면 훨씬 편하지만 임시롱
    <div style={{display:"inline-block", margin:"10px", border:"2px solid black"}}>
      <a href={to} onClick={kdMove}>
        {children}
      </a>
    </div>
  )
}

export default MyLink