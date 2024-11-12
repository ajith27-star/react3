import React, { useState } from "react";
export default function Form4() {
    const [formdata, setFormdata] = useState({});
    const [status, setStatus] = useState(false);
    const [array, setarray] = useState([])

    const newdata = (e) => {
        setFormdata(() => ({ ...formdata, [e.target.id]: e.target.value }));
    }
    const formdata2 = (e) => {
        e.preventDefault()
        setStatus(true)
        setarray([...array, formdata])
        setFormdata({
            TitleName: "", url: "", Description: ""
        })
        console.log(array)
    }
    return (
        <>
            <form onSubmit={formdata2} >
                <label for="TitletName">Title Name:</label>
                <input type="text" id="TitleName" name="TitleName" value={formdata.TitleName} onChange={newdata} />
                <label for="image">url:</label>
                <input type="url " id="url" name="url" value={formdata.url} onChange={newdata} />
                <label for="Description">Description:</label>

                <input type="text" id="Description" name="Description" value={formdata.Description} onChange={newdata} />
                <input type="submit" value="Submit" />
            </form>
            {array && array.map((s) =>
                <>
                    <p>TitleName:{s.TitleName}</p>
                    <img src={s.url} width="150px" />
                    <p>Description:{s.Description}</p>
                </>

            )}
        </>


    )

}