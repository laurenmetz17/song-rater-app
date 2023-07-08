import {React, useState, useEffect, useContext} from 'react';
import { resolvePath } from 'react-router-dom';
import ListenerContext from './ListenerContext';

function Login({setListener}) {

    //implement signup error

    const listener = useContext(ListenerContext)
    const [logError,setLogError] = useState(false)
    const [signupError, setSignupError] = useState(false)

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const [signupForm, setSignupForm] = useState({
        name: "",
        profile_pic: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

    function createListener(e) {
        e.preventDefault();
        console.log(signupForm)       
        fetch('listeners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(signupForm),
        })
        .then(resp => {
            if (resp.ok) {
                console.log(resp);
                resp.json()
                .then((newListener) => {
                    console.log(newListener)
                }) 
            }
            else {
                setSignupError(true)
                throw new Error(`HTTP error, status = ${resp.status}`);
            }
        })
        .catch(error => {
            console.error(error);
        })
        e.target.children[1].value = ""
        e.target.children[3].value = ""
        e.target.children[5].value = ""
        e.target.children[7].value = ""
        e.target.children[9].value = ""
    }

    function updateLogin(e) {
        const target = e.target.name
        setLoginForm({...loginForm, [target] : e.target.value})
        setLogError(false)

    }

    function updateSignup(e) {
        const target = e.target.name
        setSignupForm({...signupForm, [target] : e.target.value})
        setSignupError(false)
    }

    function handleLogin(e) {
        e.preventDefault();
        fetch('login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginForm),
        })
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
                setLogError(true)
                throw new Error(`HTTP error, status = ${resp.status}`);
            }
        })
        .catch(error => {
            console.error(error);
        })
        e.target.children[1].value = ""
        e.target.children[3].value = ""
        
    }

    return(
        <div>
            <h1>Login</h1>
            <form id="login" onSubmit={handleLogin}>
                <label>Username: </label>
                <input type="text" name="username" onChange={updateLogin}></input>
                <label>   Password: </label>
                <input type="text" name="password" onChange={updateLogin}></input>
                <input type="submit" value="Login"></input>      
            </form>
            {logError ? <p style={{color: "red"}}>Invalid Username or Password</p> : null}
            <h1>Sign Up!</h1>
            <form id="sign up" onSubmit={createListener}>
                <label>Name: </label>
                <input type="text" name="name" onChange={updateSignup}></input>
                <label>  Profile Picture: </label>
                <input type="text" name="profile_pic" onChange={updateSignup}></input>
                <label>Username: </label>
                <input type="text" name="username" onChange={updateSignup}></input>
                <label>Password:</label>
                <input type="text" name="password" onChange={updateSignup}></input>
                <label>Confirm Password:</label>
                <input type="text" name="password_confirmation" onChange={updateSignup}></input>
                <input type="submit" value="Signup"></input>
            </form> 
            {signupError ? <p style={{color: "red"}}>Invalid Signup Info</p> : null}  
        </div>
    )

}

export default Login;