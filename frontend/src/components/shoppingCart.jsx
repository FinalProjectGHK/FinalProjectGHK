import styles from "./shoppingCart.module.css";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
export default function ShoppingCart() {
  const [isOpen, setIsOpen] = React.useState(false);
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
          <label className={styles.lbl_shoppingCart}>Shopping Cart</label>
        </button>
        <Drawer
          classes={{ paper: styles.drawerPaper }}
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          <div className={styles.drawerContent}></div>
        </Drawer>
      </div>
    </div>
  );
}
