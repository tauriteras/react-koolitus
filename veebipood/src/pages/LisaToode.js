import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function LisaToode() {
  const [sonum, uuendaSonumit] = useState("Lisa uus toode");
  const inputiLuger = useRef();

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonumit("Sisesta toote nimi!")
    } else {
      uuendaSonumit("Toode lisatud: " + inputiLuger.current.value);
    }
  };

  return (
    <div>
        <p>{sonum}</p>
        <br />
        <label htmlFor='toote-nimi'>Uue toote nimi</label>
        <input id='toote-nimi' type='text' ref={inputiLuger}/> <br />
        <button className='nupp' onClick={lisa}>Sisesta</button>

        <br />
        <Link to="/"><button className='nupp'>Avalehele</button></Link>
    </div>
  )
}
