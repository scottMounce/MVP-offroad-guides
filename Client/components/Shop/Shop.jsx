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
    <div>      
      <div>{shop.name}</div>
      <img src={shop.logo}/>
      <div>{shop.address}</div>
      <div>{shop.phone}</div>
      <div>{shop.email}</div>                
      <Map location={location} zoomLevel={zoomLevel} shop={shop}/> 
    </div>
  )
}



export default Shop;