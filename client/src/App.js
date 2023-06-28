import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Ratings from './Ratings';
import Songs from './Songs';
import Create from './Create';

function App() {

  const [songs, setSongs] = useState([])
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    fetch("/songs")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  },[])


  return (
    <div className="App">
      <Login></Login>
      <Ratings></Ratings>
      <Songs></Songs>
      <Create></Create>
    </div>
  );
}

export default App;
