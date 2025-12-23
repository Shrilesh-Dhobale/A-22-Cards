import React from 'react'
import './Home.css'
import StudCard from '../../components/Studcard/StudCard.jsx'
import { students } from '../../config/student'


function Home() {
  
    return (
      <div>
        <h1>Students</h1>

        <div className='home-container'>
          {students.map((student)=>{
            const {name, email, city, gender, avatar} = student;
            return (<StudCard
              key={email}
              name={name}
              email={email}
              city={city}
              gender={gender}
              />
            );
          })}
        </div>
      </div>
    );
  }
  

  
    

export default Home
