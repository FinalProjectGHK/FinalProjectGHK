import React, { useState, useEffect } from "react";
import styles from "./LuckyDraw.module.css";
import Card from "./Card";
import luckyDrawPic from "../image/luckyDraw.png";

function LuckyDraw() {
  const [allProducts, setAllProducts] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);
  const randomPic = [];
  const randomName = [];
  const randomPrice = [];

  function generatePic() {
    for (let i = 0; i < allProducts.length; i++) {
      randomPic.push(allProducts[i]["img_url"]);
    }
  }

  function generateName() {
    for (let i = 0; i < allProducts.length; i++) {
      randomName.push(allProducts[i]["name_c"]);
    }
  }

  function generatePrice() {
    for (let i = 0; i < allProducts.length; i++) {
      randomPrice.push(allProducts[i]["price"]);
    }
  }
  generatePic();
  generateName();
  generatePrice();

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const res = await fetch("http://localhost:3001/allproducts");
        const result = await res.json();
        setAllProducts(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllProducts();
  }, []);

  useEffect(() => {
    function handleScroll() {
      // Generate a new random number when the div is scrolled
      const newRandomNumber = Math.floor(Math.random() * allProducts.length);
      setRandomNumber(newRandomNumber);
    }

    document
      .querySelector(`.${styles.container}`)
      .addEventListener("scroll", handleScroll);

    return () => {
      document.querySelector(`.${styles.container}`);
      // .removeEventListener("scroll", handleScroll);
    };
  }, [allProducts]);

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <h3>諗唔到食乜？</h3>
        <img src={luckyDrawPic} alt="luckyDrawPic" />
      </div>
      {allProducts && (
        <div className={styles.card}>
          <Card
            foodPic={randomPic[randomNumber]}
            chineseName={randomName[randomNumber]}
            price={randomPrice[randomNumber]}
          />
        </div>
      )}
      <div className={styles.innerBox}></div>
    </div>
  );
}

export default LuckyDraw;
