import React, { useState } from 'react'

export default function Seaded() {
    const [keel, uuendaKeel] = useState('est');

  return (
    <div>
        {keel === 'est' && <p>Keel: eesti keel</p>}
        {keel === 'eng' && <p>Keel: inglise keel</p>}
        {keel === 'rus' && <p>Keel: vene keel</p>}

        <button className="nupp" onClick={() => uuendaKeel('est')}>Eesti keel</button>
        <button className="nupp" onClick={() => uuendaKeel('eng')}>Inglise keel</button>
        <button className="nupp" onClick={() => uuendaKeel('rus')}>Vene keel</button>
    </div>
  )
}
