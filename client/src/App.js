import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect, createContext, useContext, Switch} from 'react';
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
  const [listeners, setListeners] = useState([])

  useEffect(() => {
    fetch("/songs")
    .then(resp => resp.json())
    .then(data => {
      setSongs(data)
    })
  },[])

  useEffect(() => {
    fetch("/listeners")
    .then(resp => resp.json())
    .then(data => {
      setListeners(data)
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
        throw new Error(`HTTP error, status = ${resp.status}`);
      }
    })
    .catch(error => {
      console.error(error);
    })
  },[])

  let currentPage
  
  switch (window.location.pathname) {
    case "/":
      currentPage = <Home/>
      break
    case "/songs":
      currentPage = <Songs songs={songs} listeners={listeners} ></Songs>
      break
    case  "/listeners":
      currentPage = <ListenerSongs songs={songs}></ListenerSongs>
      break
    case "/login":
      currentPage = <Login setListener={setListener} setListeners={setListeners} listeners={listeners}></Login>
      break
    case "/logout":
      currentPage = <Logout setListener={setListener}></Logout>
      break
    case "/songs/new":
      currentPage = <Create songs={songs} setSongs={setSongs}></Create>
      break
  }
  
 
  return (
    <div className='App'>
      <ListenerContext.Provider value={listener}>
        <NavBar/>
        {currentPage}
      </ListenerContext.Provider> 
      {/*
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/songs" element={<Songs songs={songs} ></Songs>}/>
            <Route path="/listeners" element={<ListenerSongs songs={songs}></ListenerSongs>}/>
            <Route path="/login" element={<Login setListener={setListener}></Login>}/>
        </Routes>
      </div>
  */}
      
    </div>

    /*
    <BrowserRouter>
      <Switch>
        <ListenerContext.Provider value={listener}>
          <NavBar/>
          <Route path='/' exact element={() =>{listener ? <Logout setListener={setListener}></Logout>: <Login setListener={setListener}></Login>}}/>
          <Route path='/songs' element={<Songs songs={songs} ></Songs>} />
          <Route path='/listener_songs' element={<ListenerSongs songs={songs}></ListenerSongs>} />
          </ListenerContext.Provider>
      </Switch>
    </BrowserRouter>
    */
    /*
    <ListenerContext.Provider value={listener}>
      <div className="App"> 
        {listener ? <Logout setListener={setListener}></Logout>: <Login setListener={setListener}></Login>}
        <ListenerSongs songs={songs}></ListenerSongs>
        <Songs songs={songs} ></Songs>
        <Create songs={songs} setSongs={setSongs}></Create>
      </div>
    </ListenerContext.Provider>
    */
      
  );
}

export default App;
