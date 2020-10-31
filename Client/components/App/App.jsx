import React, { useState, useEffect } from 'react';
import Shops from '../Shops/Shops.jsx';


const App = () => {
  const [page, setPage] = useState('home');


  const renderView = () => {
    if (page === 'home') {
      return <Shops />
    }
  }
  
  
  return (
    <div>
      <div>{renderView()}</div>
    </div>
  )
    

}

export default App;