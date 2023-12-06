import React from 'react'
import { Link } from 'react-router-dom'

export default function Ostukorv() {
  return (
    <div>
        <h1>Ostukorv</h1>
        <p>Ostukorv on tühi. :(</p>
        <Link to="/"><button className='nupp'>Avalehele</button></Link>
    </div>
  )
}
