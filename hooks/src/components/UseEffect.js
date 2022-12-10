import React, { useEffect, useState } from 'react'
import axios from "axios"

const UseEffect = () => {

  const[data,setData]=useState("");
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{console.log(response.data);setData(response.data[0].email)});
    },[]);
  return (
    <div>
      <div>
       {data}
      </div>
    </div>
  )
}

export default UseEffect