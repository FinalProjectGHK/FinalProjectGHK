import styles from "./Root.module.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import ShoppingCart from "./components/shoppingCart";
import Whatsapp from "./components/Whatsapp";
const Root = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        <Outlet />
      </div>
      <div className={styles.footer}></div>
      <ShoppingCart isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Whatsapp />
    </>
  );
};
export default Root;
