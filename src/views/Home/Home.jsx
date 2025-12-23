import React from 'react'
import './Home.css'
import StudCard from '../../components/Studcard/StudCard.jsx'
import { students } from '../../config/student'
import { App_Name, App_Description } from '../../config/app.js'


function Home() {
  
    return (
      <div>
        <h1 className='App_Name'>{App_Name}</h1>
        <p className='App_Description'>{App_Description}</p>

        <div className='home-container'>
          {students.map((student)=>{
            const {name, email, city, gender} = student;
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
