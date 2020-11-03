import React from 'react';
import styles from './trail.module.css';


const Trail = ({trail}) => {

  return (
    <div className={styles.trailContainer}>
      <div>{trail.name}</div>
      <img className={styles.trailImage}src={trail.image}/> 
      <label> I am a :
        <select>
          <option>Beginner Off-Roader</option>
          <option>Intermediate Off-Roader</option>
          <option>Advanced Off-Roader</option>
        </select>
      </label>    
      <label> Seeking :
        <select>
          <option>Easy Trails</option>
          <option>Intermediate Trails</option>
          <option>Hard Trails</option>
          <option>I don't care if I break my rig</option>
        </select>
      </label> 
      <button>Find a Guide</button>
    </div>
  )

}

export default Trail;