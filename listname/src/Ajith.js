import React, { useState } from "react";

export default function Ajith() {
  const [formdata, setFormdata] = useState({});
  const [status, setStatus] = useState(false);

  const newchage = (e) => {
    setFormdata(() => ({ ...formdata, [e.target.name]: e.target.value }));
  };

  const formdata1 = (e) => {
    e.preventDefault();
    setStatus(true)
    console.log(formdata);
  };

  return (
      <>

    <form onSubmit={formdata1} method="post">
        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name" required 
        onChange={newchage}/><br/><br/>
        
        
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email" required
         onChange={newchage}/><br/><br/>
        
        <label for="message">Message:</label><br/>
        <textarea id="message" name="message" rows="4" cols="50" required
         onChange={newchage}></textarea><br/><br/>
        
        <input type="submit" value="Submit"/>
    </form>
    {status?<>
        <p>name:{formdata.name}</p>
        <p>email:{formdata.email}</p>
        <p>message:{formdata.message}</p>
        </>:""}

     </>

  );
}