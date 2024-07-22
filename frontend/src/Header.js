import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DrawerComponent from "./components/DrawerComponent";
const Header = ({ scrollPosition_root }) => {
  const headerBarRef = useRef();
  const headerBarContentRef = useRef();
  useEffect(() => {
    if (scrollPosition_root > 0) {
      headerBarRef.current.classList.add(styles.headerBar_downing);
      headerBarContentRef.current.classList.add(
        styles.headerBar_content_downing
      );
    } else {
      headerBarRef.current.classList.remove(styles.headerBar_downing);
      headerBarContentRef.current.classList.remove(
        styles.headerBar_content_downing
      );
    }
  }, [scrollPosition_root]);

  return (
    <div>
      <div ref={headerBarRef} className={styles.headerBar}>
        <div ref={headerBarContentRef} className={styles.headerBar_content}>
          <Link to="/home">Home</Link>
          <div className={styles.rightContainer}>
            <Link to="/cart">
              <img src="/cart.png" alt="購物車" className={styles.cart} />
            </Link>
            <DrawerComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
