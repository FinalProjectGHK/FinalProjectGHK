import styles from "./Root.module.css";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import ShoppingCart from "./components/shoppingCart";
import Whatsapp from "./components/Whatsapp";
import Footer from "./Footer";
import { AuthProvider } from "./components/contexts/AuthContext";

const Root = () => {
  /* const [chosenFood, setChosenFood] = useState({
    chineseName: "",
    price: "",
    foodPic: "",
    amount: 0,
  }); */
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

  /* // old
  useEffect(() => {
    setChosenFoods((prevItem) => {
      return [...prevItem, chosenFood];
    });
    //console.log(chosenFoods); 
  }, [chosenFood]);

  function addFood(chineseName, price, foodPic) {
    console.log(chineseName, price, foodPic);
    console.log(chosenFoods)

    let newArray = []
    let index = 0
    const newObject = {'chineseName': chineseName, 'price': price, 'foodPic': foodPic, 'amount': 1};

    chosenFoods.forEach((item, idx) => {
      //console.log('item[chineseName]' + item['chineseName'])
      if(item['chineseName'] === chineseName) {
        index = idx
      } else {
        index = -1
      }
    })
    
    console.log(index)
    if(index !== -1) {
      console.log('exist')
      chosenFoods.forEach(item => {return newArray.push(item)})
      newArray[index].amount += 1 // setChosenFood() is executed
      console.log(newArray)
      //console.log('amount of added item: ' + newArray[index].amount)
    } else {
      console.log('no exist')
      chosenFoods.forEach(item => {return newArray.push(item)})
      newArray.push(newObject)
      console.log(newArray)
      setChosenFood((prevState) => {
        return {
          ...prevState,
          chineseName: chineseName,
          price: price,
          foodPic: foodPic,
          amount: 1,
        };
      });
      console.log('amount of added item: ' + newObject.amount)
    }
  } */

  /* // backup
  useEffect(() => {
    setChosenFoods((prevItem) => {
      return [...prevItem, chosenFood];
    });
    //console.log(chosenFoods); 
  }, [chosenFood]);

  function addFood(chineseName, price, foodPic) {
    console.log(chineseName, price, foodPic);
    setChosenFood((prevState) => {
      console.log(chosenFoods)
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
    // console.log(chosenFoods);
  } */

  function delFood(id) {
    setChosenFoods((prevFoods) => {
      return prevFoods.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function addItem(id) {
    const updatedFoods = [...chosenFoods];
    updatedFoods[id].quantity += 1;
    setChosenFoods(updatedFoods);
  }

  function delItem(id) {
    if (chosenFoods[id].quantity > 1) {
      setChosenFoods((prevFoods) => {
        const updatedFoods = [...prevFoods];
        updatedFoods[id].quantity -= 1;
        return updatedFoods;
      });
    } else {
      delFood(id);
    }
  }

  //console.log(chosenFoods);

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

  const outletContextObj = {
    addFood: addFood,
    chosenFoods: chosenFoods,
  };

  return (
    <AuthProvider>
      <div className={styles.header}>
        <Header
          scrollPosition_root={scrollPosition}
          chosenFoods={chosenFoods}
        />
      </div>
      <div className={styles.outlet}>
        <Outlet context={[outletContextObj]} />
      </div>
      <div className={styles.footer}></div>
      <ShoppingCart
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        chosenFoods={chosenFoods}
        delFood={delFood}
        addItem={addItem}
        delItem={delItem}
      />
      <Whatsapp />
      <Footer />
    </AuthProvider>
  );
};
export default Root;
