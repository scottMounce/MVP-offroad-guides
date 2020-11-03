import React from 'react';
import Shop from '../Shop/Shop.jsx';
import styles from './shops.module.css';


const Shops = ({shops}) => {
  return (
    <div>
      <div className={styles.recommended}>Recommended Shops</div>
      {shops.map((shop) => {
        return <Shop 
        key={shop._id}
        shop={shop}
        />
      })}
    </div>
  )
  
}

export default Shops;