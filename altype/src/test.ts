
// 실제는 규칙이 더(아주 많이) 많음...
// 정적 언어처럼 변수 타입을 지정한다는 것이 핵심!
// 보통은 회사에서 쓰다보면 자연스럽게 익숙해짐!
// 수료 후에 취업 때까지 시간이 있는 사람들은
// react프로젝트 생성 때 typescript를 선택해서 하면 도움 됨!
type Idol = {
  name:string | number | undefined,
  age:number,
  good:string
}

// 아린이 비오니깡 비웃음 인정
function arPrt(arin:Idol) {
  console.log(arin.name);
  console.log(arin.age);
  console.log(arin.good);
  console.log(arin.merong); //<<여기에 메롱은 없어
}