import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './componets/Home';
import Game from './componets/Game';

function App() {

  const [ players, setPlayers] = useState([]) 
  
  useEffect(() =>{
     Aos.init({duration: 2000});

   },[])

    const changeHandler = (evt) => {
        setPlayers(evt.target.value);
    }
   
  return (
    <div className="App">
       <Router>
         <Routes>
            <Route path="/" element={<Home changeHandler={changeHandler} players={players}/>}/>
            <Route path="game" element={<Game players={players}/>} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
