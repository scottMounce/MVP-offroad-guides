import React, { useState, useEffect } from 'react';
import Shops from '../Shops/Shops.jsx';
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

  const renderView = () => {
    if (page === 'home') {
      return <Shops shops={shops}/>
    }
  }
  
  
  return (
    <div>
      <div className={styles.nav}>
        <span className={styles.logo}>        
        </span>
      </div>
      <div>{renderView()}</div>
    </div>
  )
    

}

export default App;