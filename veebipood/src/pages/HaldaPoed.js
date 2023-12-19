import React, { useRef, useState } from 'react'

import poedFailis from '../data/poed.json'

function HaldaPoed() {

    const [poed, uuendaPoed] = useState(poedFailis)
    const nimiRef = useRef();



  return (
    <div>        
        {poed.map((yksPood, index) => 
        <div key={index}>
            {yksPood}
        </div>)}</div>
  )
}

export default HaldaPoed