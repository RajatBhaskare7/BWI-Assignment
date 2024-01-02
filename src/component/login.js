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
      <input onChange={(e) => {
          setUsername(e.target.value);
      }}
        type="text" placeholder="username" />
      <input type="password"
        onChange={(e) => {
          setPassword(e.target.value);
      }}
      placeholder="password" />
      <button
        onClick={handlesubmit}
      >Login</button>

     
    </div>
  )
}
