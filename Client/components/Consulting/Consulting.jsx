import React from 'react';
import styles from './consulting.module.css';

const Consulting = () => {

  return (
    <div>
      <div className={styles.provide}>
        <div>
          Project Off-Road is here to provide you with a one on one Off-Road vehicle specialist.           
        </div>
        <div>
          Please provide us with the following information so we can determine a specialist that will best suite your needs.                
        </div>
        <div>
          Services We Provide: 
        </div>
        <div>
        Off-Road Vehicle Build Planning | Trip & Trail Planning | Off-Road Training 
        </div>
      </div>  
      <form className={styles.inputForm}>
        <div className={styles.personal}>
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Email Address"></input>
          <input placeholder="Phone Number"></input>
        </div>
        <div className={styles.vehicle}>
          <input className={styles.year} placeholder="Vehicle Year"></input>
          <input className={styles.make} placeholder="Vehicle Make"></input>
          <input className={styles.model} placeholder="Vehicle Model"></input>
          <input className={styles.submodel} placeholder="Vehicle SubModel"></input>
        </div>
        <textarea className={styles.textArea}placeholder="Give us a brief description of what you need"></textarea>  
        <button className={styles.submitButton}>SEND IT</button>
      </form>
    </div>
  )


}

export default Consulting;