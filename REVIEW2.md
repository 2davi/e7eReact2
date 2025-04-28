
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
  nvm install (버전)
  nvm uninstall (버전)
  nvm use (버전)
- 크게 node 서버를 만들려고 하는 것인가, npm이 목적인가 식으로 물어봄
  npm init
  npm init -y ((질문 없이 자동생성))
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
  npm create vite@latest .
  npm install
  npm run dev  

- 프론트 프레임워크:
  *SPA: Single Page Application  (index.html)

- HMR: Hot Modul Reload, 변경된 모듈(script)을 바로 reload한다~
