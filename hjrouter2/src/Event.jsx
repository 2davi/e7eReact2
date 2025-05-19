import {useRef} from 'react'
import {useSearchParams, useLocation} from 'react-router';

function Event({date, ename}) {

  //쿼리스트링을 처리해주는 훅!, 어제 useParams와 잘 구별
  const [schParams, setSchParams] = useSearchParams();
  // console.log("첫만남이라면 콕 찍어", schParams);
  // console.log("체킁:", schParams.get("name"));
  // console.log("체킁:", schParams.get("age"));
  const name =schParams.get("name");
  //const age = schParams.get("age");

  const kdClick = () => {
    //input text의 value값을 가져오는 것으로 후다닥 수정해보시옹
    setSchParams({name:nameRef.current.value}); //주소표시줄 값이 바뀌는 걸 눈으로 확인해야...
  };

  //navigate의 두번째 옵션으로 넘어온 데이터 처리
  const location = useLocation();
  console.log("체로롱: ", location.state)

  const nameRef = useRef(null);
  const onChange = event => {
    setSchParams({name:event.target.value, etc:event.target.value + "흥"});
  }
  return (
    <>
      <input onChange={onChange} ref={nameRef} type="text" defaultValue={""} autoFocus placeholder={""} />
      <button onClick={kdClick}>경덕</button>
      <h1>{name?name:"아무개"}  {ename}은 {date}</h1>
    </>
  )
}

export default Event