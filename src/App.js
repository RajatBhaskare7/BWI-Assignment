// import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';
import Home from './component/home';
function App() {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      window.location.href = '/login';

    }
  }
  , [])
  return (
    <div>
    <Home />
    </div>
  );
}

export default App;
