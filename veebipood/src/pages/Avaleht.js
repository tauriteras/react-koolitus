import React, { useState } from 'react'

export default function Avaleht() {
    const [kogus, uuendaKogus] = useState(1);
    const [meeldib, uuendaMeeldimist] = useState(false);
    const [sonum, uuendaSonumit] = useState('Vajuta mind!')

    function uuendaJaNulli() {
        uuendaKogus(0)
        uuendaMeeldimist(false)
        uuendaSonumit('Vajuta mind!')
    }

  return (

    <div>
        <button className="nupp" disabled={kogus === 0} onClick={() => uuendaKogus(kogus - 1)}>-</button>
        <span>{kogus}</span>
        <button className="nupp" onClick={() => uuendaKogus(kogus + 1)}>+</button>
        <br />
        <button className="nupp nupp__like" onClick={() => uuendaMeeldimist(!meeldib)}>
            <span>{meeldib &&  kogus < 10 && <img src='./meeldib.svg' alt=''/>}</span>
            <span>{!meeldib && <img src='./ei-meeldi.svg' alt=''/>}</span>
            <span>{meeldib && kogus >= 10 && <img src='./legendaarne.svg' alt='' />}</span>
        </button>
        <br />
        <p onClick={() => uuendaSonumit('Ai!')}><span className={kogus >= 10 ? 'kuldne' : undefined}>{sonum}</span></p>
        <br />
        <button className="nupp" onClick={uuendaJaNulli}>Reseti</button>
    </div>
  )
}
