import styles from "./shoppingCart.module.css";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import emptyCart from "../image/empty.png";

export default function ShoppingCart({
  chosenFoods,
  delFood,
  addItem,
  delItem,
}) {
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
    <div className={styles.bgContainer}>
      <div className={styles.div_shoppingCart}>
        <button
          onClick={toggleDrawer(true)}
          className={styles.btn_shoppingCart}
        >
          <img
            src="/cart.png"
            className={styles.img_shoppingCart}
            alt="shopping cart"
          />
          <label
            style={{ fontSize: "28px" }}
            className={styles.lbl_shoppingCart}
          >
            購 物 車
          </label>
        </button>
        <Drawer
          classes={{ paper: styles.drawerPaper }}
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          <div className={styles.drawerContent}>
            {chosenFoods.length === 0 ? (
              <div className={styles.emptyCart}>
                <img src={emptyCart} alt="Empty Cart" />
                <p>Your Cart is Empty</p>
                <p>Add items to get started</p>
                <button onClick={toggleDrawer(false)}>Continue to shop</button>
              </div>
            ) : (
              chosenFoods
                .filter(
                  (item) => item.chineseName && item.foodPic && item.price
                )
                .map((item, index) => (
                  <ShoppingCartList
                    key={index}
                    id={index}
                    chineseName={item.chineseName}
                    foodPic={item.foodPic}
                    price={item.price}
                    quantity={item.quantity}
                    delFood={delFood}
                    addItem={addItem}
                    delItem={delItem}
                  />
                ))
            )}
          </div>
          {/* <div className={styles.drawerContent}>
            {chosenFoods
              .filter((item) => item.chineseName && item.foodPic && item.price)
              .map((item, index) => (
                <ShoppingCartList
                  key={index}
                  id={index}
                  chineseName={item.chineseName}
                  foodPic={item.foodPic}
                  price={item.price}
                  quantity={item.quantity}
                  delFood={delFood}
                  addItem={addItem}
                  delItem={delItem}
                />
              ))}
          </div> */}
        </Drawer>
      </div>
    </div>
  );
}
