import React from 'react'
import { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

export default function Profiil() {
    const emailRef = useRef();
    const nimiRef = useRef();
    const telefonRef = useRef();

    const [email, uuendaEmail] = useState(localStorage.getItem('email') || '*');
    const [nimi, uuendaNimi] = useState(localStorage.getItem('nimi') || '*');
    const [telNr, uuendaTelNr] = useState(localStorage.getItem('telNr') || '*');

    const salvestaEmail = () => {
        uuendaEmail(emailRef.current.value)
        localStorage.setItem('email', emailRef.current.value)
        emailRef.current.value = '';
    }

    const salvestaTelNr = () => {
        if (telefonRef.current.value.length !== 8) {
            toast.error('Telefoninumber peab olema 8 numbrit pikk!')
            return;
        }
        
        uuendaTelNr(telefonRef.current.value)
        localStorage.setItem('telNr', telefonRef.current.value)
        telefonRef.current.value = '';
    }

    const salvestaNimi = () => {
        uuendaNimi(nimiRef.current.value)
        localStorage.setItem('nimi', nimiRef.current.value)
        nimiRef.current.value = '';
    }

  return (
    <div>
        <ToastContainer />

        <div>Kasutaja meil: {email}</div>
        <div>Kasutaja tel: {telNr}</div>
        <div>Kasutaja nimi: {nimi}</div>


        <label>E-mail</label> <br />
        <input ref={emailRef} type="email" /> <br />
        <button onClick={salvestaEmail}>Salvesta</button> <br />

        <label>Tel Nr</label> <br />
        <input ref={telefonRef} type="text" /> <br />
        <button onClick={salvestaTelNr}>Salvesta</button> <br />

        <label>Nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={salvestaNimi}>Salvesta</button> <br />

        
    </div>
  )
}
