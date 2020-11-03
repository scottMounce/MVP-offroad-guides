import React from 'react';
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker'
import styles from './map.module.css';

const LocationPin = ({ text, name }) => (
  <div className={styles.pin}>
    <Icon icon={locationIcon} className={styles.pinIcon} />
    <p className={styles.shopName}>{name}</p>
    <p className={styles.pinText}>{text}</p>
  </div>
)

export default LocationPin;