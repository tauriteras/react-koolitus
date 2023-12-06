import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import News from './pages/News.js';
import NotFound from './pages/NotFound.js';

import {Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <nav>
      <ul>

        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button>About us</button>
          </Link>
        </li>
        <li>
          <Link to="/news">
            <button>News</button>
          </Link>
        </li>

      </ul>
    </nav>

    <img src="https://placehold.co/600x400@2x.png"></img>

    <p className='text__blue'>Sinine tekst kaldkirjas hover efektiga</p>
    <p className='text__green'>Roheline tekst boldis hover efektiga</p>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
