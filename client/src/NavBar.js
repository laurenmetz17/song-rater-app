import { Link, useMatch, useResolvedPath} from 'react-router-dom';
import {React, useContext} from 'react'
import ListenerContext from './ListenerContext';


//import listener to selectively render login or logout
function NavBar() {

    const path = window.location.pathname
    const listener = useContext(ListenerContext)

    /*

    return(
        <nav className="nav">
            <a href="/" className="site-name">Song Rater ⭐</a>
            {listener ? <p>{`Welcome ${listener.name}!`}</p>: null}
            <ul>
                <CustomLink href= "/songs">Songs</CustomLink>
                <CustomLink href= "/listeners">Listener Songs</CustomLink>
                {listener ? <CustomLink href="/logout" >Logout</CustomLink> :<CustomLink href= "/login">Login or Signup</CustomLink>}
            </ul>
        </nav>
    )
    */
    
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

    /*
    return (
        <li className={href===path ? "active": ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
    */

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
    
}

export default NavBar;
