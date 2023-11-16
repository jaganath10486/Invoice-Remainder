import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default function Protected({ children }) {
  //First we will get Logged In Cookie If the user sign in successfully
  //The Logged In will be stored in the Cookie if only if Sign In successfull
  const Token = cookies.get("LoggedIn")

  //If Logged In Cookie is not there then we will redirect to sign in Page
  if (!Token) {
    return <Navigate to='/' />
  }
  //else we will alow protected Route
  return children;
}