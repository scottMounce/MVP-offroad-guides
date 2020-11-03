import React from 'react';
import styles from './home.module.css';


const Home = () => {


  return (
    <div>
    <img className={styles.backGround}src={'https://reviewsimages.s3-us-west-1.amazonaws.com/Project+Off-Road+Twitter+Cover-01.jpg'}/> 
      <div className={styles.tagLine}>
        YOUR FIRST and LAST off-road stop!
      </div>
    </div>
  )



}

export default Home;