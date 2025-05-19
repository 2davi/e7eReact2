import { useState } from "react";


function ANavLink({to, children, style:ysCB}) {
  console.log("체킁킁: ", ysCB);
  const [isActive, setIsActive] = useState(false);

  const kdMove = event => {
    event.preventDefault(); 
    history.pushState({}/*null*/, "", to);

    const hjEvent = new PopStateEvent("merong");
    window.dispatchEvent(hjEvent);
  }

  return (
    // tailwindcss를 쓰면 훨씬 편하지만 임시롱
    <div style={{display:"inline-block", margin:"10px", border:"2px solid black"}}>
      <a href={to} onClick={kdMove} style={ysCB(isActive)}>
        {children}
      </a>
    </div>
  )
}

export default ANavLink