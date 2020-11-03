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
  const [trails, setTrails] = useState([]);


  useEffect(() => {
    fetch('/shops')
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      setShops(results);
    })
    .then(() => {
      fetch('/trails')
      .then((res) => {
        return res.json();
      })
      .then((results) => {
        setTrails(results)
      })
      .catch((error) => {
        console.log(error);
      })
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
      return <Trails trails={trails}/>
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
      <img className={styles.logo}src={'https://reviewsimages.s3-us-west-1.amazonaws.com/Project+Off-Road+Twitter+Cover-01.jpg'} onClick={() => {changeView('home')}}/>                        
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