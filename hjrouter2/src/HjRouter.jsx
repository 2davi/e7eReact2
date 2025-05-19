
//라우터 일부 정리
//요기에 children이 있으면 또 별도 파일로....
//반복에 반복....
import Event from "./Event"

function HjRouter() {
  return (
    [
        {
          index: true,
          element: (<h1>이거슨 default INDEX용</h1>)
        },
        {
          path: "/birth",
          element: <Event ename={"생일"} date={"2025-05-16"} />
        },
        {
          path: "/wedding",
          element: <Event ename={"결혼"} date={"2025-05-17"} />
        }
    ]
  )
}

export default HjRouter