import MyLink from './MyLink'

function NavBar() {
  return (
    <div>
      <MyLink to={"/"}>홈으로</MyLink>
      <MyLink to={"/sangin"} >상진</MyLink>
      <MyLink to={"/alchol"} >태수</MyLink>
    </div>
  )
}

export default NavBar