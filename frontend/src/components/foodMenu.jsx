import styles from "./foodMenu.module.css";
import { useState, useRef } from "react";
import Card from "./Card";
import Dessert from "../menu/dessert"; // for test
import Drinks from "../menu/drink"; // for test
import Noodle from "../menu/noodle"; // for test
import Pasta from "../menu/pasta"; // for test
import Rice from "../menu/rice"; // for test
const scrollDistance = 220;
const barMaxWidth = 1270;
/* const CategoryLinks = (sc) => { */
export default function FoodMenu({ scrollPosition_home }) {
  const categoryNameArr = [
    "Rice",
    "Pasta",
    "Noodle",
    "Dessert",
    "Favorite",
    "Vegan",
    "Drinks",
  ];
  const data_allCategory = {
    Favorite: {},
    Vegan: {},
    Rice: Rice,
    Pasta: Pasta,
    Noodle: Noodle,
    Dessert: Dessert,
    Drinks: Drinks,
  }; // for test
  //const data_allCategory = {}
  /* useEffect(() => {
        //fecth data here
        return(data_allCategory)
    }, []) */
  const [categoryFoods, setCategoryFoods] = useState(data_allCategory["Rice"]);
  const [selectedCategory, setSelectedCategory] = useState("Rice");
  const [scrollPostion, setScrollPostion] = useState(0);
  const scrollViewRef = useRef();
  const btnContainerRef = useRef();
  // useEffect(() => {
  //   if (scrollPosition_home >= 900) {
  //     btnContainerRef.current.classList.add(styles.div_btnContainer_bg);
  //   } else {
  //     btnContainerRef.current.classList.remove(styles.div_btnContainer_bg);
  //   }
  // }, [scrollPosition_home]);

  function changeBtnStyle(categroy) {
    if (selectedCategory === categroy) {
      return `${styles.btn_categroy_pressed} ${styles.btn_categroy}`;
    } else {
      return styles.btn_categroy;
    }
  }
  function showCategroyBar(categoryName) {
    return categoryName.map((categoryName, index) => (
      <button
        key={index}
        className={changeBtnStyle(categoryName)}
        onClick={() =>
          handleButton(data_allCategory[categoryName], categoryName)
        }
      >
        <label className={styles.lbl_categroy}>{categoryName}</label>
      </button>
    ));
  }
  function handleButton(categoryFoods, categroy) {
    setCategoryFoods(categoryFoods);
    setSelectedCategory(categroy);
    /* // TODO
        setScrollPostion(0)
        scrollViewRef.current.scrollLeft = 0 */
  }
  function handleScroll(scrollAmount) {
    /* let newScrollPostion = scrollPostion + scrollAmount */
    let newScrollPostion = scrollPostion + scrollAmount;
    if (newScrollPostion < 0) {
      newScrollPostion = 0;
    } else if (
      newScrollPostion >
      scrollViewRef.current.scrollLeft + scrollDistance
    ) {
      newScrollPostion = scrollViewRef.current.scrollLeft;
    }
    setScrollPostion(newScrollPostion);
    scrollViewRef.current.scrollLeft = newScrollPostion;
  }
  // function showCategroyFood(categoryFoods) {
  //   return categoryFoods.map((categoryFoods, index) => (
  //     <Card
  //       key={index}
  //       foodPic={categoryFoods.img_url}
  //       chineseName={categoryFoods.name_c}
  //       //englishName={dessert.name_e}
  //       price={categoryFoods.price}
  //       className={styles.card}
  //     />
  //   ));
  // }

  return (
    <>
      {/* <div className={styles.categroyBar_container2}> </div>*/}
      <div className={styles.categroyBar_container}>
        <div className={styles.categroyBar}>
          {/* <div className={styles.div_controlLeft}>
            <button
              className="flex items-center justify-center cursor-pointer group focus:outline-none"
              onClick={() => {
                handleScroll(-scrollDistance);
              }}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EBE3D5] group-hover:bg-[#D1CABD] group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </span>
            </button>
          </div> */}
          <div ref={scrollViewRef} className={styles.div_scrollView}>
            <div
              ref={btnContainerRef}
              className={
                scrollPosition_home && scrollPosition_home >= 900
                  ? `${styles.div_btnContainer_bg} ${styles.div_btnContainer}`
                  : `${styles.div_btnContainer}`
              }
            >
              {showCategroyBar(categoryNameArr)}
            </div>
          </div>
          {/* <div className={styles.div_controlRight}>
            <button
              className="flex items-center justify-center cursor-pointer group focus:outline-none"
              onClick={() => {
                handleScroll(scrollDistance);
              }}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EBE3D5] group-hover:bg-[#D1CABD] group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </button>
          </div> */}
        </div>
      </div>
      <div className={styles.foodList_outside}>
        <div className={styles.foodList}>
          {categoryFoods.map((categoryFoods, index) => (
            <Card
              key={index}
              foodPic={categoryFoods.img_url}
              chineseName={categoryFoods.name_c}
              //englishName={dessert.name_e}
              price={categoryFoods.price}
              className={styles.card}
            />
          ))}
        </div>
      </div>
    </>
  );
}
/* export default CategoryLinks; */
