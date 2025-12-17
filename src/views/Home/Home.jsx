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

      {students.map((StudObj) => {
        return(
        <div>
            <h2>Name: {StudObj.name}</h2>
            <p>Email: {StudObj.email}</p>
            <p>Age: {StudObj.age}</p>
        </div>
) 
      })}
    </div>
  )
}

export default Home
