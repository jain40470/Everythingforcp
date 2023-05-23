import React from 'react'
import CardTeam from './CardTeam'
import aman from './Assets/aman.jpg'
import akash from './Assets/akash.jpg'
export default function Team() {
  return (
    <div className='flex flex-wrap justify-evenly'>
        <CardTeam name="Akash Jain" CF_id="jain40470" photo={akash}/>
        <CardTeam name="Amandeep Singh" CF_id="amandeep360" photo={aman}/>
    </div>
  )
}
