import React, { useState, useEffect } from 'react';
import Shops from '../Shops/Shops.jsx';
import Home from '../Home/Home.jsx';
import SignUp from '../Signup/SignUp.jsx';
import Login from '../Login/Login.jsx';
import Consulting from '../Consulting/Consulting.jsx';
import Trails from '../Trails/Trails.jsx';
import About from '../About/About.jsx';
import styles from './app.module.css';


const App = () => {
  const [page, setPage] = useState('home');
  const [shops, setShops] = useState([]);


  useEffect(() => {
    fetch('/shops')
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      setShops(results);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);  

  const changeView = (view) => {
    setPage(view)
  }

  const renderView = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'shops') {
      return <Shops shops={shops}/>
    } else if (page === 'trails') {
      return <Trails />
    } else if (page === 'consulting') {
      return <Consulting />
    } else if (page === 'about') {
      return <About />
    } else if (page === 'signUp') {
      return <SignUp />
    } else if (page === 'login') {
      return <Login />
    }
  }

  
  
  
  return (
    <div>
      <div className={styles.nav}>
        <span className={styles.logo}
        onClick={() => {changeView('home')}}        
        > Project Off-Road        
        </span>
        <span
        onClick={() => {changeView('shops')}}
        > Shops  
        </span>
        <span
        onClick={() => {changeView('trails')}}
        > Trails
        </span>
        <span
        onClick={() => {changeView('consulting')}}
        > Consulting 
        </span>
        <span
        onClick={() => {changeView('about')}}
        > About
        </span>
        <span
        onClick={() => {changeView('signUp')}}
        > Sign-Up
        </span>
        <span
        onClick={() => {changeView('login')}}
        > Login
        </span>
      </div>
      <div>{renderView()}</div>
    </div>
  )
    

}

export default App;