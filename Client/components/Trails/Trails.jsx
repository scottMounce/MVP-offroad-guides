import React from 'react';
import Trail from '../Trail/Trail.jsx';


const Trails = ({trails}) => {
  return (
    <div>
     {trails.map((trail) => {
       return <Trail 
       key={trail._id}
       trail={trail}
       />
     })}
    </div>
  )
}

export default Trails;