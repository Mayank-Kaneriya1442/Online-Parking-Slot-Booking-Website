import React, { useState } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const FetchData = () => {

    const [records, setRecords] = useState([])

    useEffect(() =>{
        fetch('mongodb://localhost:3000/projectdata')
        .then(responce => responce.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        <ul>
            {records.map((list,index)=>(
                <li>{list.id} | {list.name}</li>
            ))}
        </ul>
    </div>
  )
}
