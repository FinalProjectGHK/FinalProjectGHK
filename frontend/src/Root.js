import styles from "./Root.module.css";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import ShoppingCart from "./components/shoppingCart";
import Whatsapp from "./components/Whatsapp";
import Footer from "./Footer";
import { AuthProvider } from "./components/contexts/AuthContext";

const Root = () => {
  const [chosenFoods, setChosenFoods] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function addFood(chineseName, price, foodPic) {
    setChosenFoods((prevFoods) => {
      const existingFoodIndex = prevFoods.findIndex(
        (food) => food.chineseName === chineseName
      );

      if (existingFoodIndex !== -1) {
        // Chinese name already exists, update the quantity of the existing object
        const updatedFoods = [...prevFoods];
        updatedFoods[existingFoodIndex].quantity += 1;
        return updatedFoods;
      } else {
        // Chinese name doesn't exist, add the new object to the array
        const newFood = {
          chineseName: chineseName,
          price: price,
          foodPic: foodPic,
          quantity: 1,
        };
        return [...prevFoods, newFood];
      }
    });
  }

  console.log(chosenFoods);

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
    <AuthProvider>
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
    </AuthProvider>
  );
};
export default Root;
