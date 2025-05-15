import { useLocation, useParams } from "react-router";


function Yesol() {
  const params = useParams(); //필수 @PathVariable {path 속성값에 /:파라미터 로 넘겨준값}
  const location2 = useLocation(); //필수 useNavigate()와 짝으로 구성. {주소창에 안 뜸!}
  
  
  console.log("체킁: ", params);
  console.log("체에킁: ", location2.state);
  console.log("체킁에킁: ", location2);


  return (
    <>
      <h1>비웃음 빗속에 웃깅{params.cate} {params.item}</h1>
    </>
  )
}

export default Yesol