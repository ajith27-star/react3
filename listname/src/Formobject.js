import React, { useState } from "react";
export default function Formobject() {
    const [formdata,setformdata] = useState({})

const handleSubmit=()=>{
    
}


return(
    <>
    <form>
        <label>email:</label>
        <input type="email"></input>
        <label>password:</label>
        <input type="password"></input>
        <button onClick={handleSubmit}>submit</button>
    </form>
    
    
    
    
    </>
)


}