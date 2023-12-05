import './App.css';
import pilt from "./StatsIcon.png"

import { Link, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Link to="avaleht">
        <img className="pilt" src={pilt} alt="statistika pilt" />
      </Link>
      
      <Link to="ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="">
        <button className="nupp">Pealeht</button>
      </Link>

      <Routes>
        <Route path='/' element={ <div>Olen avalehel, mis on n2htav BASE_URL abil</div> } />
        <Route path='avaleht' element={ <div>Olen avalehel, mis on n2htav BASE_URL + avaleht abil</div> } />
        <Route path='ostukorv' element={ <div>Olen ostukorvis, mis on n2htav BASE_URL + ostukorv abil</div> } />
        <Route path='lisa-toode' element={ <div>Olen toote lisamise lehel</div> } />
        <Route path='*' element={ <div>404 - Not Found</div> } />
      </Routes>

    </div>
  );
}

export default App;
