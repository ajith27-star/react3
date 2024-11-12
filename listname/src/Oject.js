import React, { useState } from "react";
export default function Object() {
    const [formdata, setformdata] = useState({ username: "ajith", password: "ajithy723546" })
    const handleSubmit = () => {
        console.log("formdata",formdata)
        let copyObj={...formdata, username: "praveen" };
          setformdata(copyObj)
             console.log("copyObj",copyObj)

    }
    
    return (
        <>
            <button type="submit" onClick={handleSubmit}>update</button>
        </>
    )
}
