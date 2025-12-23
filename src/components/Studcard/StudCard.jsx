import React from 'react'
import './StudCard.css'
import {Building2,Mail} from 'lucide-react'
import Boy from './boy.png'
import Girl from './woman.png'
import { Primary_Color,Light_Color } from '../../config/app'


function StudCard({ name, email, city, gender, avatar }) {
  return (
    <div className='student-card' style={{borderColor:Primary_Color, backgroundColor:Light_Color}}>
      <h2 className='student-name'>{name}</h2>
      <p className='student-info'>
        <Mail className='student-info-icon' />{email}
      </p>
      <p className='student-info'>
        <Building2 className='student-info-icon' />{city}
      </p>
      <img 
        className='student-gender'
        src={gender === "Male" ? Boy : Girl}
        alt={gender === "Male" ? "Male Avatar" :  "Female Avatar"}
      />
    </div>
  );
}

export default StudCard
