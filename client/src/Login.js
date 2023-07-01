import {React, useState, useEffect} from 'react';

function Login() {

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

    function handleLogin(e) {
        e.preventDefault()
        //write this funciton in usercontext file 
        console.log(loginForm)
    }

    function createListener() {
        //write this function in usercontext file
    }

    function updateLogin(e) {
        const target = e.target.name
        setLoginForm({...loginForm, [target] : e.target.value})

    }

    function updateSignup(e) {
        const target = e.target.name
        setSignupForm({...signupForm, [target] : e.target.value})
        console.log(signupForm)
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
                <input type="text" name="password-_confirmation" onChange={updateSignup}></input>
                <input type="submit" value="Signup"></input>
            </form>   
        </div>
    )

}

export default Login;