import React from 'react'
import './Home.css'

const students= [
  { name: 'Alice', email: 'alice@gmail.com', age: 21 },
  { name: 'Bob', email: 'bob@gmail.com', age: 22 },
  { name: 'Charlie', email: 'charlie@gmail.com', age: 23 },
  { name: 'David', email: 'david@gmail.com', age: 24 },
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
            <p className='student-info'>{StudObj.email}</p>
            <p className='student-info'>{StudObj.age}</p>
        </div>
) 
      })}
        </div>
    </div>
  )
}

export default Home
