import { BrowserRouter, NavLink} from 'react-router-dom';
import React from 'react'
import {useHistory} from 'react'
import ListenerSongs from './ListenerSongs';
import Login from './Login';
import Songs from './Songs';


function NavBar() {

    return(
        <div id= "links">
            <NavLink to="/" exact="true">Login</NavLink>
            <NavLink to="/songs" exact="true">Songs</NavLink>
            <NavLink to="/listener" exact="true">ListenerPage</NavLink>
        </div>
    )
}

export default NavBar;
