import styles from "./Root.module.css";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import ShoppingCart from "./components/shoppingCart";
import Whatsapp from "./components/Whatsapp";
import Footer from "./Footer";

const Root = () => {
  const [chosenFood, setChosenFood] = useState({
    chineseName: "",
    price: "",
    foodPic: "",
  });

  const [chosenFoods, setChosenFoods] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setChosenFoods((prevItem) => {
      return [...prevItem, chosenFood];
    });
  }, [chosenFood]);

  function addFood(chineseName, price, foodPic) {
    console.log(chineseName, price, foodPic);
    setChosenFood((prevState) => {
      return {
        ...prevState,
        chineseName: chineseName,
        price: price,
        foodPic: foodPic,
      };
    });
    // setChosenFoods((prevItem) => {
    //   return [...prevItem, chosenFood];
    // });
    console.log(chosenFoods);
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };
  return (
    <>
      <div className={styles.header}>
        <Header scrollPosition_root={scrollPosition} />
      </div>
      <div className={styles.outlet}>
        <Outlet context={[addFood]} />
      </div>
      <div className={styles.footer}></div>
      <ShoppingCart
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        chosenFoods={chosenFoods}
      />
      <Whatsapp />
      <Footer />
    </>
  );
};
export default Root;
