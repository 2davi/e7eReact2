
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
  nvm install (버전)*
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
- 3.css 파일에 `import 'tailwindcss';`
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
