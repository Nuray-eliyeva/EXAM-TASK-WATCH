import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Popular() {
    const [data, setdata] = useState([])
    useEffect(() => {
       axios.get("http://localhost:3000/cards")
       .then(res=>setdata(res.data))
    }, [])
    
  return (
   <div className="popular">
    <div className="container">
        <div className="row">
            <h2>Popular Item</h2>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, dolores!</h4>
            {
               data.map(item=>{
                    return(
                     <div className="col-lg-4">
                       <div key={item.id}>
                        <img src={item.file} alt="" />
                        <p>{item.name}</p>
                        <span>{item.cost}</span>
                       </div>
                    </div>)
                })
            }
        </div>
    </div>
             <button className='btn2'>VIEW MORE PRODUCT</button>
   </div>
  )
}

export default Popular