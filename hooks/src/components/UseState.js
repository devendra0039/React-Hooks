import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0);
    const [inputvalue,setInputValue]=useState("Devendra");
    const counter = () =>{
        // count=count+1;
        setCount(count+1);
    }

    const disinputValue = (event) =>{
        let newvalue=event.target.value;
        setInputValue(newvalue);
    }
    return (
      <div>
      <div>{count}</div>
      <button onClick={counter}>Increment</button>
      <div>
        <div>{inputvalue}</div>
      <input type={"text"} onChange={disinputValue} placeholder="Enter Something"></input>
      </div>
      </div>
      )
}

export default UseState