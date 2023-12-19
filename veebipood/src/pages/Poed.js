import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import poedFailist from '../data/poed.json'

function Poed() {

  const [poed, uuendaPoode] = useState(poedFailist)

  const nimiRef = useRef();
  const telRef = useRef();
  const adreRef = useRef();

const lisaPood = () => {
  let uusPood = {
    "nimi": nimiRef.current.value,
    "telefon": telRef.current.value,
    "aadress": adreRef.current.value
  }

  poedFailist.push(uusPood)

  uuendaPoode(poedFailist.slice())

  nimiRef.current.value = ""
  telRef.current.value = ""
  adreRef.current.value = ""

}

  return (
    <div>
      {poed.map((yksPood, index) => 
        <div key={index}>
            {yksPood.nimi} <br />
            {yksPood.telefon} <br />
            {yksPood.aadress} <br />
            <Link to={"/ukspood/" + index}>
              <button>Vaata lähemalt</button>
            </Link>
        </div>
        )}
    </div>
  )
}

export default Poed