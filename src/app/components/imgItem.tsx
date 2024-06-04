import React from 'react';
import styles from '../styles/imgItem.module.css'

const ImgBar = () => {
  return (
    <div className={styles.imgBar}>
    <div className={styles.imgBars}>
      <img className={styles.imgItem} src="/images/item 4 (1).webp" alt='Image Item'/>
      <img className={styles.imgItem} src="/images/item 4 (2).gif" alt="Image Item" />
      <img className={styles.imgItem} src="/images/item 4 (3).webp" alt="Image Item" />
      <img className={styles.imgItem} src="/images/item 4 (4).webp" alt="Image Item" />
    </div>
    </div>
  );
};

export default ImgBar;
