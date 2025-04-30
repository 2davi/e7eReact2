import React, { useRef, useState } from "react"
import Idol from "./components/Idol.jsx"
import { v4 as uuidv4 } from 'uuid';

const idols = [
  {id: 1, name:"현정", age:23, song:"종이비행기"},
  {id: 2, name:"학범", age:23, song:"학교종이땡"},
  {id: 3, name:"예솔", age:22, song:"솔로"},
  {id: 4, name:"상윤", age:25, song:"나는야 예비군"},
  {id: 5, name:"찬영", age:23, song:"잘못된 만남"},
  {id: 6, name:"태규", age:19, song:"맨날 술이야"}
];

function App() {
  const [myIdols, setMyIdols] = useState(idols);
  const [show, setShow] = useState(false);
  const txtName = useRef(null);
  const txtAge  = useRef(null);
  const txtSong = useRef(null);
  const newIdol = () => {
    setShow(!show);//Toggle, reRendering 유발
  }
  const regIdol = () => {
    let newIdol = {
      id: uuidv4(), //삭제하거나 하면 문제발생 소지, 그냥 uuid사용! 신경쓰기 싫음!
      name: txtName.current.value,
      age: txtAge.current.value,
      song: txtSong.current.value,
    }
    console.log(newIdol);
    setMyIdols([...myIdols, newIdol]);
    clearInputs();
  }

  const remIdol = () => {
    // 이름 텍스트박스에 있는 idol 지우깅
    // 제한시간 3분!!
    // 힌트: filter
    
    // map, filter는 원래 return하는 게 새 배열임! filter 어제도 하고
    // filter 메소드 자체를 이전에 전부 구현해 보았는데, 상진이가 힌트를 달라함
    // 양심도 없음! 기존 것을 잘하는 사람, 첨보는 문제 해결해는 창의성 모두 중요!
    // filter는 true면 새 배열에 담고, false면 제외시킴. 새 배열을 반환함.
    setMyIdols( myIdols.filter( idol => idol.name !== txtName.current.value ));
    clearInputs();
  }

  const remIdolAgeOver = () => {
    setMyIdols( myIdols.filter( idol => idol.age < txtAge.current.value ));
    clearInputs();
  }
  const clearInputs = () => {
    txtName.current.value = "";
    txtAge.current.value = "";
    txtSong.current.value = "";
  }

  
  return (
    <React.Fragment>
      <div>
        <h1>철민 리액트 시작</h1>

        {/* 아래처럼 함수를 호출하는 방법도 꼭 알아두어야 함. bind의 뉘앙스! */}
        <button onClick={() => {newIdol()}}>새 아이돌 등록</button>
        <div style={{display:show?'block':'none'}}>
          이름: <input type="text" ref={txtName} /><br/>
          나이: <input type="text" ref={txtAge} /><br/>
          노래: <input type="text" ref={txtSong} /><br/>
          <button onClick={regIdol}>추강</button>
          <button onClick={() => {remIdol()}}>테스통</button>
          <button onClick={() => {remIdolAgeOver()}}>테스통2</button>
        </div>

        { 
        
        myIdols
        .sort((a,b) => { if(a.name>b.name) return 1; return -1;})
        .map(({id, name, age, song}) => (
          <Idol key={id} name={name} age={age} song={song} />
        ))
        }

      </div>
    </React.Fragment>
  )
}

export default App
