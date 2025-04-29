import React from 'react'

function Idol({name, age, song}) {
  
  return (
    <div className="idol">
      <h3 style={{color:"blue"}}>이름 {name}</h3>
      <h5>나이 {age}</h5>
      <h5>대표곡 {song}</h5>
    </div>
  )
}

export default Idol