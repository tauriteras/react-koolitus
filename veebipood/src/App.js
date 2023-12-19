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
import Poed from './pages/Poed';
import Hinnad from './pages/Hinnad';
import YksTootaja from './pages/YksTootaja';
import YksToode from './pages/YksToode';
import YksPood from './pages/YksPood';
import Tootajad from './pages/Tootajad';
import HaldaPoed from './pages/HaldaPoed';
import HaldaTooteid from './pages/HaldaTooteid';
import Tooted from './pages/Tooted';


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

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupp">Töötajad</button>
      </Link>

      <Link to="/ukspood/:nimi">
        <button className="nupp">1 pood</button>
      </Link>

      <Link to="/ukstoode/0">
        <button className="nupp">1 toode</button>
      </Link>

      <Link to="/ukstootaja">
        <button className="nupp">1 tootaja</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/haldapoed">
        <button className="nupp">Halda poode</button>
      </Link>

      <Link to="/haldatooteid">
        <button className="nupp">Halda tooteid</button>
      </Link>

      <button className="nupp" onClick={() => teemaLocalStorage(teema)}>Vaheta teemat</button>

      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/ostukorv' element={ <Ostukorv /> } />
        <Route path='/lisa-toode' element={ <LisaToode /> } />
        <Route path='/profiil' element={ <Profiil /> } />
        <Route path='/seaded' element={ <Seaded /> } />
        <Route path='/poed' element={ <Poed /> } />
        <Route path='/tooted' element={ <Tooted /> } />
        <Route path='/tootajad' element={ <Tootajad /> } />
        <Route path='/ukspood' element={ <YksPood /> } />
        <Route path='/ukstoode/:index' element={ <YksToode /> } />
        <Route path='/ukstootaja' element={ <YksTootaja /> } />
        <Route path='/hinnad' element={ <Hinnad /> } />
        <Route path='/haldapoed' element={ <HaldaPoed /> } />
        <Route path='/haldatooteid' element={ <HaldaTooteid /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </div>
  );
}
