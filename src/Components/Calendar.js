import React, {useState} from 'react';
function DatePick(){
    const [date, setDate]=useState()
    console.log("Date", date);
    return (
        <div>
        <h1> Seleect Date:</h1>
        <input type="date" onChange={e=>setDate(e.target.value)}/>
        </div>
    )
}
export default DatePick;