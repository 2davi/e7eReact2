
import {useEffect, useState, useRef} from "react";
import Idol from "./Idol.jsx";
import axios from "axios";

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
const avatarURL = "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=";

function App() {
  const [idols, setIdols] = useState([]); //서버에서 데이터가 오기 전에는 빈 값
  const idSequence = useRef(100);         //그냥 100
  const aform = useRef(null);
  let [idfBool, setIdfBool] = useState(true);
  let [namefBool, setNamefBool] = useState(false);
  let [agefBool, setAgefBool] = useState(false);
  const idf = useRef(null);
  const namef = useRef(null);
  const agef = useRef(null);
  const direct = useRef(null);
  
  useEffect( () => {
    // 여기서 비동기 처리
    
    //useEffect가 없으면 데이터 가져오는 중에 jsx return;을 해야 하니깡
    //데이터가 제대로 나올 리 없음!, 그래서 Side Effect라 부름
    //네트워크 탭의 throttling을 이용해서 속도를 낮추면 
    fetch(serverURL, defaultHeader)
      .then(resp => resp.json().then(rslt => {
        rslt.sort((a,b) => {
          if(Number(a.id.substring(1))<Number(b.id.substring(1))) return 1;
          return -1;
        })
        setIdols(rslt);
        idSequence.current = Number(rslt[0].id.substring(1));
        direct.current.innerHTML = "";
      }));

    return () => {
    }
  }, [])

  const addIdol = event => {
    event.preventDefault();                   //SPA에선 form전송 안 함^0^

  /*  기존 방식대로 사용해도 무방하나,
      리액트에선 FormData를 자주 쓰는 경향이 있음.. (그저 코딩스타일 문제)
      나중에 파일도 포함할 때 편해짐!
    let sForm = e.currentTarget;
  */let formData = new FormData(event.target);
    console.log("체킁: ", formData.get("iname"))
    console.log("체킁: ", formData.get("iage"))

    idSequence.current++;
    let newIdol = {
      id: `I${idSequence.current}`,
      name: formData.get("iname"), 
      age: formData.get("iage"), 
      avatar: `${avatarURL}${formData.get("iname")}`
    }
    //setIdols([ newIdol, ...idols ]);      //자동으로 Re-Rendering

  /*
    fetch(serverURL, {
      method: "POST",
      headers: {
        ...defaultHeader
      },
      body: JSON.stringify(newIdol)
    })
    .then(resp => resp.json())
    .then(rslt => setIdols([rslt, ...idols]));  //앞에 넣기, 이미 서버에는 추가되었음.
  */axios.post(serverURL, newIdol)
    .then(resp => {
      //자동 try/catch + JSON.parse 작업 병행
      setIdols([resp.data, ...idols]);
    })
  }

  const schIdol = () => {
    let sForm = new FormData(aform.current);
  /*  검색한 id만 나오겡... 제한시간 후다닥: 이젠 몇 번 했지용!
    let searched = idols.filter( idol => idol.id === sForm.get("iid"));
    setIdols(searched);

      만약 삭제다... 그렇다면 제한시간 10초
    setIdols(idols.filter( idol => idol.id !== sForm.get("iid")));
  */
  /*fetch(`${serverURL}/I${sForm.get("iid")}`)
    .then(resp => resp.json())
    .then(schIdol => setIdols([schIdol]));
  */axios.get(`${serverURL}/I${sForm.get("iid")}`)
    .then(resp => setIdols([resp.data]));
  }

  const idFilter = () => {
    if(!idfBool){
      idols.sort((a,b) => {
        if(Number(a.id.substring(1))<Number(b.id.substring(1))) return 1;
        return -1;
      })
      direct.current.innerHTML = "ID 내림차순 정렬";
    } else {
      idols.sort((a,b) => {
        if(Number(a.id.substring(1))>Number(b.id.substring(1))) return 1;
        return -1;
      })
      direct.current.innerHTML = "ID 오름차순 정렬";
    }
    console.log(direct);
    setIdols([...idols]);
    setIdfBool(!idfBool);
    setNamefBool(false);
    setAgefBool(false);
  }

  const nameFilter = () => {
    if(!namefBool){
      idols.sort((a,b) => {if(a.name>=b.name) return 1; return -1;})
      direct.current.innerHTML = "이름 오름차순 정렬";
    } else {
      idols.sort((a,b) => {if(a.name<b.name) return 1; return -1;})
      direct.current.innerHTML = "이름 내림차순 정렬";
    }
    setIdols([...idols]);
    setIdfBool(false);
    setNamefBool(!namefBool);
    setAgefBool(false);
  }
  const ageFilter = () => {
    if(!agefBool){
      idols.sort((a,b) => {if(a.age>=b.age) return 1; return -1;})
      direct.current.innerHTML = "나이 오름차순 정렬";
    } else {
      idols.sort((a,b) => {if(a.age<b.age) return 1; return -1;})
      direct.current.innerHTML = "나이 내림차순 정렬";
    }
    setIdols([...idols]);
    setIdfBool(false);
    setNamefBool(false);
    setAgefBool(!agefBool);
  }

/*  db.json 파일이 변하는 것을 개발 서버가 파일 watching 서비스를 통해 서버 Restart!!

*/

  return (
    <>
      <div>
        <form onSubmit={addIdol} ref={aform}>
          아뒤: <input type="text" name="iid" defaultValue={""}  placeholder=" I뒤 숫자만 입력"/><br/>
          이름: <input type="text" name="iname" defaultValue={"e7e"} required /><br/>
          나이: <input type="number" name="iage" defaultValue={20} required /><br/>
          <button type="submit">추강</button>
          <button type="button" onClick={schIdol}>껌색</button>
        </form>
      </div>
      <div>
        <span onClick={() => {idFilter()}}  ref={idf}> 아뒤순 </span> |
        <span onClick={() => {nameFilter()}}ref={namef}> 이름순 </span> | 
        <span onClick={() => {ageFilter()}}  ref={agef}> 나이순 </span> || 
        <span ref={direct} className="text-[10px]"></span>
      </div>

    { idols.length ==0 && (<h1>아이돌 오딨엉?</h1>)
    }

      <h1>삐동기 ♡( ◡‿◡ )</h1>

    { idols.length != 0 && idols.map(idol => (
        <Idol key={idol.id} iid={idol.id} name={idol.name} age={idol.age} avatar={idol.avatar} />
      ))
    }
    </>
  )
}

export default App
