import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  const [data, setdata] = useState([])
  const [selectValue, setSelectValue] = useState("normal")
  const [search, setsearch] = useState("")
  /*--GET---*/
  useEffect(() => {
    axios.get("http://localhost:3000/cards")
    .then(res=>setdata(res.data))
  }, [])
  /*--DELETE--*/
  const deleteData=function(id){
    axios.delete("http://localhost:3000/cards/"+id)
    .then(res=>console.log(res.data))
  }
  /*---SORT---*/
  const sortData=function(){
    if(selectValue=='a-z'){
      return data.toSorted((a,b)=>a.name.localeCompare(b.name))
    }
    else if(selectValue=='z-a'){
      return data.toSorted((a,b)=>b.name.localeCompare(a.name))
    }
    else{
      return[...data]
    }
  }
  let sortedData=sortData()
  /*---FILTER---*/
  const filteredData =sortedData.filter(item => {
    return item.name.toLowerCase().startsWith(search.toLowerCase()
  )
  });

  return (
    <div>
      <div className="links">
        <select onChange={(e)=>setSelectValue(e.target.value)}>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
          <option value="normal">normal</option>
        </select>
        <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder="search" />
      <Link to='/add' className='add-btn' >Add</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>IMG</th>
            <th>NAME</th>
            <th>COST</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
           filteredData.map(item=>{
              {
                return(
                  <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><img src={item.file}  /></td>
                  <td>{item.cost}</td>
                  <td><button onClick={()=>deleteData()} className='delete-btn'>Delete</button></td>
                 </tr>
                )
              }
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Admin