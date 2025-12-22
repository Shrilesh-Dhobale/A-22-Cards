import React from 'react'
import './Home.css'
import {Building2,Mail, Mars} from 'lucide-react'
import { students } from '../../config/student'
import Boy from './boy.png'
import Girl from './woman.png'



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
            <img
            src={gender==="Male"?Boy:Girl}
            className='student-gender'/>
            
            
        </div>
) 
      })}
        </div>
    </div>
  )
}

export default Home
