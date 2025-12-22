import React from 'react'
import './Home.css'
import {Building2,Mail} from 'lucide-react'
import { students } from '../../config/student'



function Home() {
  
  return (
    <div>
      <h1>Student List</h1>
      <div className="home-container">
      {students.map((StudObj) => {
         const { name, email, city, gender } = StudObj;

        return(


        <div className='student-card'>
            <h2 className='student-name'>{name}</h2>
            <p className='student-info'>
              <Mail className='student-info-icon'/>{email}</p>
            <p className='student-info'>
              <Building2 className='student-info-icon'/>{city}</p>
              <p className='student-info'>
              <Building2 className='student-info-icon'/>{gender}</p>
            
        </div>
) 
      })}
        </div>
    </div>
  )
}

export default Home
