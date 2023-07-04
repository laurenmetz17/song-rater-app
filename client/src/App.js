import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import ListenerSongs from './ListenerSongs';
import Songs from './Songs';
import Create from './Create';
import ListenerContext from './ListenerContext';

function App() {

  const [listener, setListener] = useState(null)
  const [songs, setSongs] = useState([])
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    fetch("/songs")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setSongs(data)
    })
  },[])

  
  useEffect(() => {
    fetch("/me")
    .then(resp => {
      if (resp.ok) {
        console.log(resp);
        resp.json()
        .then((listenerLog) => {
            console.log(listenerLog)
            setListener(listenerLog)
        }) 
      }
      else {
        throw new Error(`HTTP error, status = ${resp.status}`);
      }
    })
    .catch(error => {
      console.error(error);
    })
  },[])
 
  return (
    <ListenerContext.Provider value={listener}>
      <div className="App"> 
        {listener ? <Logout setListener={setListener}></Logout>: <Login setListener={setListener}></Login>}
        <ListenerSongs songs={songs}></ListenerSongs>
        <Songs songs={songs}></Songs>
        <Create songs={songs} setSongs={setSongs}></Create>
      </div>
    </ListenerContext.Provider>
      
  );
}

export default App;
