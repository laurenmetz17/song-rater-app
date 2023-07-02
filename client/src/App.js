import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import ListenerSongs from './ListenerSongs';
import Songs from './Songs';
import Create from './Create';

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


  return (
    <div className="App">
      <Login></Login>
      <ListenerSongs></ListenerSongs>
      <Songs songs={songs}></Songs>
      <Create songs={songs} setSongs={setSongs}></Create>
    </div>
  );
}

export default App;
