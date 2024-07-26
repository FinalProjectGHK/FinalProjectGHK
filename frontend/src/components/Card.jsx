import React, { useState } from "react";
import styles from "./Card.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";

function Card({ foodPic, chineseName, englishName, price }) {
  const [outletContextObj] = useOutletContext();
  const addFood = outletContextObj["addFood"];
  // const [userFav, setUserFav] = useState([]);
  const { currentUser } = useAuth();
  const [isFav, setIsFav] = useState(false);
  // const [liked, setLiked] = useState(false);

  // useEffect(() => {
  //   async function fetchUserFav() {
  //     try {
  //       const res = await fetch(
  //         `http://localhost:3001/userFav/?email=${currentUser.email}`
  //       );
  //       const result = await res.json();
  //       setUserFav(result[0]["favouriteItem"]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchUserFav();
  // }, []);

  async function favFood() {
    setIsFav((prevState) => {
      return !prevState;
    });
  }

  async function addFav(chineseName, price, foodPic) {
    try {
      console.log(chineseName, price, foodPic);
      let favItem = {
        email: currentUser.email,
        chineseName: chineseName,
        price: price,
        foodPic: foodPic,
      };
      console.log(favItem);
      let result = await fetch("http://localhost:3001/addFavItem", {
        method: "PATCH",
        body: JSON.stringify(favItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFav(chineseName, price, foodPic) {
    try {
      let favItem = {
        email: currentUser.email,
        chineseName: chineseName,
        price: price,
        foodPic: foodPic,
      };
      let result = await fetch("http://localhost:3001/removeFavItem", {
        method: "PATCH",
        body: JSON.stringify(favItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   function checkLiked() {
  //     for (let i = 0; i < userFav.length; i++) {
  //       if (userFav[i]["chineseName"] === chineseName) {
  //         setLiked(true);
  //       }
  //     }
  //   }
  //   checkLiked();
  // }, [userFav, chineseName]);

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
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: "30px",
            }}
          >
            {currentUser ? (
              <div onClick={favFood}>
                {isFav ? (
                  <FavoriteIcon
                    onClick={() => removeFav(chineseName, price, foodPic)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => addFav(chineseName, price, foodPic)}
                  />
                )}
              </div>
            ) : null}
            <Zoom in={true}>
              <Fab
                onClick={() => addFood(chineseName, price, foodPic)}
                size="small"
                aria-label="add"
              >
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
