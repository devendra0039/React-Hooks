import React, { useReducer, useState } from 'react'




const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count+1,showText: !state.showText}
        case "toggleText":
            return{count:state.count,showText:state.showText}
    }
}


const UseReducer = () => {
//     const[showText,setShowText] = useState(true);
//     const[count,setCount]=useState(0);
//   return (
//     <div>
//        <div>
//        {count}
//        </div>
//         <button onClick={()=>{
//             setCount(count+1);
//             setShowText(!showText);
//         }}>
//             Click
//         </button>
//         <div>{showText && <p>This is a text</p>}</div>
//         {/* {showText?"":<p>"this is a text"</p>} */}
//     </div>
//   )


//----------------------------------------------------------------//

//NOTE :- Insted of two useState we can use useReducer Hooks.


const[state,dispatch]=useReducer(reducer,{count:0,showText:true});

return(
    <div>
        <div>{state.count}</div>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"});
            dispatch({type:"toggleText"});
        }}>Click</button>
        <div>{state.showText && <p>This is a Text...</p>}</div>
    </div>

)
}

export default UseReducer