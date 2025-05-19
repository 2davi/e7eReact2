import {RouterProvider, createBrowserRouter} from 'react-router'
import Yesol from './Yesol'
import Event from './Event'
import HjRouter from './HjRouter'

// 라우터 2번째 방법
// 외울려고 할 필요없음, 사이트에 다 있기 떄문에
// 대략 이해만 하면 됨!, 항상 설정은 구지 외우지 말길
// 바뀔 수도 있으니깡.~~

//라우터 생성. main.jsx에서 해도 괜찮음
const ysRouter = createBrowserRouter([
  {
    path:"/",
    element: <Yesol gibun={"거짓말"} />,
    children: HjRouter()
  }
])

function App() {

  return (
      <RouterProvider router={ysRouter} />
  )
}

export default App
