import { BrowserRouter, NavLink} from 'react-router-dom';
import React from 'react'
import {useHistory} from 'react'
import ListenerSongs from './ListenerSongs';
import Login from './Login';
import Songs from './Songs';

//import listener to selectively render login or logout
function NavBar() {

    const path = window.location.pathname


    return(
        <nav className="nav">
            <a href="/" class="site-name">Song Rater</a>
            <ul>
                <CustomLink href= "/songs">Songs</CustomLink>
                <CustomLink href= "/listeners">Listener Songs</CustomLink>
                <CustomLink href= "/login">Login or Signup</CustomLink>
            </ul>
        </nav>
    )
    /*
    return(
        <div id= "links">
            <NavLink to="/" exact="true">Login</NavLink>
            <NavLink to="/songs" exact="true">Songs</NavLink>
            <NavLink to="/listener" exact="true">ListenerPage</NavLink>
        </div>
    )
    */
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname

    return (
        <li className={href===path ? "active": ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}

export default NavBar;
