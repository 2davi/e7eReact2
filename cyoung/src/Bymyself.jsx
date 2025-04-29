import React from 'react'

const Bymyself = ({prop1, prop2}) => {
  return (
    <>
      <div>Bymyself</div>
      <h1>{prop1}</h1>
      {prop2}
      {console.log(prop2)}
    </>
  )
}

export default Bymyself