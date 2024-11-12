import { useState } from "react";
export default function Product() {
  const [formdata, setFormdata] = useState({});
  return (
    <>
      <div class="container">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name"  onChange={(e)=>setFormdata({...formdata, [e.target.id]: e.target.value})} name="name" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              onChange={(e)=>setFormdata({...formdata, [e.target.id]: e.target.value})}
              name="phone"
              placeholder="123-456-7890"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>Name:{formdata.name ? formdata.name:""}</p>
        <p>Phone Number:{formdata.phone ? formdata.phone:""}</p>
      </div>
    </>
  );
}