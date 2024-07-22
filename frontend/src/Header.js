import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DrawerComponent from "./components/DrawerComponent";
const Header = ({ scrollPosition_root }) => {
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
  function openPreview() {
    setIsOpen((prevState) => {
      return !prevState;
    });
  }
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
      /* headerBarRef.current.classList.remove(styles.headerBar)
        headerBarRef.current.classList.add(styles.headerBar) */
    }
  }, [scrollPosition_root]);
  return (
    <>
      {/* <div> */}
      <div ref={headerBarRef} className={styles.headerBar}>
        <div ref={headerBarContentRef} className={styles.headerBar_content}>
          <Link to="/home">Home</Link>
          <div className={styles.rightContainer}>
            <Link to="/cart">
              <img src="/cart.png" alt="購物車" className={styles.cart} />
            </Link>
            <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
          </div>
        </div>
      </div>
      {/* <div onClick={openPreview}>
      <div
        style={{
          width: isOpen ? "1200px" : "40px",
          left: isOpen ? "580px" : "1750px",
        }}
        className={styles.previewBox}
      ></div>
      <div
        style={{
          width: isOpen ? "1150px" : null,
          left: isOpen ? "610px" : "1750px",
        }}
        className={styles.previewInsideBox1}
      ></div>
      <div
        style={{
          width: isOpen ? "1150px" : null,
          left: isOpen ? "610px" : "1750px",
        }}
        className={styles.previewInsideBox2}
      ></div>
    </div> */}
    </>
  );
};
export default Header;
