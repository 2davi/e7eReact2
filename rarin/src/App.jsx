
import {useEffect, useState} from "react";

/*  전에는 여기에 가짜 데이터 배열을 만들어서 뿌렸는데
    실제는 그럴리가 없지용, 서버에서 데이터를 받아서 뿌려야지용 ㅗ^ㅃ^ㅗ
    그러면 백엔드 구성해야 되는뎅, 귀찮앙!
    실제 프론트와 백엔드가 나뉘어서 작업되는 경우에는
    RESTful URL만 약속되어 있다면, 프론트 개발자는 백엔드 개발자 도움 없이
    자기만의 작업 진행이 가능해야 함! ==> 작업의 결합도를 낮추어야 함!
    나름의 개발환경을 구축해서(백엔드 페이크) 작업을 진행하게 됨!
*/
const serverURL = "http://localhost:8272/idols";
const defaultHeader = {"accept":"application/json;charset=utf-8", "content-type":"application/json;charset=utf-8"};

function App() {
  const [idols, setIdols] = useState([]);
  useEffect( () => {
    // 여기서 비동기 처리
    
    fetch(serverURL, defaultHeader)
      .then(resp => resp.json().then(rslt => setIdols(rslt)));

    return () => {
    }
  }, [])

  return (
    <>
      <h1>삐동기 ♡( ◡‿◡ )</h1>
      {idols.map(idol => (
          <div key={idol.id}>
            <img src={idol.avatar} width={50}/>
            <h1>{idol.name}</h1>
            <h2>{idol.age}</h2>
          </div>
        ))}
      
    </>
  )
}

export default App
