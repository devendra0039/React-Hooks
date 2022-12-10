import React, { useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const inputref=useRef();
    useLayoutEffect(()=>{
        console.log("hello");
        inputref.current.value="Devendra";
    },[])
  return (
    <div>
        <input type={"text"} ref={inputref}></input>
    </div>
  )
}

export default UseLayoutEffect