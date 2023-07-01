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


    return(
        <div>
            <h1>Login</h1>
            <form id="login">
                <label>Username: </label>
                <input type="text" name="username"></input>
                <label>   Password: </label>
                <input type="text" name="password"></input>
                <input type="submit" value="Login"></input>      
            </form>
            <h1>Sign Up!</h1>
            <form id="sign up">
                <label>Name: </label>
                <input type="text" name="name"></input>
                <label>  Profile Picture: </label>
                <input type="text" name="profile-pic"></input>
                <label>Username: </label>
                <input type="text" name="username"></input>
                <label>Password:</label>
                <input type="text" name="password"></input>
                <label>Confirm Password:</label>
                <input type="text" name="password-confirmation"></input>
            </form>   
        </div>
    )

}

export default Login;