import { Link, useMatch, useResolvedPath} from 'react-router-dom';
import {React, useContext} from 'react'
import ListenerContext from './ListenerContext';

function NavBar() {

    const path = window.location.pathname
    const listener = useContext(ListenerContext)

    return(
        <nav className="nav">
            <Link to="/" class="site-name">Song Rater ⭐</Link>
            {listener ? <p>{`Welcome ${listener.name}!`}</p>: null}
            <ul>
                <CustomLink to= "/songs">Songs</CustomLink>
                <CustomLink to= "/listeners">Listener Songs</CustomLink>
                {listener ? <CustomLink to= "/logout">Logout</CustomLink> :<CustomLink to= "/login">Login or Signup</CustomLink>}
            </ul>
        </nav>
    )
}


function CustomLink({to, children, ...props}) {
    const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default NavBar;
