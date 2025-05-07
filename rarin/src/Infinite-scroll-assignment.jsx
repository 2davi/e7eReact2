import React, {useRef, useState} from 'react'


function Iscroll() {
  let [idx, setIdx] = useState(1);
  let disp = useRef(null);

  document.addEventListener("DOMContentLoaded", () => {
    
    for(let i=0; i<15; i++) {
      let h1tag = document.createElement("h1");
      h1tag.innerHTML = "div 무한 스크롤"+ (idx);
      setIdx(idx+1);
      disp.current.appendChild(h1tag);
    }

    disp.current.addEventListener(() => {
      let scrollTop = disp.scrollTop;
      let clientHeight = disp.clientHeight;
      let scrollHeight = disp.scrollHeight;
      let tunning = 50;
  
      if(scrollTop + clientHeight>= scrollHeight - tunning) {
        for(let i=0; i<=5; i++) {
          let h1tag = document.createElement("h1");
          h1tag.innerHTML = "태수의 무한 스크롤" + (idx+1);
          setIdx(idx++);
          disp.appendChild(h1tag);
        }
      }
    });

  });

  return (
    <>
      <div ref={disp}></div>
    </>
  )
}

export default Iscroll;