import React from 'react'
import {Bluetooth, BluetoothIcon, Cherry } from "lucide-react";

function Yfriend({name, alias, remFrd, fid, frd}) {
  console.log("통째로 받은 거 확인: ", frd);

  //작성하시옹!, 먼가 이전에 배운 걸 떠올려야 함!
  //힌트: 부모에서 지워야 함!
  const deleteMe = () => remFrd(fid);

  return (
      <div style={{border:"1px solid pink"}}>
        <button onClick={()=>{deleteMe()}}>X</button><br/>
        <Cherry color={"pink"} size={100} strokeWidth={4}/>
        <Bluetooth color={"blue"} size={64} strokeWidth={3}/>
        <h1>{name}</h1>
        <h4>{alias}</h4>
      </div>
  )
}

export default Yfriend