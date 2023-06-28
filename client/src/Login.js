import {React, useState, useEffect} from 'react';

function Login() {
    return(
        <div>
            <h1>Login Here</h1>
            <form id="login">
                <h3>Username:</h3>
                <input type="text" name="username"></input>
                <h3>Password:</h3>
                <input type="text" name="password"></input>
                <input type="submit" value="Login"></input>      
            </form>
        </div>
    )

}

export default Login;