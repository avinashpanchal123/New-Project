import React, { useState } from 'react'
import "./counter.css"

let initState = {
    min : "",
    max : ""
}


function Counter() {
     const [count ,setCount] = useState(1);
     const [minMax, setMinMax] = useState(initState);
     const [newLimits, setNewLimits] = useState("");



     let {min , max}  = minMax;

     const handleCount = (value)=>{
         setCount( count + value)
     }


     const setLimits = ()=>{
         setCount(min)
         setNewLimits(minMax);
        console.log(newLimits);
        setMinMax(initState)
     }

     const handleChange = (e)=>{
         let { name , value} = e.target;

         let newLimits = {...minMax, [name] : value}

         setMinMax(newLimits)

         console.log(name, value);
     }
  return (
    <>
    <div className="counter_container">

        <div className="min_max_container">
       
            <input className='min_max_input'
            value={min}
            onChange= {handleChange}
            name = "min"
            placeholder='min'
            type="text" />
             <span>&nbsp; &nbsp;</span>
            <input className='min_max_input'
            value={max}
            onChange= {handleChange}
            name = "max"
            placeholder='max'
            type="text" />

            <div className=' margin_top'>
                <button
                onClick={setLimits}
                 className='min_max_btn'>SETLIMITS</button>
            </div>
       
        </div>
        
        <div className="inc_dec_box">
            <div className="dec flex_item">
                <button disabled = {count === 1}
                onClick={()=> handleCount(-1)}
                className='dec_btn btn'>-</button>
            </div>
            <div className="value_div flex_item">
             {
                 count
             }
            </div>
            <div className="inc flex_item">
            <button
             disabled = {count === 1000}
             onClick={()=> handleCount(1)}
             className='inc_btn btn'>+</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter