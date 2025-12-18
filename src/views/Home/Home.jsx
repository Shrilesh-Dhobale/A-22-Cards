import React from 'react'
import './Home.css'
import {Building2,Mail} from 'lucide-react'

const students= [
  { name: 'Alice', email: 'alice@gmail.com', city: "Washington" },
  { name: 'Bob', email: 'bob@gmail.com', city: "New York" },
  { name: 'Charlie', email: 'charlie@gmail.com', city: "Los Angeles" },
  { name: 'David', email: 'david@gmail.com', city: "Chicago" },
  { name: 'Eve', email: 'eve@gmail.com', city: "Houston" },
  { name: 'Frank', email: 'frank@gmail.com', city: "Phoenix" },
  { name: 'Grace', email: 'grace@gmail.com', city: "Philadelphia" },
]

function Home() {
  
  return (
    <div>
      <h1>Student List</h1>
      <div className="home-container">
      {students.map((StudObj) => {
        return(
        <div className='student-card'>
            <h2 className='student-name'>{StudObj.name}</h2>
            <p className='student-info'>
              <Mail className='student-info-icon'/>{StudObj.email}</p>
            <p className='student-info'>
              <Building2 className='student-info-icon'/>{StudObj.city}</p>
        </div>
) 
      })}
        </div>
    </div>
  )
}

export default Home
