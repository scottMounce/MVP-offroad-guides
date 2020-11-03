import React from 'react';
import styles from './shop.module.css';
import Map from '../Map/Map.jsx';


const Shop = ({shop}) => {
  let numArr = shop.coords.split(', ')  
  
  let location = {
    address: shop.address,
    lat: Number(numArr[0]),
    lng: Number(numArr[1])
  }
  
  let zoomLevel = 12;  
  
  return (
    <div className={styles.shopContainer}>      
      <div className={styles.info}>
        <img className={styles.logo}src={shop.logo}/>
        <div className ={styles.shopName}>{shop.name}</div>
        <div className={styles.address}>{shop.address}</div>
        <div className={styles.phone}>{shop.phone}</div>
        <div className={styles.email}>{shop.email}</div>                
      </div>
      <Map className={styles.map}location={location} zoomLevel={zoomLevel} shop={shop}/> 
    </div>
  )
}



export default Shop;