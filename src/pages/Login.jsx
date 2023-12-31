import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { login } from '../context/userSlice';
import './Login.scss'
import { profileModalOn } from '../context/stateSlice';


const Login = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.userSlice)
    console.log('in login')
  return (
    <div className="login">
      <h1>Signin, and lets go.</h1>
      <br />
    <GoogleLogin
      onSuccess={credentialResponse => {
        let jwtUser = jwtDecode(credentialResponse.credential)
        // console.log(jwtUser)
        dispatch(login(jwtUser))
        // dispatch(profileModalOn())
        // nav('/')
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
        </div>
  )
}

export default Login