import React, { useState } from "react";

function Card({ sushiPic, chineseName, japaneseName, englishName }) {
  const [chosenFood, setChosenFood] = useState([]);

  function addFood() {
    setChosenFood((prevItem) => {
      return [...prevItem];
    });
  }
  return (
    <div onClick={addFood} className="productBox">
      <div>
        <img className="productPic" src={sushiPic} alt="" />
      </div>
      <div>
        <p>{chineseName}</p>
        <p>{japaneseName}</p>
        <p>{englishName}</p>
      </div>
    </div>
  );
}

export default Card;
