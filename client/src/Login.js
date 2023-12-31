import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Login({setListener}) {

    const [logError,setLogError] = useState(false)
    const [signupError, setSignupError] = useState(false)
    const navigate = useNavigate()

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const [signupForm, setSignupForm] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

    function createListener(e) {
        e.preventDefault();      
        fetch('listeners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(signupForm),
        })
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then((newListener) => {
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
        setSignupForm({name: "", username: "", password: "", password_confirmation:""})
        e.target.children[1].value = ""
        e.target.children[3].value = ""
        e.target.children[5].value = ""
        e.target.children[7].value = ""
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
                resp.json()
                .then((listenerLog) => {
                    setListener(listenerLog)
                    navigate('/songsPage')
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
        setLoginForm({username: "", password: ""})
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