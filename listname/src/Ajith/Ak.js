import React, {useState} from "react";
export default function Ak(){
    const [formdata,setFormdata] = useState({});
    const [status,setStatus] = useState(false);


    const newdata = (e) =>{
        setFormdata(() => ({ ...formdata, [e.target.id]: e.target.value }));
    }
    const formdata2 = (e) =>{
        e.preventDefault()
        setStatus(true)
        console.log(formdata)
    }
    return(
<>
    <h1>Product Form</h1>
    <form onSubmit={formdata2} >
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" name="productName"  onChange={newdata}/>
        
        <label for="price">Price:</label>
        <input type="number" id="price" name="price"  onChange={newdata}/>      
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity"  onChange={newdata}/>
        <input type="submit" value="Submit Product"/>
    </form>
        {status?
        <>
        <p>productName:{formdata.productName}</p>
        <p>price:{formdata.price}</p>
        <p>quantity:{formdata.quantity}</p>
        
        </>:""
        
        }
        </>
    )
}