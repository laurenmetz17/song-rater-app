
import './App.css';
import {React, useState, useEffect} from 'react';
import {Routes, Route } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import ListenerSongs from './ListenerSongs';
import Songs from './Songs';
import Create from './Create';
import ListenerContext from './ListenerContext';
import NavBar from './NavBar';
import Home from './Home';
import "./styles.css"

function App() {

  const [listener, setListener] = useState(null)
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("/songs")
    .then(resp => resp.json())
    .then(data => {
      setSongs(data)
    })
  },[])
 
  useEffect(() => {
    fetch("/me")
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then((listenerLog) => {
            setListener(listenerLog)
        }) 
      }
      else {
        //throw new Error(`HTTP error, status = ${resp.status}`);
      }
    })
    .catch(error => {
      ;
    })
  },[])
 
  return (
    <div className='App'>
      <ListenerContext.Provider value={listener}>
        <NavBar/>
        <div className='container'>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/songs" element={<Songs songs={songs} setSongs={setSongs}></Songs>}/>
              <Route path="/listeners" element={<ListenerSongs songs={songs}></ListenerSongs>}/>
              <Route path="/login" element={<Login setListener={setListener}></Login>}/>
              <Route path="/logout" element={<Logout setListener={setListener}></Logout>}/>
              <Route path="/songs/new" element={<Create songs={songs} setSongs={setSongs}></Create>}/>
          </Routes>
        </div>
      </ListenerContext.Provider> 

      
    </div>
  
  );
}

export default App;
