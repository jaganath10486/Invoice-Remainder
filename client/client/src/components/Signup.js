//Sign Up Component 

import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();

function SignUp() {
    const history = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            axios.post('http://localhost:3001/login', { 'code': tokenResponse.code })
                .then((response) => {
                    if (response.data.status == 'ok') {
                        cookies.set("TOKEN", response.data.jwt, {
                            path: "/",
                        });
                        cookies.set("LoggedIn", true, {
                            path: "/",
                        });
                        history('/home')
                    }
                    console.log(response);
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
                                    <label for="floatingInput">First Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Last Name</label>
                                </div>

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
                                        Up</button>
                                </div>
                                <p className='mt-2'>Already have an account? <Link to='/'>Login In</Link></p>
                                <hr class="my-3" />
                                <div class="d-grid mb-2">
                                    <button class="btn btn-google btn-login text-uppercase fw-bold" type="button" onClick={login}>
                                        <i class="fab fa-google me-2"></i> Sign up with Google
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

export default SignUp