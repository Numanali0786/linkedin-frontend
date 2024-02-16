import React, { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { login } from '../context/userSlice';
import './Login.scss'
import { profileModalOn } from '../context/stateSlice';
import { PageStyle } from '../components/PageStyle'


const Login = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('login useeffect')
  }, [])


  return (
    <div className="login__page">
      <PageStyle>
        <header>
          <img src="https://1000logos.net/wp-content/uploads/2023/01/Linkedin-logo.jpg" alt="" />

        </header>
        <section className='login__content'>
          <div className="login__left">


            <h1>Welcome to your professional community</h1>
            <form action="">
              <label htmlFor="email">Email or phone</label>
              <input type="text" id='email' />

              <label htmlFor="pass">Password</label>

              <input type="text" id='pass' />
              <p className='forgot'>Forgot pasword</p>
              <button className='signin'>Sign in</button>
            </form>

            <GoogleLogin
              onSuccess={credentialResponse => {
                let jwtUser = jwtDecode(credentialResponse.credential)
                dispatch(login(jwtUser))
                nav('/')
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>

          <div className="login__right">
            <img src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
          </div>
        </section>
      </PageStyle>
    </div>
  )
}

export default Login