import React from 'react'

function Idol({iid, name, age, avatar}) {
  return (
    <div className='border-2 border-pink-700'>
      <div>
        <img src={avatar} width={50}/>
      </div>
      <div>
      <h1>(˶ᵔ ᵕ ᵔ˶)</h1>
      <h4>아뒤: {iid}</h4>
      <h2>이름: {name}</h2>
      <h5>나이: {age}</h5>
      </div>
    </div>
  )
}

export default Idol