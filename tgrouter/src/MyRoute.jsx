import { useState, useEffect } from 'react'

function MyRoute({path, element}) {

  //주소 표시줄 값을 확인할 필요가 있음
  //주소 표시줄 값을 상태 관리
  const [curPath, setCurPath] = useState(location.pathname);



  const chgURL = () => setCurPath(location.pathname);

  useEffect(() => {
    alert("비동기 호출 체킁: " + location.pathname);
    console.log(curPath);
    //MyLink에서 발생시킨 이벤트를 듣고, 거기에 해당하는 핸들러 처리
    window.addEventListener("merong", chgURL);

    //이벤트 등록은 한 번만 되어야 한다.
    // 지금은 addEventListener가 핸들러를 계속 추가시키는 구조
    //컴포넌트가 unmount될 때의 처리,
    return () => {
      window.removeEventListener("merong", chgURL);
    }
  }, []);
  

  
  //넘겨받은 path와 주소표시줄 값 여기선 curPath로 관리
  //2개가 같을 때만 화면에 나와야 함!
  return path===curPath ? element : null;
}

export default MyRoute