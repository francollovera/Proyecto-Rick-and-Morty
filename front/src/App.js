import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards'
import Nav from './components/Nav'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites'
import Swal from 'sweetalert2';
import axios from 'axios';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = 'francollovera@gmail.com';
  const password = 'asd123';

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((prevChars) => [...prevChars, data]);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay personajes con ese ID',
          });
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const isHomePage = location.pathname === '/home';

  return (
    <div className="App">
      {isHomePage && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;