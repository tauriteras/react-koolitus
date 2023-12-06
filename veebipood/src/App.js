import './App.css';
import pilt from "./StatsIcon.png"

import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <div className="App">

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

      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/ostukorv' element={ <Ostukorv /> } />
        <Route path='/lisa-toode' element={ <LisaToode /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </div>
  );
}
