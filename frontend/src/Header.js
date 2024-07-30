import { useState, useEffect, useRef, React } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DrawerComponent from "./components/DrawerComponent";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import { grey } from "@mui/material/colors";
import { useAuth } from "./components/contexts/AuthContext";

const Header = ({ scrollPosition_root, chosenFoods }) => {
  const { currentUser } = useAuth();
  const headerBarRef = useRef();
  const headerBarContentRef = useRef();

  return (
    <div>
      <div
        ref={headerBarRef}
        className={
          scrollPosition_root && scrollPosition_root > 0
            ? `${styles.headerBar_downing} ${styles.headerBar} `
            : `${styles.headerBar}`
        }
      >
        <div
          ref={headerBarContentRef}
          className={
            scrollPosition_root && scrollPosition_root > 0
              ? `${styles.headerBar_content_downing} ${styles.headerBar_content}`
              : `${styles.headerBar_content}`
          }
        >
          <div className={styles.leftContainer}>
            <Link to="/home">
              <HomeIcon fontSize="large" />
            </Link>
          </div>
          <div className={styles.rightContainer}>
            {currentUser ? (
              <Avatar sx={{ bgcolor: grey[700], width: 32, height: 32 }}>
                {currentUser.email[0].toUpperCase()}
              </Avatar>
            ) : null}

            <DrawerComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
