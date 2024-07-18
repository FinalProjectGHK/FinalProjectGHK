import React, { useState } from "react";
import styles from "./Card.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function Card({ foodPic, chineseName, englishName, price }) {
  const [isFav, setIsFav] = useState(false);
  function favFood() {
    setIsFav((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.productBox}>
        <div>
          <img className={styles.productPic} src={foodPic} alt="" />
        </div>
        <div>
          <p className={styles.chineseName}>{chineseName}</p>
          {/* <p className={styles.englishName}>{englishName}</p> */}
          <p className={styles.price}> ${price}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div onClick={favFood}>
              {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
            <Zoom in={true}>
              <Fab size="small" aria-label="add">
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
