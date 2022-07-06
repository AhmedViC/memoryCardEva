import React, { useEffect, useState } from "react";
import Message from './Message';




const DashBoard = ({bestScore,currentScore})=>{

    const [message,setMessage]=useState('')
  
    useEffect(()=>{
        if(currentScore===8)
        {
            setMessage(`congrats! You won`)
            setTimeout(()=>setMessage(null),5000)
        }

    },[currentScore])
    return(
        <div>
              <div>Current Score: {currentScore}</div>
          <div>Best Score: {bestScore}</div>
          <Message message={message} />
        </div>
    )
}

export default DashBoard