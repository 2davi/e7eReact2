import React from "react"
import Idol from "./components/Idol.jsx"
import Counter from "./components/Counter.jsx"
import Counter2 from "./components/Counter2.jsx"
// 현재 리스트 뿌리는 방법은 아주 저수준 ㅗ^ㅂ^ㅗ
// 100명의 아이돌이 있으면 100번 복사/붙여넣기 해야 함
// 있어보이기 위해 가짜 데이터 304호 아이돌들
// 항상 DB의 PrimaryKey처럼 고유한 값을 하나 주는 것이 좋다.(콘솔창에 에러 뜸)

const idols = [
  {id: 1, name:"현정", age:23, song:"종이비행기"},
  {id: 2, name:"학범", age:23, song:"학교종이땡"},
  {id: 3, name:"예솔", age:22, song:"솔로"},
  {id: 4, name:"상윤", age:25, song:"나는야 예비군"},
  {id: 5, name:"찬영", age:23, song:"잘못된 만남"},
  {id: 6, name:"태규", age:19, song:"맨날 술이야"}
];

// 나ㅏㅁㄴ 하면 재미없고, 졸고
// 위 데이터 중 age가 23인 사람만 뿌리깅, 제한시간 3분! GO
// 힌트: 일단 filter가 들어가야 함!
// filter 기억에서 지운 사람들... return 값이 true면 담고, false면 담지 않음
// 뽀인또는 filter만 쓰면 안 되고, filter 뒤에 map도 써야 함
// filter와 map의 역할이 느낌적인 느낌으로 다가오길!
// 혹 forEach, filter, map, sort 기억 안 나면, 전에 수업했던 내용 확인
// 배열의 메소드를 직접 만들어본 내용을 보면 무슨일이 있었는지 알 수 있음
// 화면에 리스트 뿌릴 때, 미친듯이 많이 사용되는 표현이니 꼭 알아야 하고
// 제대로 쓰려면 배열의 map/ filter/ sort 함수는 꼭 알아야 함

// 다음문제.. 이름 순으로 정렬해서 뿌리시옹. 제한 시간 3분!ㅠㅠ
// sort는 콜백에 넘어가는 매개변수가 다름, index로 넘어가지 않음
// 상진이 미웡웡, 엄청 많이 쓴다고 한 건 꼬옥 잠시 시간내서 복습!!
// - 굳이 sort를 jsx 안에서 할 필요는 없음
// function 키워드와 return 사이가 가장 자바스크립트를 편하게 쓸 수 있는 곳 => ***

function App() {

  //***잊지 말깅! 바로 요기!
  // 본인 소스를 본인이 리팩토링 해볼 때 가장 실력이 많이 늘어남!
  // 자주 리팩토링을 시도해 보깅!^0^
  idols.sort((idolA, idolB) => idolA.name > idolB.name ? 1: -1 );
    // if(idolA.name > idolB.name) return 1;
    // return -1;

  return (
    <React.Fragment>
      <div>
        <h1>철민 리액트 시작</h1>
        <Counter2 />

        <Counter />
        <Counter />
        <Counter />
          { 
          idols.map(({id, name, age, song}) => (
            <Idol key={id} name={name} age={age} song={song} />
          ))
          }
        {/*
          // 배열에서 잊지 말아야 할 메소드 map, filter, sort
          // 화솰표함수 블록 안에 return밖에 없으면 return과 중괄호 생략 가능.
          // map과 filter는 새로운 배열을 리턴한다. 원본은 건들지 않는다.
          // idols.map(({id, name, age, song}) => (
          //   <Idol key={id} name={name} age={age} song={song} />
          // ))
          idols.filter(idol => idol.name !== "학범")
            
            // if문 안의 값 자체가 조건문이라서 true 아니면 false임, 기억나나
            // 1)
            //   if(idol.age == 23) return true;
            //   else return false;
            // 2)
            //   idol.age === 23 ? true : false
            // 3)
            //   idol.age === 23
            
            // .map(({id, name, age, song}) => (
            //   <Idol key={id} name={name} age={age} song={song} />
            )
          )
        */
        /*
          idols.sort((a, b) => {
            if(a.name>b.name) return 1;
            else return -1;
          }).map(({id,name,age,song}) =>
              (<Idol key={id} name={name} age={age} song={song} />)
          )
        */
        }
        {/* html 주석달면 안 됨, 스크립트로 해석되기 때문!
        <Idol name={"로제"} age={27} song={"APT"} />
        <Idol name={"카리나"} age={26} song={"위플래쉬"} />
        <Idol name={"제니"} age={28} song={"Solo"} />
        */}
      </div>
    </React.Fragment>
  )
}

export default App
