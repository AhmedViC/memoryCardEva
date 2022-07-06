import React from "react";
import '../style.css'

const Message = ({message})=>
{

    if(message!=='')
    {
        return(
            <div className="message">
                {message}
            </div>
        )
    }

    
    else{
        return null
    }
}
export default Message