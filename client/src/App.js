import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
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

  //if listener not logged in show login else show logout


  return (
    <ListenerContext.Provider value={listener}>
      <div className="App"> 
        <Login setListener={setListener}></Login>
        <ListenerSongs></ListenerSongs>
        <Songs songs={songs}></Songs>
        <Create songs={songs} setSongs={setSongs}></Create>
      </div>
    </ListenerContext.Provider>
      
  );
}

export default App;
