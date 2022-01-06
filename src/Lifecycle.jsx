import React,{ useState } from "react";
import { useEffect } from "react/cjs/react.development";

export function Lifecycle(props){
    const initialCount=0;
    const[count, setCount]= useState(initialCount);
    const[timerOn,setTimerOn]=useState(false);
    const[content,setContent]=useState('');

    useEffect(()=>{
       let interval=null;
       if(timerOn){
        interval=setInterval(() => {
            setCount(count=>count+1);
            }, 1000);
       }
       else{
        clearInterval(interval)
       }
    return()=>clearInterval(interval)
        
    },[timerOn])
    
    useEffect(()=>{
      if(!props.selectedValue){
        setContent('You are not selected any location')
      }
      else if(props.selectedValue ==='Chennai'){
        setContent('Its My location')
      }else{
        setContent('Its not location')
      }
    },[props.selectedValue])
     return(
         <>
         <h3>Functional Counter: {count}</h3>
         <h3>location :: {content}</h3>
         <button onClick={()=>setTimerOn(true)}>Start</button>
         <button onClick={()=>setTimerOn(false)}>Pause</button>
         <button onClick={()=>setCount(initialCount)}>Reset</button>
         
         </>
     )
}