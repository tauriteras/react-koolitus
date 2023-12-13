import './App.css';
import pilt from "./StatsIcon.png"

import 'react-toastify/dist/ReactToastify.css';

import { Link, Route, Routes } from "react-router-dom";
import { useState } from 'react';


import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';
import Profiil from './pages/Profiil';
import Seaded from './pages/Seaded';


export default function App() {

  const [teema, uuendaTeemat] = useState(localStorage.getItem('teema'));

  const teemaLocalStorage = (teema) => {

        if (teema === "tume") {
          teema = "hele";
        } else {
          teema = "tume";
        }
        
        localStorage.setItem('teema', teema);

        uuendaTeemat(teema)
  }

  return (
    <div className={teema === "tume" ? "tume" : "hele"}>

      <Link to="/">
        <img className="pilt" src={pilt} alt="statistika pilt" />
      </Link>

      <Link to="/">
        <button className="nupp">Avaleht</button>
      </Link>
      
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa tooteid</button>
      </Link>

      <Link to="/profiil">
        <button className="nupp">Profiil</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <button className="nupp" onClick={() => teemaLocalStorage(teema)}>Vaheta teemat</button>

      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/ostukorv' element={ <Ostukorv /> } />
        <Route path='/lisa-toode' element={ <LisaToode /> } />
        <Route path='/profiil' element={ <Profiil /> } />
        <Route path='/seaded' element={ <Seaded /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </div>
  );
}
