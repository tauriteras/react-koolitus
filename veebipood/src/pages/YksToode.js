import React from 'react'
import { useParams } from 'react-router-dom'

import tootedFailist from '../data/tooted.json'

function YksToode() {

  const { index } = useParams();

  const leitud = tootedFailist[index]

  console.log(index)

  return (
    <div>
      <div>Toote j2rjekorranr: {index} </div>
      <div>Toote nimi: {leitud} </div>
      <div>Toote hind: </div>
      <div>Toote aktiivsus: </div>
    </div>
  )
}

export default YksToode