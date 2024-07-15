import React, { useState } from "react";
import styles from "./Card.module.css";
function Card({ sushiPic, chineseName, japaneseName, englishName, price }) {
  const [chosenFood, setChosenFood] = useState([]);

  function addFood() {
    setChosenFood((prevItem) => {
      return [...prevItem];
    });
  }
  return (
    <div className={styles.container}>
    <div onClick={addFood} className={styles.productBox}>
      <div>
        <img className={styles.productPic} src={sushiPic} alt="" />
      </div>
      <div>
        <p className={styles.japaneseName}>{japaneseName}</p>
        <p className={styles.chineseName}>{chineseName}</p>
        <p className={styles.englishName}>{englishName}</p>
        <p className={styles.price}> ${price}</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
