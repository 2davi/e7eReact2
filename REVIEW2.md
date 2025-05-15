
# 리액트

## 0428

react / vue/ angular 요즘 svlet까지!
프론트 프레임워크라 불림(react는 라이브러리라 하는데 상관 없음)

문제는 프론트 프레임워크를 사용해야 할 때
많은 추가 라이브러리들이 필요함!
일일이 개발자가 할 수도 있는데, 그럼 하기 싫어짐.

보통 node를 설치하는 것부터 시작함!
node? => 설치하면 **OS 위에서 자바스크립트를 사용할 수 있음**
node ???.js 식으로 사용할 수 있음
보통은 node 자바의 JRE(Jave Runtime Environment)에 비유함

- Javascript Runtime
  실질적으로 보면 javac/java 가 하는 일을 한 번에 하지용^0^
  (인터프리터 방식이니깡^ㅂ^)
  근데 실질적으로는 node보다 node가 가진 npm이란 tool이 더 필요해서 node를 설치하는 것임.
  npm(node package manager) 자바의 maven이나 gradle에 비유할 수 있음
  (모듈 설치 삭제를 아주 편하게 해줌)

- nvm (Node Version Manager)
  node는 버전이 엄청나게 많은데, 구닥다리 버전으로 제공되는 좋은 소스들도 많아서,
  보통은 여러 버전을 설치해서 사용.
- 검색어: `nvm window github` `https://github.com/coreybutler/nvm-windows`

- cmd 명령어(cls:clear),, 사용 시 관리자 모드로 해야 한당.
  => 한가지 여기서만 주의. 여러분 OS가 정품이 아니고 렌탈이라서 PowerShell이
     제대로 안 먹는 경우가 꽤나 많고, 정책 변경이 안 됩니다. CMD를 쓰세용!
  nvm ls available
  nvm ls
  nvm install (버전)*-> package.json에 작성된 dependencies(modules)를 설치함.
  nvm uninstall (버전)
  nvm use (버전)*
- 크게 node 서버를 만들려고 하는 것인가, npm이 목적인가 식으로 물어봄
  npm init
  npm init -y ((질문 없이 자동생성))*
  npm run 스크립트명
  echo ...
  *start와 test는 run 명령을 생략하고도 실행이 가능하다.

- 자바에는 maven repository가 있다면 node에는 npmjs가 있음
- 버전을 표시할 때 세만틱(semantic,의미적인; ^ || ~)
  ^는 최상위만 안 바뀌면 된당.(첫 자리 메인 버젼은 무조건 고정시켜라. (하위업데이트 OK))
  ~(틸드)는 마지막 것만 바뀔 수 있당/(오직 마지막 자리수만 달라질 수 있다.)
- 프로젝트에서 라이브러리의 패키지 파일들(node_modules)은 제외한다. (무겁기만 함)
  받은 사람은 npm i만 치면 package???.json 파일을 토대로 하여
  필요한 요소들을 다 다운받게 됨!
- Git에도 node_modules는 올리지 않는당.
  올리는 순간 idiot(팔푼이)라고 스스로 인정하는 꼴!

- CRA => Create-React-App => Meta(구 페이스북)에서 만든 tool
  React개발을 위한 StepFolding 베이스 코드 생성
  망함 => Meta에서도 느리고, 문제가 많아서 안 쓴다 함.
- Vite (vue.is를 만든 사람이 만듦): 요즘 대부분 사용!
  우리도 이걸 사용할 것임
  `npm create vite@latest .`  *
  `npm install`*
  `npm run dev`  *
  `o`*(브라우저 열기)

- 프론트 프레임워크:
  *SPA: Single Page Application  (index.html)

- HMR: Hot Modul Reload, 변경된 모듈(script)을 바로 reload한다~

- JSX Component: `functional component`
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

- rfce: ReactFunctionComponentExport 단축어*
- rafce: af==ArrowFunction 단축어

### kDuck _friend.jsx

/*
  function키워드와 화살표함수를 쓰는 조합은 각각이어서
  앞으로 우리는 바깥쪽은 function, 내부 함수는 ArrowFunction 으로 만들어
  가독성을 유지하도록 하겠음0^0.
*/
// JSX 안에서는 {}를 이용하여 자바스크립트를 사용할 수 있음
// 처음엔 쪼메 낯설음, 이거이 자바스크립트야, css얌?

// 다른 이름으로 해도 되지만, 그냥 모두 Props라고 함
// Props를 써도 되는데, 써야 될 때도 있고,
// 보통은 Props를 쓰면 없어 보임, 구조 분해를 적용해 봅시당. 코드가 예뻐짐
// 부모 만드느라 때론 의미없는 div로 묶어주는 경우가 많았음
// 그래서 React.Fragment를 맹글어 주었는데, 너무 길당. 길면 기차!
// 최종 <></>로 낙찰!
// <React.Fragment></React.Fragment> === <></>

### kDuck _App.jsx

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
           컴포넌트를 만들면 반복적으로 재활용이 가능해 진당.
           (바뀌는 부분에 대한 사전 정의가 필요)

           컴포넌트의 일반적 Rule => 복잡한 컴포넌트는 Top-down 방식으로(설계그림을 먼저)
                                     심플한 컴포넌트는 Bottom-Up 방식으로(직관적으로 해도 무방)

## 0429

npx => Node Package eXecutor
       어떤 모듈은 그냥 한번만 실행시키고, 설치할 필요가 없을 때 사용.
       npmjs 사이트에서 임시로 다운로드 받아 실행시키고 설치는 안 됨.
       `npx create-vite@latest .`*

- 항상 시작은 index.html이다.
- 코드 어시스턴트를 LINT라고 부른다. ^0^
- 사용자가 만든 컴포넌트에는 className을 줄 수 없다.

요즘 React에서 css 대세는 크게 2가지
  tailwindcss
    - css계의 게임체인저로 불림!(프론트 프레임워크에서 쓰면 아주 편함)
    - 우리는 tailwindcss를 쓸 것임!
    - 왜? mui는 그냥 할 수 있음(그저 시간만 필요)
    - tailwindcss는 직접 할 수 있고, 또 인터넷상에도 tailwindcss를 이용한 컴포넌트들이 아주 많이 있음(유료도 있음)
    - flex, grid를 아랑두어야 훨씬 더 잼나게 쓸 수 있음
    - flex, grid 안 읽은 사람은 이김에 읽어보자궁!^0^
    `https://studiomeal.com/archives/197`
  mui
    - 구글의 matial ui 디자인이 돈이 될 것 같으니 아예 회사를 차려서 나옴(무료|유료 존재)
    - 이것이 유명한 이유는 개발자는 실제 css를 거의 하지 않아도 됨
    - 이미 컴포넌트들이 예쁘게 만들어져 있음!

- 1.tailwindcss 설치 `npm i tailwindcss @tailwindcss/vite`
- 2.vite.config.js에 tailwind 추가 `plugins: [react(), tailwindcss()],`
- 3.css 파일에 `@import 'tailwindcss';`
- tailwindcss cheat sheet 로 검색해서, 시간날 때 앞단어만 대략 기억해 둠.
  나머진 자동완성이 알아서 도와서 결국 잘 쓰게 해줄 것임

- 훈수꾼 설정 파일이 제대로 동작하려면 역시 확장프로그램이 필요(eslint.config, ESLint)
- 코딩 시에 훈수를 남발해줌. 나중에 추가 제어(커스터마이징이 살짝 필요)
- 초기에 많이 부담되면 사용 안 함으로 두면 됨!
- react-developer-tool은 지금은 별로일 것 같은데,
  컴포넌트 tree구조가 복잡해지면 전체 구조를 파악하는 데
  아주 유리함(당신이 새로운 프로그램을 유지보수해야한다면 이것으로
  전체 구조를 빨리 파악할 수 있음)
- Profiler는 성능 평가를 할 때 사용하게 되는데 지금은 무시

- 나중에 리스트 뿌리는 걸로 3G로 하면, 다시 그려지는 게 눈에 보임
  현재는 그저 변수 1개라 3G로 보아도 인간의 눈으로 확인이 불가 ㅠ^ㅜ

- nvm => Node multi-Version Manager
- npm => 모듈(패키지) 설치 삭제 편하게
- npx => Node Package eXecutor 설치 없이 실행
  `npm create vite@latest .` --> `npx create-vite@latest .`
  자주 씀
- hook => 이름은 use****로 시작한당. 편하게 쓰라고 제공되는 함수당.
  return되는 걸, 구조분해를 이용해서 쓴당
  `useState()` => `const [변수명, set변수명] = useState(초기값);`
  상태관리를 위한 hook, set을 이용해서 값을 바꾸면
  re-rendering(이것이 프로그램 스타일을 바꾸게 만듦)된당.
- 굳이 급할 필요 없음, 페이스북 엔지니어/개발자들도
  편해지는 데 3개월 정도 걸렸다고 하닝, 그저 자주쓰면 익숙해짐
  보통은 작은 규모에서 많이 쓰고, 규모가 커지면 redux란 걸 씀.
  redux를 쓰는 걸 강요하는 회사도 많음.

## 0430

- public 폴더는 home 디렉토리로 동작
  html로 무언가 간단하게 확인하고픈 것이 있다면 만들어서 테스트
  배포할 땐 필요없으면 정리

- JS Closure

- Heap & Stack의 차이
  Stack: 임시로 쓰고 버릴 곳
  Heap: 프로그램이 종료될 때까지 간직할 곳

- useState / useRef 기본 Hook이니 꼭 잘 써야 하고,
  벌써 몇 번째 배열의 메소드 map/filter/sort 심장에 느낌이 와 있어야 함

- `useState()` => const [변수명, set변수명] = useState(init)
  변수명값을 직접 바꾸지 않고, 꼭 set을 이용해서 바꾼다.
  **주의: 변수가 객체일 때, set에 주는 값은 새 객체여야 한당**
  프로그램 스타일이 기존 방식에서 바뀌는 부분에 (이왕이면)빨리 익숙해져야 함

- `useRef()` => tag랑 일반변수(Re-Rendering -> 화면다시그리기 를 유발하지 않는 변수)
  re-rendering 느낌이 오면 react 이미 70점 이상!
  오늘까지 한 거에 비동기 개념은 하나도 적용 안 되어 있음
  내일 비동기를 위해 태어난 useEffect Hook을 할 것임!

- 배열의 메소드 => 콜백 쓰는 거, map/ filter/ sort
                   아직 연습이 덜 된 사람들 꼭 연습해 둡시다^0^
                   (안다 / 모른다 의 문제가 아님. 그것은 변명! ㅗ^ㅂ^ㅗ)
                   별 거 없음 => 하루에 한 개라도 익히면 그걸로 충분!
                   학범?

## 0501

- --host

{
  "scripts": {
    "start": "host",
    "dev": " --hostvite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}

- MOUNT/ UNMOUNT/ UPDATE ==> `useEffect()`라는 hook 하나로 처리한다.
  mount: 장착
    비동기로 하게 되면 mount가 조금 늦게 이루어진다.
  unmount: 분리

- 기본키/외래키 사용의 목적을 물으면, `검색효율`이 가장 먼저 나와야 함

- `npm install -D @faker-js/faker`
  D가 의미하는 바::
    dependency / devDependency 중 개발환경에서만 필요한 녀석이니 dev*에 놓겠다

- useEffect() => Side Effect => 비동기 사용하라고 만들어 준거
              => 두 번째 매개변수 => 디펜던씨 => 대괄호 누구야?
              => 세 가지 경우의 수
              =>: 매개변수 없으면 => Re-Rendering될 때마다 실행
              =>: [], 딱 한 번만 처음 Rendering될 때
              =>: [aaa, bbb] aaa, bbb가 바뀔 때마다 실행

- useState, useRef, useEffect 요거 세 개만 알아도 리액트로 필요한 걸 만들 수 있음..
  앞으로 나오는 것들은 여기서 파생되었다고 봐도 무방

- JSON-Server랑 Faker-js
  가짜 데이터 RESTful 서버 만들어서 사용할 때 유용
  JSON-Server는 Cross-Origin 설정이 해제되어 있어서 CORS에러가 발생하지 않음
  (의식했따면 아주 훌륭!)

- 모바일에서 많이 쓰는 무한스크롤 2가지 케이스를 할 건데
  2번째 케이스를 연휴 기간동안 리액트로 한 번 만들어 봅니다.
  안 되도 괜찮아요요

## 0507

- 휴일동안 책 읽은 사람 => 한번 꼭 시간내서 읽어보길
                           거의 배운 내용보다 수준이 낮아서 정리개념으로...
- 읽어보았다면 버추얼돔 virtual DOM vs read DOM => 실제 코딩에는 상관 없는데
  자동으로 되니깡 개념 정도는 알아 두어야 함! => 왜? 면접 때 물으니깡?
- 분명 공부 안한 사람들은 4일이면 암것도 기억 안나는 상태!

404호 최종 발표( 열심히 한 반이니 보도록 합시다)
404호는 결과물 보다 과정이 굉장히 훌륭했음.
팀원들 사이가 정말 좋아서, 서로 즐겁게 끝까지 웃으며 작업!.
특히 1명이 힘들면 회의소집 -> 다 같이 도와주는 걸로
스터디그룹 형성! => 좋은 매니저!

- `https://ko.react.dev/` 사이트는 자주 가야함
예제도 있고, 설명도 완전 훌륭, 항상 최신정보가 담겨있음 (영어인 경우)
- useReducer는 useState가 너무 단순한 경우에만 최적화 되어 있어서
  조금 더 복잡한 경우에 쓰라고 만들어짐!
  이 형식을 나중에 배울 redux에서 사용함

## 0508

- 오늘 리눅스랑 병행(리눅스 명령어 연습이 필요한데
                     한번에 많이 하면 도통 기억 안남)
- 리눅스는 Docker가 개발된 환경, 빅데이터 처리에 Good
- 자바는 일괄처리(배치)에 뛰어남.

- useReducer => useState를 쓰기에는 상황이..(경우의수가 쫌 많을 때) 복잡해진다면^0^

function reducer(state(상태변수), action(dispatcher의 매개변수)) {
  switch(action.type){
    case "":{return 상태변수와 같은 형태의 데이터;}...
  }
}
const [상태변수1, dispatch1] = useReducer(reducer1, 초기값[, 초기함수]);
const [상태변수2, dispatch2] = useReducer(reducer2, 초기값[, 초기함수]);
dispatch({type:"스위치문", data:"필요한값"});

## 0509

리눅스: 우분투(Docker가 개발된 환경) => AWS 우분투(public IP를 갖고 있어서 바로 인터넷 서비스 가능)
pwd(print-working-directory)/ ls/ ls -al/ man(manual 알고싶은명령어) ls

- 오늘은 React Context API를 배울건데, 왜?
    규모가 클 때 Props-Drilling은 이것저것 불편.
    바로 가져다 쓸 수 있게 만들어 준 것이 Context API.
    이것이 중앙관리 => 중대형 규모(? -> 추후 확장성을 고려한다면..)가 넘어가면 redux를 씀
    또 낯설거얌! (설정은 설정일뿐!)
- 오늘 todo list에 대부분의 필요한 기본적인 개념이 담겨 있는데,
  (결국 한 번 더 반복 연습하란 이야기)
  하나 중요한 건 여기에다 비동기 아작스 데이터 초기화 기능..!(백엔드 서버와의 연동)
  요건 다음 주에 하게쏘. 주말에 괘니 잠이 안오고, 리액트가 재밌을 것만 같은
  그런 이상함에 빠져서 공부!
- WSL: Window Sub Linux; 리눅스용 윈도우 하위 시스템.
  윈도우 안에서 리눅스 쓰게 도와주는 (우분투에 가까운 에뮬레이터)

## 0512

Context API => 기억이 안 나면 아주 미워할 꺼얌
               상태변수 중앙관리 -> Props Drilling의 문제 보완
                                    (컴포넌트 복잡해지면 힘들어진당)
               createContext / 컨텍스명.Provider (보통 분리시켜 만든다.)
               children
Custom Hook => 제약사항: use로 시작하는 함수
               원래 제공되는 훅을 내부에 가짐
               내부에 훅을 가지기 때문에 기존 hook의 제약사항을
               똑같이 가짐
        진짜 중요한 건: 요걸 꼭 한 두번은 연습해야 함
                        ->한 두번 하면 절대 안 잊어버림!
               function 키워드와 return(JSX) 사이의 소스를
               정리할 때(Refactoring) 만든다.
              1) 사이의 소스 전부를 따로 뺸다(useXXX 함수명 안으로)
              2) 커스텀 훅은 단지 return(JSX)에서 필요한 것만 return해주면 끝
              3) function 키워드와 return(JSX) 사이에 커스텀 훅을 넣고
                 필요한 것만 구조분해해서 사용한다.
WSL => Window Sub Linux (우분투)
      시대적 요구사항 -> 단순 일반인들은 더이상 PC를 많이 쓰지 않음(게임)
                      -> PC 주 사용자들이 IT종사자(개발자) -> 터미널명령어(shell)
                         문제생기면 보통 `wsl --update` 명령으로 대부분 해결

모르는 게 무엇인지를 최대한 좁게 특정할 수 있다면, 성장 가능성이 더 높아짐
모르는 게 무엇인지 (전부 다!!, 하나도 모름.. 이런 표현은 아주 위험!)
          주변의 사람들이 다 도망감! 천천히 가도 되니까
          자신이 무얼 모르는지 생각하고 추적해야 함!

리눅스/유닉스 명령어는 손에 익히는 데는 오래 걸리는데,
    오래 쓴 것처럼 속이는 방법이 있음.
    - 환경변수 => PATH, $, 대문자로 지정, export 수출해야만 모두 씀
    - 입출력 redirect(방향 전환) >, >>
       <, 입력 redirect는 생각보다 사용할 경우가 적다.
    - 파이프 라인(앞 명령의 결과를 뒷 명령이 받음)
    - 백그라운드 프로세스(뒤에서 안 보이게 동작)
    - 히스토리 사용(!를 이용)
    - source 파일|| 파일 안의 명령어들을 일괄 실행 (.을 쓰면 대박)

    - `변수명="변수값"`
    - echo $변수명 <== 읽기
    - echo $PATH <==환경변수 읽기
    - echo $USER <==로그온 사용자
    - echo $SHELL <==
    - evn <==설정된 모든 환경변수 출력.
    - which echo <== 디렉토리 검색 (echo의 디렉토리 위치는?)
    - cd /usr/bin <==echo 명령이 위치한 디렉토리로 이동
    - cd <==아무데서나 쳐도 home디렉토리로 돌아옴.
      cd /...<== 슬러시로 시작하면 절대경로,(ROOT)를 의미
    (출력 redirect; >)
    - echo "educated tiger" > hb.txt <== pwd 내의 파일로 출력하라 (덮어쓰기)
    - cat 파일명 <==읽어오기
    - echo "educated tiger" >> hb.txt
    - more /etc/passwd <== cat과 비슷, 터미널창을 넘는 분량은 페이지 구분을 해줌.
    (파이프라인; |)
    - cat /etc/passwd | more <==앞명령의 출력결과를 뒷명령이 인자로 받음
    - xeyes
      서버는 터미널이 하나, 눈깔을 실행하면 프로그램 종료하기 전까진 프롬프트 막힘
    - xeyes & <== (&)가 붙으면 background-process로 실행한다.
    - history <==그동안 쳤던 명령이 쭈욱 나온다.
    - history > sy-cmd.txt
    - !! <== 직전 명령을 반복
    - !INDEX <== 불러온 리스트의 해당 인덱스 줄 명령을 호출해냄.

## 0513

- Context API 비동기 데이터 초기화
  insert/ delete, 더미 데이터를 쓸 떄랑 코드가 달라짐
  useEffect, 입력/ 수정/ 삭제 비동기 호출 뒤에, 다시 비동기 GET을 호출하는
  것이 기본적으로 좋음! 왱?
      =>서버에는 한 사람만 접속하는 것이 아님.
        확장자 .js 파일은 라이브서버로 실행 못 시킴(확장자 .html만 가능)
        js 파일은 node xxx.js 형식으로 터미널에서 바로 실행시킬 수 있음.

- 커스텀 훅 만드는 법:
  function 윤석() {
    /*
      function 키워드와 return사이인 이곳의 소스가 많아지면
      가독성이 떨어지고, 심지어 지저분해 보임.
      별도의 파일로 만들어서 이곳의 소스를 가져간당.
      export하고 import로 불러온담.
      **JSX 안에서 사용될 것만 return시켜주면 예쁘게 동작하게 됨!
    */
    return (`<h1>JSX</h1>`)
  }

- ngrok 실행방법 :: e7e폴더에서 cmd-> 
  `ngrok config add-authtoken 2x1Qo1oCb9sbubivYrPzQWoLYPx_7fyrjaCGAnSNmcxYSRJz5`
  => 내 식별자 느낌
  `ngrok http http://localhost:5173`
  -->매번바뀌는도메인
  `ngrok http --url=prime-mosquito-adequate.ngrok-free.app 5173`
  -->하나공짜로주는고정도메인
  => FREE로 주어진 포트 하나를 ngrok 서버에 연결
  vite.config.js 파일 수정...
  ` export default defineConfig({
      plugins: [react(), tailwindcss()],
      server: {
        allowedHosts: ["f756-1-245-228-194.ngrok-free.app"]
      }
    });
  `
  =>server: {...} 추가(ngrok 도메인 등록시키기.)

  -> 해당 프로젝트를 공개 서버에서 테스트 가능

- ngrok은 바이러스 형태(트로이 목마 모습 == `네트워크 터널링`)
  포트 번호 1개와 이름 긴 고정 도메인 명 1개로 무료 사용 가능
  https도 쓸 수 있기 때문에,
  개발자에게는 소중함!
- ngrok -> 리액트5173 -> json-server:8272

- 
      - cp insa insa2 <==복사본 생성
      - mv inda2 ./figma/ <==파일의 디렉토리 변경
      - mkdir ~/taesu <== ~은 내계정 디렉토리. (/home/java)
      - mv ./insa ./taesumerong <==현재 디렉토리의 insa 파일을 잘라내어 teasumerong 에 덮어씌워라. ===> 이름바꾸기도 가능
      - rm taesumerong <== 파일 삭제
      - rm .fR figma/ <== 디렉토리 강제* 삭제
          rm figma/ --> rm명령으로는 불가능. rmdir이 있는데 잘 안 쓰는 명령
      - sudo apt install gcc -y
            <==C컴파일러 gcc 설치 (sudo: 관리자권한)
            <==apt: Advanced Package Tool 프로그렘 추가/제거 명령어
            <== -y: 설치과정 중 계속 진행하겠슴까 질문에 yes 미리대답
      - vi <= vi Editor 실행
        esc -> 명령어콘솔
            -> :
            -> :set number (라인마다 줄넘버 생김)
            -> !ls (잠깐 터미널로 나감)
            -> wq! 저장하고 나와라(뭔 오류나도 그냥 나와라)
        vi에디터는 프로그램 작성에는 좋지 않으나, 유지보수 사용에는 괜찮음.
        필요한 곳을 빨리 찾아 고치는 데 주로 사용됨. 설정 파일 수정 등.

## 0515

리눅스는 오래 자주 쓰면 저절로 익숙해짐!
요즘은 리눅스 잘 쓰면 대우 받으니깡!
리눅스는 그냥 OS일 뿐, 회사별로 그 위에 설치해서 쓰는 프로그램은
다르니까, 그런 건 회사가서 익숙해지면 됨
무료로 제공해주는 좋은 Tool 많당.(특히 빅데이터)

리액트-라우터 라는 걸 알건데, 주소표시줄에 따라 화면이 달라지는거
리액트에 포함이 안 되어 있음! (별도얌, vue나 angular에는 포함되어있음.)
=> 그래서 3rd-Party Library/APP의 이름으로 부름

- SPA(Single Page Application)
    index.html 하나밖에 없는 것,
    서버와의 통신은 모두 ajax로
- 프로그램적 관점에서는 사실 데스크탑 어플리케이션과 구동 모습이 비슷해서,
    라우터가 꼭 필요한 건 아님.

- useState, useEffect, useRef, useReducer, useContext
- router까지가 딱 필수!, 이 이상은 선택적 사용.
  `npm i react-router`**    `https://reactrouter.com/`
  