import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => alert(e.message))
    }
    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');

            })
            .catch(e => alert(e.message))

    }


    return (
        <div className='login'>
            <Link to="/">
                <img
                    className='login_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png'
                    alt=""
                />
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    <h5>password</h5>
                    <input type='text' value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    <button onClick={login} type='submit' className='login_signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's conditions.
                </p>
                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login