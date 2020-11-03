import React from 'react';
import Shop from '../Shop/Shop.jsx';


const Shops = ({shops}) => {
  return (
    <div>
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