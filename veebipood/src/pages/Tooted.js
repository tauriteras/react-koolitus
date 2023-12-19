import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import tootedFailist from '../data/tooted.json'

function Tooted() {

  const [tooted, uuendaToodet] = useState(tootedFailist)

  return (
    <div>
        {tooted.map((yksToode, index) => 
        <div key={index}>
            {yksToode}
            <Link to={"/ukstoode/" + index}>
              <button>Vaata lähemalt</button>
            </Link>

        </div>)}
      </div>
  )
}

export default Tooted