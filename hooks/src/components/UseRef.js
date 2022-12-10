import React, { useRef, useState } from 'react'

const UseRef = () => {

  const inputRef=useRef();
  const focus=()=>{
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value="";
    
  };
  return (
    <div>
      <div></div>
      <input type="text" ref={inputRef}/>
      <button onClick={focus}>Click</button>
    </div>
  )
}

export default UseRef