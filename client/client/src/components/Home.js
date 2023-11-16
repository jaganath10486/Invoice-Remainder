
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import axios from 'axios';

const cookies = new Cookies();

function Home() {
    const history = useNavigate();
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    const [flag, setFlag] = useState(false);
    const [amount, setAmount] = useState(0.00);
    const [due, setDue] = useState();

    const token = cookies.get("TOKEN");

    //When the User Logout we will remove the Cookies and redirect to the Sign IN page
    const logout = () => {
        cookies.remove('LoggedIn')
        cookies.remove('TOKEN')
        history('/')
    }

    //To extract the User Profile in Home Page we will pass the JWT Token from the cookie for authentication and authorization
    useEffect(() => {
        axios.get('http://localhost:3001/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                console.log(response.data);
                if (response.data.status == 'ok') {
                    setUser(response.data.data[0]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    //To Trigger the Authomate the email process endpoint
    //We have to pass the JWT token in Authorization Header for authorization in the backend based on the token the user will get email of his/her past due invoices
    const sendRemainder = () => {
        setMessage('');
        axios.get('http://localhost:3001/remainder', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                console.log(response);
                setMessage(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const addInvoice = () => {
        setFlag(true);
    }

    //This is for adding Invoices in the Table for testing of automation of the email of past due invoices
    const submitinvoice = (e) => {
        e.preventDefault();
        setMessage('');
        axios.post('http://localhost:3001/invoice-details', { amount, due }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((result) => {
                console.log(result.data);
                setMessage("Stored in the Database check the Invoice Details ")
            })
            .catch((err) => {
                console.log(err);
            })

        setAmount(0.00);
        setDue();
        setFlag(false);
    }

    return (
        <div className='container mt-5 pt-5'>
            <div className='row'>
                <section>
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-md-12 col-xl-4">
                                <div class="card" style={{ "border-radius": "15px" }}>
                                    <div class="card-body text-center">
                                        <div class="mt-3 mb-4">
                                            <img src={user.profile_pic}
                                                class="rounded-circle img-fluid" style={{ "width": "100px" }} />
                                        </div>
                                        <h4 class="mb-2">{user.name}</h4>
                                        <p class="text-muted mb-2">First Name :  <span class="mx-2">{user.first_name}</span></p>
                                        <p class="text-muted mb-4">Last Name :  <span class="mx-2">{user.last_name}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">See Invoice Details</h5>
                            <p class="card-text">See all the Invoice Details that exists in the records.</p>
                            <Link to="/invoice-details" class="btn btn-primary">Invoice Details</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Sent the Email of all Past Due Remainder</h5>
                            <p class="card-text">Send the Email of all Past Due Reamider.</p>
                            <button class="btn btn-primary" onClick={sendRemainder}>Send a Remainder</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Add Invoice </h5>
                            <p class="card-text">For Testing You can add Invoice with past dues.</p>
                            <button class="btn btn-primary" onClick={addInvoice} >Add Invoice</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col'>
                    {message && (<h4 className='mt-4'>{message}</h4>)}
                </div>
            </div>
            <div className='row d-flex justify-content-center mt-5 '>
                <div className='col-3'>
                    <button type='button' className='btn btn-primary' onClick={logout} >
                        Log Out
                    </button>
                </div>
            </div>
            {
                flag && (<div className='row d-flex justify-content-center'>
                    <div className='col-4 mt-4 pt-4 mb-4' style={{ 'backgroundColor': 'white' }}>
                        <form onSubmit={submitinvoice}>
                            <div class="mb-3">
                                <label for="Invoice Amount" class="form-label">Invoice Amount(Enter in decimal i.e 23.00)</label>
                                <input type="number" class="form-control" id="numberInput" required value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                            </div>
                            <div class="mb-3">
                                <label for="Invoice Due" class="form-label">Invoice Due</label>
                                <input type="date" class="form-control" id="dateInput" required value={due} onChange={(e) => { setDue(e.target.value) }} />
                            </div>
                            <button type='submit' className='btn btn-primary mb-4 p-2'>Submit</button>
                        </form>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Home;