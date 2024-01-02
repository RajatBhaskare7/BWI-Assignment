import React, { useEffect } from 'react'
import { useState } from 'react';
export default function Login() {
    const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handlesubmit = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: username,
        password: password,
       
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    })
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      window.location.href = '/';
    }
  }
    , [])
  return (
    <div>
      {/* <input 
        type="text" placeholder="username" />
      <input type="password"
       
      placeholder="password" />
      <button
       
      >Login</button> */}

<div class='loginpage'>
<div class="container">
            <div class="pic2"></div>
            {/* <img src="https://store-images.s-microsoft.com/image/apps.28471.14139628370441750.28b315c6-e587-4ac5-8b42-4388ed4a2f09.d5ba0d3b-63ca-4d9d-ba00-47fcfa6b02e1" alt=""> */}
            <h1
                style={{
                    color: '#000',
                   
                }}
            >Log in To Continue</h1>
            <div class="inp">
                <input type="text"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                id="username"/>
                <label onclick="focusinp('usr')" for="Username">Username</label>
            </div>
            <div class="inp">
                <input
                 onChange={(e) => {
                    setPassword(e.target.value);
                }}
                type="password" id="password"/>
                <label onclick="focusinp('pass')" for="Password">Password</label>
            </div>
            
            <button 
             onClick={handlesubmit}
            >Login</button>
           
        </div>
        <div>
            Dummy data:<br/>
            <b>Username: kminchelle</b><br/>
            <b>Password: 0lelplR</b>
        </div>
</div>

     
    </div>
  )
}
