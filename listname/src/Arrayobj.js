import React, { useState } from "react";
export default function Arrayobj() {
    const [objectives,setobjectives] = useState([
     {username:"arun",password:"arfry"},
     {username:"ajith",password:"agfhbder"},
     {username:"praveen",password:"piwtdfvd"}
    ])
    const handleSubmit = () => {
        let arr=[]
        console.log("objectives",objectives)
        for(let obj of objectives){
            if(obj.username === "ajith"){
                let a ={...obj,username:"prakash"}
                arr.push(a)
            }
            else{
                arr.push(obj)
            }            
        }
        console.log("arr",arr)

    }
    return (
        <>
            <button type="submit" onClick={handleSubmit}>update</button>
        </>
    )





}