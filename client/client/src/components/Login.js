import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
//We will use useGoogleLogin for opening of google pop up and to handle OAuth
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import '../styles/Login.css';
import Cookies from "universal-cookie";

function Login() {
    const cookies = new Cookies();
    const history = useNavigate();

    //when the user clicks on the login with google after the select the account based upon the status i.e success or failure the function will executed
    const login = useGoogleLogin({
        //if the login is success it will return the code and we will send this code to the backend for verification and stroing the user details in the databse
        //and the backend will send the JWT of experation of 10 minutes and Refresh Token of expiry of 1d and we store in the cookie 
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            axios.post('http://localhost:3001/login', { 'code': tokenResponse.code })
                .then((response) => {
                    console.log(response.data);
                    if (response.data.status === 'ok') {
                        //to store the jwt token for further protected pages access
                        cookies.set("TOKEN", response.data.jwt, {
                            path: "/",
                        });
                        cookies.set("LoggedIn", true, {
                            path: "/",
                        });
                        history('/home')
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        flow: 'auth-code',

    });

    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card border-0 shadow rounded-3 my-5">
                        <div class="card-body p-4 p-sm-5">
                            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                            <form>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div class="d-grid">
                                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                        in</button>
                                </div>
                                <p className='mt-2'>Don't have an account? <Link to='Signup'>Sign Up</Link></p>
                                <hr class="my-3" />
                                <div class="d-grid mb-2">
                                    <button class="btn btn-google btn-login text-uppercase fw-bold" type="button" onClick={login}>
                                        <i class="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login